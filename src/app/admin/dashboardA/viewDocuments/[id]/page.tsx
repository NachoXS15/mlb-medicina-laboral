import DocumentDirectory from "@/app/components/DocDirectory";
import { DocType } from "@/app/config/definitions";
import { fetchProfilebyId } from "@/app/lib/data-server";
import { createClient } from "@/app/utils/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const profile = await fetchProfilebyId(id);
	if (!profile) notFound();

	const supabase = await createClient();
	const { data: documents, error } = await supabase
		.from("docs")
		.select()
		.eq("user_id", id);
	if (error) {
		console.error("viewDocuments:", error.message);
	}

	return (
		<>
			<section className="w-10/12 m-auto mt-10 flex items-center justify-center flex-col gap-3 font-main">
				<div className="w-full flex justify-between items-center">
					<Link
						href="/admin/dashboardA"
						className="cursor-pointer hover:scale-110 transition"
					>
						<ArrowLeft />
					</Link>
					<h2 className="self-start font-main">
						Documentos de: <span className="font-bold">{profile.name}</span>
					</h2>
					<Link
						href={`/admin/dashboardA/viewDocuments/${id}/addDocument`}
						className="font-bold hover:underline"
					>
						Agregar Documento
					</Link>
				</div>
			</section>
			{error && (
				<p className="text-center text-red-500 text-sm">
					No se pudieron cargar los documentos.
				</p>
			)}
			<DocumentDirectory
				docs={(documents as DocType[]) ?? []}
				canDelete
				title={`Documentos de ${profile.name}`}
			/>
		</>
	);
}
