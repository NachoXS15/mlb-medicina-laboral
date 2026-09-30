import "server-only";
import { createClient } from "@/app/utils/supabase/server";
import { ProfileType } from "@/app/config/definitions";

export type SessionProfile = {
	userId: string;
	profile: ProfileType & { id: string };
};

/**
 * Devuelve el usuario logueado y su perfil, o null si no hay sesión,
 * no hay perfil o el perfil está inactivo.
 */
export async function getSessionProfile(): Promise<SessionProfile | null> {
	const supabase = await createClient();
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();
	if (error || !user) return null;

	const { data: profile } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", user.id)
		.maybeSingle();

	if (!profile || profile.status !== "Activo") return null;
	return { userId: user.id, profile };
}

/** true si quien llama es un admin activo. Usar al inicio de TODA Server Action de admin. */
export async function requireAdmin(): Promise<SessionProfile | null> {
	const session = await getSessionProfile();
	if (!session || session.profile.role !== "admin") return null;
	return session;
}
