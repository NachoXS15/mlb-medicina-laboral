"use client";
import emailjs from '@emailjs/browser';
import { useRef } from "react"; 

export default function Form() {
	const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID as string
	const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID as string
	const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY as string

    const form = useRef<HTMLFormElement>(null);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		if (form.current) {
			emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
				publicKey: EMAILJS_PUBLIC_KEY
			}).then(
				() => {
					console.log("Mail enviado");
				}				
			).catch(
				() => {
					console.log("Error al enviar");
				}
			)
		}

	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full flex flex-col gap-2 px-2"
			
		>
			<div className="flex w-full">
				<input
					type="text"
					name="nombre"
					id="formNombre"
					className="bg-white resize-none w-full rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Nombre completo..."
				/>
			</div>
			<div className="flex w-full gap-2">
				<input
					type="text"
					name="empresa"
					id="formEmpresa"
					className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Empresa..."
				/>
				<input
					type="text"
					name="telefono"
					id="formTelefono"
					className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Teléfono"
				/>
			</div>
			<div className="flex w-full">
				<input
					type="email"
					name="correo"
					id="formCorreo"
					className="bg-white resize-none w-full rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Dejanos un correo de contacto..."
				/>
			</div>
			<div className="flex w-full">
				<textarea
					className="bg-white resize-none w-full min-h-35 rounded-xl text-s-shadow p-2 focus:outline-bluemain"
					name="message"
					id="formMessage"
					placeholder="Consulta..."
				></textarea>
			</div>
			<div className="flex w-full">
				<button
					type="submit"
					className="bg-bronze w-full py-2 rounded-xl hover:text-white cursor-pointer transition"
				>
					Enviar consulta
				</button>
			</div>
		</form>
	);
}
