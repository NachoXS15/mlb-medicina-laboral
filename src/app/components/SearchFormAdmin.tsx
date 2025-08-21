"use client";
import Link from "next/link";
import TableA from "../utils/tables/TableA";
import { useMemo, useState } from "react";
import { ProfileType } from "../config/definitions";
import { Search } from "lucide-react";

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
		<div className="w-full md:w-10/12 px-2">
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
						className="h-9 w-2/3 md:w-44 px-2 border rounded border-slate-300"
						placeholder="Cliente"
					/>
					<button
						type="submit"
						className=" bg-bronze text-slate-100 w-1/3 px-5 py-1.5 rounded flex items-center justify-center"
					>
						<span className="hidden md:block">Buscar</span>
						<Search className="block md:hidden" />
					</button>
				</form>
				<Link
					href="/admin/dashboardA/addClient"
					className="text-xl underline mt-2 md:mt-0"
				>
					Agregar Cliente o Usuario
				</Link>
			</div>
			<div className="h-fit overflow-y-scroll">
				<TableA profiles={filteredProfiles} />
			</div>
		</div>
	);
}
