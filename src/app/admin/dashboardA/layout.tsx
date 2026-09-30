import HeaderA from "@/app/components/HeaderA";
import { getSessionProfile } from "@/app/lib/auth";
import { redirect } from "next/navigation";

// Protege las PÁGINAS de admin. Las Server Actions se protegen aparte con requireAdmin().
export default async function Layout({ children }: { children: React.ReactNode }) {
	const session = await getSessionProfile();

	if (!session) {
		redirect("/admin/login");
	}
	if (session.profile.role !== "admin") {
		redirect("/admin/dashboardU");
	}

	return (
		<>
			<HeaderA />
			{children}
		</>
	);
}
