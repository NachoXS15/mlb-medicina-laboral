import SearchFormAdmin from "@/app/components/SearchFormAdmin";
import { ProfileType } from "@/app/config/definitions";
import { getSessionProfile } from "@/app/lib/auth";
import { fetchProfiles } from "@/app/lib/data-server";
import { redirect } from "next/navigation";

export default async function Page() {
	const session = await getSessionProfile();
	if (!session) redirect("/admin/login");
	if (session.profile.role !== "admin") redirect("/admin/dashboardU");

	const profiles: ProfileType[] = (await fetchProfiles()) ?? [];

	return (
		<main className="flex flex-col w-full font-main my-5 md:my-15 text-gray-700 bg-white justify-center items-center ">
			<SearchFormAdmin profiles={profiles} profile={session.profile.name} />
		</main>
	);
}
