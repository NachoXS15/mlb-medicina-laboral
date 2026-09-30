"use server";

import { requireAdmin } from "@/app/lib/auth";
import { createAdminClient } from "@/app/utils/supabase/admin";
import {
	CLIENT_TYPES,
	ROLES,
	STATUSES,
	isOneOf,
	isValidEmail,
	sanitizeImageUrl,
} from "@/app/config/definitions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type AddClientState = { error?: string };

const MIN_PASSWORD_LENGTH = 8;

export async function addClient(
	prevState: AddClientState,
	formData: FormData
): Promise<AddClientState> {
	const admin = await requireAdmin();
	if (!admin) {
		return { error: "No autorizado" };
	}

	const name = String(formData.get("name") ?? "").trim();
	const mail = String(formData.get("mail") ?? "").trim().toLowerCase();
	const type = String(formData.get("type") ?? "");
	const status = String(formData.get("status") ?? "");
	const role = String(formData.get("role") ?? "");
	const password = String(formData.get("password") ?? "");
	const img = sanitizeImageUrl(String(formData.get("img") ?? ""));

	if (!name) return { error: "El nombre es obligatorio" };
	if (!isValidEmail(mail)) return { error: "Email inválido" };
	if (password.length < MIN_PASSWORD_LENGTH) {
		return { error: `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres` };
	}
	if (!isOneOf(type, CLIENT_TYPES)) return { error: "Tipo de cliente inválido" };
	if (!isOneOf(status, STATUSES)) return { error: "Estado inválido" };
	if (!isOneOf(role, ROLES)) return { error: "Rol inválido" };
	if (img === null) return { error: "La imagen debe ser una URL https válida" };

	const supabaseAdmin = createAdminClient();

	// Se crea desde el servidor con service role: no depende del registro público
	// de Supabase y no toca la sesión del admin.
	const { data: created, error: createError } = await supabaseAdmin.auth.admin.createUser({
		email: mail,
		password,
		email_confirm: true,
	});

	if (createError || !created.user) {
		console.error("addClient createUser:", createError?.message);
		return {
			error:
				createError?.message?.toLowerCase().includes("already")
					? "Ya existe un usuario con ese email"
					: "No se pudo crear el usuario",
		};
	}

	const { error: insertError } = await supabaseAdmin.from("profiles").insert({
		id: created.user.id,
		name,
		mail,
		type,
		status,
		role,
		img: img || null,
	});

	if (insertError) {
		console.error("addClient insert profile:", insertError.message);
		// Rollback para no dejar usuarios de Auth sin perfil.
		await supabaseAdmin.auth.admin.deleteUser(created.user.id);
		return { error: "No se pudo guardar el perfil del usuario" };
	}

	revalidatePath("/admin/dashboardA");
	redirect("/admin/dashboardA");
}
