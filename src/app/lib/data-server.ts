import "server-only";
import { createClient } from "../utils/supabase/server";
import { ProfileType } from "../config/definitions";

export async function fetchProfiles(): Promise<ProfileType[] | null> {
	try {
		const supabase = await createClient();
		const { data: profiles, error } = await supabase
			.from("profiles")
			.select("*")
			.order("name");
		if (error) {
			console.error("fetchProfiles:", error.message);
			return null;
		}
		return profiles as ProfileType[];
	} catch (error) {
		console.error("fetchProfiles:", error);
		return null;
	}
}

export async function fetchProfilebyId(id: string): Promise<ProfileType | null> {
	try {
		const supabase = await createClient();
		const { data: profile, error } = await supabase
			.from("profiles")
			.select("*")
			.eq("id", id)
			.maybeSingle();
		if (error) {
			console.error("fetchProfilebyId:", error.message);
			return null;
		}
		return (profile as ProfileType) ?? null;
	} catch (error) {
		console.error("fetchProfilebyId:", error);
		return null;
	}
}
