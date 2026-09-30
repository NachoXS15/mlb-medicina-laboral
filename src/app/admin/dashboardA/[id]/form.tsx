"use client";

import { useActionState } from "react";
import { ProfileType } from "@/app/config/definitions";
import { editProfile } from "./actions";

const inputClass = "h-10 px-5 border border-bluemain rounded-2xl";

export default function EditForm({ profile }: { profile: ProfileType }) {
	const [state, formAction, pending] = useActionState(editProfile, {});

	return (
		<form
			action={formAction}
			className="w-full flex items-center shadow-xl p-10 flex-col gap-5"
		>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="edit-name">Nombre de Cliente</label>
					<input
						id="edit-name"
						type="text"
						defaultValue={profile.name}
						name="name"
						required
						className={inputClass}
					/>
				</div>
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="edit-type">Tipo de Cliente</label>
					<select
						id="edit-type"
						name="type"
						className={inputClass}
						defaultValue={profile.type}
					>
						<option value="Pyme">Pyme</option>
						<option value="Particular">Particular</option>
						<option value="Empresa Grande">Empresa Grande</option>
					</select>
				</div>
			</div>
			<input type="hidden" defaultValue={profile.id} name="id" />
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full flex flex-col">
					<label htmlFor="edit-mail">Email</label>
					<input
						id="edit-mail"
						type="email"
						defaultValue={profile.mail}
						name="mail"
						required
						className={inputClass}
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="edit-status">Estado</label>
					<select
						id="edit-status"
						name="status"
						defaultValue={profile.status}
						className={inputClass}
					>
						<option value="Activo">Activo</option>
						<option value="Inactivo">Inactivo</option>
					</select>
				</div>
				<div className="w-full md:w-1/2 flex flex-col">
					<label htmlFor="edit-role">Rol</label>
					<select
						id="edit-role"
						name="role"
						defaultValue={profile.role}
						className={inputClass}
					>
						<option value="client">Cliente</option>
						<option value="admin">Administrador</option>
					</select>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full gap-5">
				<div className="w-full flex flex-col">
					<label htmlFor="edit-img">Imagen de Local (URL https)</label>
					<input
						id="edit-img"
						type="url"
						defaultValue={profile.img ?? ""}
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
				{pending ? "Guardando..." : "Actualizar Usuario"}
			</button>
		</form>
	);
}
