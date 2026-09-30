import { fetchProfilebyId } from "@/app/lib/data-server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import EditForm from "./form";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const profile = await fetchProfilebyId(id);
	if (!profile) notFound();

	return (
		<main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
			<div className="w-full xl:w-5/12">
				<div className="flex items-center px-5 md:px-10 gap-3">
					<Link
						href="/admin/dashboardA"
						className="cursor-pointer hover:scale-110 transition"
					>
						<ArrowLeft />
					</Link>
					<h2 className="text-2xl font-bold text-center self-center">
						Editar: {profile.name}
					</h2>
				</div>
				<EditForm profile={profile} />
			</div>
		</main>
	);
}
