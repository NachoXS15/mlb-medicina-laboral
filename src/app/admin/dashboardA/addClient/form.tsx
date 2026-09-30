"use client";

import { useActionState } from "react";
import { addClient } from "./actions";

const inputClass = "h-10 px-5 border border-bluemain rounded-2xl";

export default function AddClientForm() {
	const [state, formAction, pending] = useActionState(addClient, {});

	return (
		<form
			action={formAction}
			className="w-full flex items-center shadow-xl p-10 flex-col gap-5"
		>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="add-name">Nombre de Cliente</label>
					<input id="add-name" type="text" name="name" required className={inputClass} />
				</div>
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="add-type">Tipo de Cliente</label>
					<select id="add-type" name="type" className={inputClass}>
						<option value="Pyme">Pyme</option>
						<option value="Particular">Particular</option>
						<option value="Empresa Grande">Empresa Grande</option>
					</select>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="add-mail">Email</label>
					<input id="add-mail" type="email" name="mail" required className={inputClass} />
				</div>
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="add-password">Contraseña</label>
					<input
						id="add-password"
						type="password"
						name="password"
						required
						minLength={8}
						autoComplete="new-password"
						className={inputClass}
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="add-status">Estado</label>
					<select id="add-status" name="status" className={inputClass}>
						<option value="Activo">Activo</option>
						<option value="Inactivo">Inactivo</option>
					</select>
				</div>
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="add-role">Rol</label>
					<select id="add-role" name="role" className={inputClass}>
						<option value="client">Cliente</option>
						<option value="admin">Administrador</option>
					</select>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full flex flex-col">
					<label htmlFor="add-img">Imagen de Local (URL https)</label>
					<input
						id="add-img"
						type="url"
						name="img"
						placeholder="https://..."
						className={inputClass}
					/>
				</div>
			</div>
			{state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
			<button
				type="submit"
				disabled={pending}
				className="mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze disabled:opacity-60"
			>
				{pending ? "Creando..." : "Agregar Usuario"}
			</button>
		</form>
	);
}
