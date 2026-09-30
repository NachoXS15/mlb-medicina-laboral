import Image from "next/image";
import logo from "../assets/logo_blanco.webp";
import Link from "next/link";
import { signOut } from "../lib/auth-actions";

export default function HeaderA() {
	return (
		<header className="bg-bluemain font-main py-4 md:py-10 w-full h-45 md:h-24 flex items-center justify-center">
			<div className="w-full md:w-10/12  flex flex-col gap-5 md:flex-row items-center justify-between">
				<Link href="/admin/dashboardA">
					<Image
						src={logo}
						width={150}
						className="hidden md:block m-auto"
						alt="MLB Medicina Laboral"
					/>
					<Image
						src={logo}
						width={120}
						className="block md:hidden m-auto"
						alt="MLB Medicina Laboral"
					/>
				</Link>
				<p className="text-white text-base md:text-xl">
					Sistema de Gestión de Clientes
				</p>
				<form action={signOut}>
					<button
						type="submit"
						className="bg-bronze text-slate-100 px-5 py-2 rounded-full hover:underline transition cursor-pointer"
					>
						Cerrar sesión
					</button>
				</form>
			</div>
		</header>
	);
}
