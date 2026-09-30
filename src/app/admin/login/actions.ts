"use server";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
	const supabase = await createClient();

	const email = String(formData.get("email") ?? "").trim();
	const password = String(formData.get("password") ?? "");
	if (!email || !password) {
		redirect("/admin/login?error=credenciales");
	}

	const { data, error } = await supabase.auth.signInWithPassword({ email, password });

	if (error || !data.user) {
		redirect("/admin/login?error=credenciales");
	}

	const { data: profile } = await supabase
		.from("profiles")
		.select("role, status")
		.eq("id", data.user.id)
		.maybeSingle();

	// Sin perfil o inactivo: cerrar la sesión recién creada (acá sí se pueden borrar cookies).
	if (!profile) {
		await supabase.auth.signOut();
		redirect("/error");
	}
	if (profile.status !== "Activo") {
		await supabase.auth.signOut();
		redirect("/disabled-user");
	}

	if (profile.role === "admin") {
		redirect("/admin/dashboardA");
	}
	redirect("/admin/dashboardU");
}
