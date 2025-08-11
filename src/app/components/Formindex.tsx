"use client";

import { useState } from "react";

export default function Form() {
	const [formData, setFormData] = useState({
		nombre: "",
		empresa: "",
		telefono: "",
		correo: "",
		mensaje: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});
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
					onChange={handleChange}
				/>
			</div>
			<div className="flex w-full gap-2">
				<input
					type="text"
					name="empresa"
					id="formEmpresa"
					className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Empresa..."
					onChange={handleChange}
				/>
				<input
					type="text"
					name="telefono"
					id="formTelefono"
					className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Teléfono"
					onChange={handleChange}
				/>
			</div>
			<div className="flex w-full">
				<input
					type="email"
					name="correo"
					id="formCorreo"
					className="bg-white resize-none w-full rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
					placeholder="Dejanos un correo de contacto..."
					onChange={handleChange}
				/>
			</div>
			<div className="flex w-full">
				<textarea
					className="bg-white resize-none w-full min-h-35 rounded-xl text-s-shadow p-2 focus:outline-bluemain"
					name="mensaje"
					id="formMessage"
					placeholder="Consulta..."
					onChange={handleChange}
				></textarea>
			</div>
			<div className="flex w-full">
				<button
					type="submit"
					className="bg-bronze w-full py-2 rounded-xl"
				>
					Enviar consulta
				</button>
			</div>
		</form>
	);
}
