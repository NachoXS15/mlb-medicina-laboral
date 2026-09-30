import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AddClientForm from "./form";

export default function Page() {
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
						Carga de Usuarios
					</h2>
				</div>
				<AddClientForm />
			</div>
		</main>
	);
}
