import logo from "../../assets/logo_blanco.webp";
import Image from "next/image";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";
import DocumentDirectory from "@/app/components/DocDirectory";
import { getSessionProfile } from "@/app/lib/auth";
import { DocType, sanitizeImageUrl } from "@/app/config/definitions";
import { signOut } from "@/app/lib/auth-actions";

export default async function Page() {
	const session = await getSessionProfile();
	if (!session) {
		redirect("/admin/login");
	}
	if (session.profile.role === "admin") {
		redirect("/admin/dashboardA");
	}
	const { profile } = session;

	const supabase = await createClient();
	const { data: documents, error: docError } = await supabase
		.from("docs")
		.select()
		.eq("user_id", profile.id);
	if (docError) {
		console.error("dashboardU docs:", docError.message);
	}

	// Solo URLs https válidas: evita inyección de CSS en el style.
	const bg = sanitizeImageUrl(profile.img ?? "");

	return (
		<main className="w-full min-h-screen font-main">
			<section
				className="w-full min-h-screen bg-cover bg-center bg-bluemain"
				style={bg ? { backgroundImage: `url(${JSON.stringify(bg)})` } : undefined}
			>
				<div className="w-full min-h-screen bg-s-shadow/50 flex items-center justify-center flex-col gap-10">
					<div className="w-full justify-between md:justify-around px-10 items-center flex">
						<Image src={logo} width={150} alt="MLB Medicina Laboral" />
						<form action={signOut}>
							<button type="submit" className="text-white cursor-pointer" title="Cerrar sesión">
								<LogOut size={30} />
							</button>
						</form>
					</div>
					<div className="flex flex-col items-center gap-5">
						<h2 className="text-white font-main text-center text-4xl leading-12 md:text-6xl font-bold">
							¡Bienvenido, {profile.name}!
						</h2>
						<a href="#docs" className="text-xl text-white font-main hover:underline">
							Ver mis documentos
						</a>
					</div>
				</div>
			</section>
			{docError ? (
				<p className="text-center text-red-500 py-10">
					No se pudieron cargar tus documentos. Intentá de nuevo más tarde.
				</p>
			) : (
				<DocumentDirectory docs={(documents as DocType[]) ?? []} />
			)}
		</main>
	);
}
