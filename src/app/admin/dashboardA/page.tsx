import SearchFormAdmin from "@/app/components/SearchFormAdmin";
import { ProfileType } from "@/app/config/definitions";
import { fetchProfiles } from "@/app/lib/data-server";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";
export default async function page() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	const { data: profile } = await supabase
		.from("profiles")
		.select("*")
		.eq("id", data.user?.id)
		.single();

	if (error || !data?.user) {
		redirect("/admin/login");
	} else if (profile?.role == "client") {
		redirect("/admin/dashboardU");
	}
	const profileName = profile.name;
	const profiles: ProfileType[] = (await fetchProfiles()) ?? [];

	return (
		<>
			<main className="flex flex-col w-full font-main my-5 md:my-15 text-gray-700 bg-white justify-center items-center ">
				<SearchFormAdmin profiles={profiles} profile={profileName} />
			</main>
		</>
	);
}
