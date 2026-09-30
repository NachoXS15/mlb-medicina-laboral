"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { getSessionProfile, requireAdmin } from "./auth";
import { createAdminClient } from "@/app/utils/supabase/admin";
import { DOC_TYPES, MONTHS, docYears, isOneOf } from "@/app/config/definitions";

const BUCKET = "docsbucket";
const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB
const SIGNED_URL_SECONDS = 60;
const UUID_RE = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";

type Result<T> = ({ ok: true } & T) | { ok: false; error: string };

/** Genera una URL firmada de corta duración si quien pide es admin o dueño del documento. */
export async function getDocumentUrl(docId: string): Promise<Result<{ url: string }>> {
	const session = await getSessionProfile();
	if (!session) return { ok: false, error: "Sesión expirada. Volvé a iniciar sesión." };

	const supabaseAdmin = createAdminClient();
	const { data: doc } = await supabaseAdmin
		.from("docs")
		.select("id, user_id, path_name")
		.eq("id", docId)
		.maybeSingle();

	const isOwner = doc?.user_id === session.userId;
	const isAdmin = session.profile.role === "admin";
	if (!doc || (!isOwner && !isAdmin)) {
		return { ok: false, error: "Documento no encontrado" };
	}

	const { data, error } = await supabaseAdmin.storage
		.from(BUCKET)
		.createSignedUrl(doc.path_name, SIGNED_URL_SECONDS);
	if (error || !data?.signedUrl) {
		console.error("getDocumentUrl:", error?.message);
		return { ok: false, error: "No se pudo descargar el archivo" };
	}
	return { ok: true, url: data.signedUrl };
}

/** Borra un documento (archivo + registro). Solo admin. */
export async function deleteDocument(docId: string): Promise<Result<object>> {
	const admin = await requireAdmin();
	if (!admin) return { ok: false, error: "No autorizado" };

	const supabaseAdmin = createAdminClient();
	const { data: doc } = await supabaseAdmin
		.from("docs")
		.select("id, user_id, path_name")
		.eq("id", docId)
		.maybeSingle();
	if (!doc) return { ok: false, error: "Documento no encontrado" };

	const { error: storageError } = await supabaseAdmin.storage
		.from(BUCKET)
		.remove([doc.path_name]);
	if (storageError) {
		console.error("deleteDocument storage:", storageError.message);
		return { ok: false, error: "No se pudo borrar el archivo" };
	}

	const { error: tableError } = await supabaseAdmin.from("docs").delete().eq("id", doc.id);
	if (tableError) {
		console.error("deleteDocument table:", tableError.message);
		return { ok: false, error: "Se borró el archivo pero no el registro" };
	}

	revalidatePath(`/admin/dashboardA/viewDocuments/${doc.user_id}`);
	return { ok: true };
}

/**
 * Paso 1 de la subida: valida y devuelve una URL firmada de subida.
 * El archivo va directo del navegador a Storage (sin pasar por el límite de tamaño de las Server Actions),
 * pero solo a la ruta que el servidor autorizó.
 */
export async function createUploadUrl(input: {
	userId: string;
	fileName: string;
	fileSize: number;
	fileType: string;
}): Promise<Result<{ path: string; token: string }>> {
	const admin = await requireAdmin();
	if (!admin) return { ok: false, error: "No autorizado" };

	const { userId, fileName, fileSize, fileType } = input;
	if (!new RegExp(`^${UUID_RE}$`, "i").test(userId)) {
		return { ok: false, error: "Usuario inválido" };
	}
	if (fileType !== "application/pdf" || !fileName.toLowerCase().endsWith(".pdf")) {
		return { ok: false, error: "Solo se permiten archivos PDF" };
	}
	if (fileSize <= 0 || fileSize > MAX_FILE_BYTES) {
		return { ok: false, error: "El archivo debe pesar menos de 20 MB" };
	}

	const supabaseAdmin = createAdminClient();
	const { data: owner } = await supabaseAdmin
		.from("profiles")
		.select("id")
		.eq("id", userId)
		.maybeSingle();
	if (!owner) return { ok: false, error: "Usuario inexistente" };

	// Nombre aleatorio: evita colisiones y caracteres inválidos. El nombre original se guarda en doc_name.
	const path = `${userId}/${randomUUID()}.pdf`;
	const { data, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUploadUrl(path);
	if (error || !data) {
		console.error("createUploadUrl:", error?.message);
		return { ok: false, error: "No se pudo preparar la subida" };
	}
	return { ok: true, path: data.path, token: data.token };
}

/** Paso 2 de la subida: registra el documento una vez que el archivo ya está en Storage. */
export async function registerDocument(input: {
	userId: string;
	path: string;
	docName: string;
	type: string;
	year: string;
	month: string;
}): Promise<Result<object>> {
	const admin = await requireAdmin();
	if (!admin) return { ok: false, error: "No autorizado" };

	const { userId, path, type, year, month } = input;
	const docName = input.docName.trim().slice(0, 200);

	if (!new RegExp(`^${UUID_RE}/${UUID_RE}\\.pdf$`, "i").test(path) || !path.startsWith(`${userId}/`)) {
		return { ok: false, error: "Ruta de archivo inválida" };
	}
	if (!isOneOf(type, DOC_TYPES)) return { ok: false, error: "Tipo de documento inválido" };
	if (!docYears().includes(year)) return { ok: false, error: "Año inválido" };
	if (!isOneOf(month, MONTHS)) return { ok: false, error: "Mes inválido" };
	if (!docName) return { ok: false, error: "Nombre de archivo inválido" };

	const supabaseAdmin = createAdminClient();

	// Confirmar que el archivo realmente se subió.
	const folder = path.split("/")[0];
	const file = path.split("/")[1];
	const { data: found } = await supabaseAdmin.storage
		.from(BUCKET)
		.list(folder, { search: file, limit: 1 });
	if (!found || found.length === 0) {
		return { ok: false, error: "El archivo no se subió correctamente" };
	}

	const { error } = await supabaseAdmin.from("docs").insert({
		path_name: path,
		doc_name: docName,
		type,
		user_id: userId,
		year,
		month,
	});
	if (error) {
		console.error("registerDocument:", error.message);
		// No dejar archivos huérfanos.
		await supabaseAdmin.storage.from(BUCKET).remove([path]);
		return { ok: false, error: "No se pudo registrar el documento" };
	}

	revalidatePath(`/admin/dashboardA/viewDocuments/${userId}`);
	return { ok: true };
}
