import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.webp";
import { login } from "./actions";
import Link from "next/link";
import { ArrowLeftToLine } from "lucide-react";

import { redirect } from "next/navigation";
import { getSessionProfile } from "@/app/lib/auth";

export default async function page({
	searchParams,
}: {
	searchParams: Promise<{ error?: string }>;
}) {
	// Solo redirige si hay sesión con perfil ACTIVO (evita bucles con usuarios inactivos).
	const session = await getSessionProfile();
	if (session) {
		redirect(session.profile.role === "admin" ? "/admin/dashboardA" : "/admin/dashboardU");
	}
	const { error } = await searchParams;

	return (
		<main className="bg-white w-full min-h-screen flex items-center justify-center font-main ">
			<section className="text-black w-full md:w-[650px] h-[550px] shadow-xl relative">
				<Link
					href="/"
					className="absolute text-bluemain top-5 left-5 cursor-pointer p-2 rounded-full hover:bg-bluemain hover:text-white"
					title="Volver al inicio"
				>
					<ArrowLeftToLine />
				</Link>
				<div className="m-auto">
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
					<hr className="w-50 md:w-72 m-auto mt-5" />
				</div>
				<section className="mt-5 flex gap-10 flex-col items-center justify-center">
					<h2 className="text-xl md:text-3xl font-bold">
						Inicio de Sesión
					</h2>
					<form
						action=""
						className="w-full flex items-center flex-col gap-5"
					>
						<div className="w-4/5 flex flex-col">
							<label htmlFor="login-email">Email</label>
							<input
								id="login-email"
								type="email"
								name="email"
								required
								autoComplete="email"
								className="h-10 px-5 border border-bluemain rounded-2xl"
							/>
						</div>
						<div className="w-4/5 flex flex-col">
							<label htmlFor="login-password">Contraseña</label>
							<input
								id="login-password"
								type="password"
								name="password"
								required
								autoComplete="current-password"
								className="h-10 px-5 border border-bluemain rounded-2xl"
							/>
						</div>
						{error && (
							<p className="text-red-500 text-sm" role="alert">
								Email o contraseña incorrectos.
							</p>
						)}
						<button
							formAction={login}
							className="mt-5 bg-bluemain flex justify-center items-center text-white w-4/5 h-10 rounded-2xl transition border hover:border-bluemain hover:bg-white hover:text-bronze cursor-pointer"
						>
							Iniciar sesión
						</button>
					</form>
					<div className="text-center px-5">
						<p className="text-bluemain text-md font-bold">
							¿Olvidaste tu contraseña?
						</p>
						<p className="text-sm">
							Escribinos a{" "}
							<a href="mailto:laurabasso28@hotmail.com" className="underline">
								laurabasso28@hotmail.com
							</a>{" "}
							y te la reestablecemos.
						</p>
					</div>
				</section>
			</section>
		</main>
	);
}
