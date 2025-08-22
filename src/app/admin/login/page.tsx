import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.webp";
import { login } from "./actions";
import Link from "next/link";
import { ArrowLeftToLine } from "lucide-react";

import { createClient } from '@/app/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function page() {
	const supabase = await createClient()
	const { data, error } = await supabase.auth.getUser();
	const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user?.id).single()
	
	if (!error && profile) {
		if (profile?.role === 'admin') {
			redirect('/admin/dashboardA')
		} else {
			redirect('/admin/dashboardU')
		}
	}

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
						alt=""
					/>
					<Image
						src={logo}
						width={120}
						className="block md:hidden m-auto"
						alt=""
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
							<label htmlFor="">Email</label>
							<input
								type="email"
								name="email"
								className="h-10 px-5 border border-bluemain rounded-2xl"
							/>
						</div>
						<div className="w-4/5 flex flex-col">
							<label htmlFor="">Contraseña</label>
							<input
								type="password"
								name="password"
								className="h-10 px-5 border border-bluemain rounded-2xl"
							/>
						</div>
						<button
							formAction={login}
							className="mt-5 bg-bluemain flex justify-center items-center text-white w-4/5 h-10 rounded-2xl transition border hover:border-bluemain hover:bg-white hover:text-bronze cursor-pointer"
						>
							Iniciar sesión
						</button>
					</form>
					<div>
						<p className="text-bluemain text-md font-bold hover:underline cursor-pointer">
							¿Olvidaste tu contraseña?
						</p>
					</div>
				</section>
			</section>
		</main>
	);
}
