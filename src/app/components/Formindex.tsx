"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Form() {
	const NEXT_PUBLIC_EMAILJS_SERVICE_ID = process.env
		.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
	const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = process.env
		.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
	const NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = process.env
		.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

	const form = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (status === "sending") return;
		if (form.current) {
			const formData = new FormData(form.current);
			const nombre = (formData.get("nombre") as string)?.trim();
			const asunto = (formData.get("asunto") as string)?.trim();
			const correo = (formData.get("correo") as string)?.trim();
			const telefono = (formData.get("telefono") as string)?.trim();
			const mensaje = (formData.get("mensaje") as string)?.trim();
			if (!nombre || !correo || !mensaje || !asunto || !telefono) {
				setStatus("error");
				return;
			}
			setStatus("sending");
			emailjs
				.sendForm(
					NEXT_PUBLIC_EMAILJS_SERVICE_ID,
					NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
					form.current,
					{
						publicKey: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
					}
				)
				.then(() => {
					setStatus("sent");
					form.current?.reset();
				})
				.catch((err) => {
					console.error("Error al enviar", err);
					setStatus("error");
				});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full flex flex-col gap-2 px-2"
			ref={form}
		>
			<div className="flex w-full">
				<input
					type="text"
					name="nombre"
					id="formNombre"
					className="bg-white resize-none w-full rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Nombre completo..."
					required
				/>
			</div>
			<div className="flex w-full gap-2">
				<input
					type="text"
					name="asunto"
					id="formAsunto"
					className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Asunto..."
					required
				/>
				<input
					type="text"
					name="telefono"
					id="formTelefono"
					className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Teléfono"
					required
				/>
			</div>
			<div className="flex w-full">
				<input
					type="email"
					name="correo"
					id="formCorreo"
					className="bg-white resize-none w-full rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Dejanos un correo de contacto..."
					required
				/>
			</div>
			<div className="flex w-full">
				<textarea
					className="bg-white resize-none w-full min-h-35 rounded-xl text-s-shadow p-2 focus:outline-bluemain"
					name="mensaje"
					id="formMessage"
					placeholder="Consulta..."
					required
				></textarea>
			</div>
			<div className="flex w-full">
				<button
					type="submit"
					disabled={status === "sending"}
					className="bg-bronze w-full py-2 rounded-xl hover:text-white cursor-pointer transition disabled:opacity-60"
				>
					{status === "sending" ? "Enviando..." : "Enviar consulta"}
				</button>
			</div>
			<p className="text-sm text-white min-h-5" role="status" aria-live="polite">
				{status === "sent" && "¡Gracias! Recibimos tu consulta y te vamos a responder a la brevedad."}
				{status === "error" &&
					"No pudimos enviar la consulta. Revisá los campos o escribinos a drabassocorominas@hotmail.com."}
			</p>
		</form>
	);
}
