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

export type EditProfileState = { error?: string };

export async function editProfile(
	prevState: EditProfileState,
	formData: FormData
): Promise<EditProfileState> {
	const admin = await requireAdmin();
	if (!admin) {
		return { error: "No autorizado" };
	}

	const id = String(formData.get("id") ?? "").trim();
	const name = String(formData.get("name") ?? "").trim();
	const mail = String(formData.get("mail") ?? "").trim().toLowerCase();
	const type = String(formData.get("type") ?? "");
	const status = String(formData.get("status") ?? "");
	const role = String(formData.get("role") ?? "");
	const imgRaw = String(formData.get("img") ?? "");

	if (!id) return { error: "Usuario inválido" };
	if (!name) return { error: "El nombre es obligatorio" };
	if (!isValidEmail(mail)) return { error: "Email inválido" };
	if (!isOneOf(type, CLIENT_TYPES)) return { error: "Tipo de cliente inválido" };
	if (!isOneOf(status, STATUSES)) return { error: "Estado inválido" };
	if (!isOneOf(role, ROLES)) return { error: "Rol inválido" };

	const img = sanitizeImageUrl(imgRaw);
	if (img === null) return { error: "La imagen debe ser una URL https válida" };

	// Evita que un admin se quite a sí mismo el acceso por error.
	if (id === admin.userId && (role !== "admin" || status !== "Activo")) {
		return { error: "No podés quitarte el rol de administrador ni desactivarte a vos mismo" };
	}

	const supabaseAdmin = createAdminClient();

	const { data: current, error: fetchError } = await supabaseAdmin
		.from("profiles")
		.select("mail")
		.eq("id", id)
		.maybeSingle();
	if (fetchError || !current) {
		return { error: "No se encontró el usuario" };
	}

	// Mantener sincronizado el email de login con el del perfil.
	if (current.mail?.toLowerCase() !== mail) {
		const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(id, {
			email: mail,
			email_confirm: true,
		});
		if (authError) {
			console.error("editProfile auth:", authError.message);
			return { error: "No se pudo actualizar el email (¿ya está en uso?)" };
		}
	}

	const { error } = await supabaseAdmin
		.from("profiles")
		.update({ name, mail, type, status, role, img: img || null })
		.eq("id", id);

	if (error) {
		console.error("editProfile:", error.message);
		return { error: "No se pudo actualizar el perfil" };
	}

	revalidatePath("/admin/dashboardA");
	redirect("/admin/dashboardA");
}
