"use client";
import Link from "next/link";
import TableA from "../utils/tables/TableA";
import { useMemo, useState } from "react";
import { ProfileType } from "../config/definitions";

type Props = {
	profiles: ProfileType[];
	profile: string;
};

export default function SearchFormAdmin({ profiles, profile }: Props) {
	const [query, setQuery] = useState("");

	const filteredProfiles = useMemo(() => {
		return profiles.filter((profile) =>
			profile.name.toLowerCase().includes(query.toLowerCase())
		);
	}, [query, profiles]);

	return (
		<div className="w-10/12 bg-red-300">
			<div className="flex flex-col md:flex-row justify-between mb-5">
				<h2 className="text-xl mb-3">Hola, {profile}</h2>
				<form
					onSubmit={(e) => e.preventDefault()}
					className="flex gap-3 items-center"
				>
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="h-9 w-44 px-2 border rounded border-slate-300"
						placeholder="Cliente"
					/>
					<button
						type="submit"
						className=" bg-bronze text-slate-100 px-5 py-1 rounded"
					>
						Buscar
					</button>
				</form>
				<Link
					href="/admin/dashboardA/addClient"
					className="text-xl underline"
				>
					Agregar Cliente o Usuario
				</Link>
			</div>
			<div className="h-[700px] overflow-y-scroll">
				<TableA profiles={filteredProfiles} />
			</div>
		</div>
	);
}
