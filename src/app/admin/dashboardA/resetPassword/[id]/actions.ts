"use server";

import { requireAdmin } from "@/app/lib/auth";
import { createAdminClient } from "@/app/utils/supabase/admin";

type ActionState = {
	error?: string;
	success?: boolean;
};

const MIN_PASSWORD_LENGTH = 8;

export async function reset(
	prevState: ActionState,
	formData: FormData
): Promise<ActionState> {
	const admin = await requireAdmin();
	if (!admin) {
		return { error: "No autorizado" };
	}

	const pass = String(formData.get("password") ?? "");
	const confirmPass = String(formData.get("confirm-password") ?? "");
	const id = String(formData.get("id") ?? "").trim();

	if (!id) {
		return { error: "Usuario inválido" };
	}
	if (pass.length < MIN_PASSWORD_LENGTH) {
		return { error: `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres` };
	}
	if (pass !== confirmPass) {
		return { error: "Las contraseñas no coinciden" };
	}

	try {
		const supabaseAdmin = createAdminClient();
		const { error } = await supabaseAdmin.auth.admin.updateUserById(id, {
			password: pass,
		});
		if (error) {
			console.error("reset password:", error.message);
			return { error: "No se pudo actualizar la contraseña" };
		}
		return { success: true };
	} catch (error) {
		console.error("reset password:", error);
		return { error: "No se pudo actualizar la contraseña" };
	}
}
