"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";

/** Cierra la sesión. Tiene que ser una Server Action (o Route Handler) para poder borrar cookies. */
export async function signOut() {
	const supabase = await createClient();
	await supabase.auth.signOut();
	redirect("/admin/login");
}
