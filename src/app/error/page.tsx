"use client";

import Link from "next/link";

export default function page() {
	return (
		<>
			<main className="w-full min-h-screen flex items-center justify-center flex-col m-auto">
				<section className="flex gap-6 flex-col items-center font-main">
					<span className="text-bronze font-bold text-7xl">
						{":("}
					</span>
					<span className="font-semibold text-4xl">
						Algo salió mal
					</span>
					<span>
						Si el problema persiste, contactar a{" "}
						<a
							href="mailto:drabassocorominas@hotmail.com"
							className="text-bluemain underline"
						>
							drabassocorominas@hotmail.com
						</a>
					</span>
					<Link
						href="/admin/login"
						className="px-5 bg-bluemain text-white py-2 rounded hover:bg-white border border-bluemain hover:text-bluemain transition"
					>
						Volver a Inicio
					</Link>
				</section>
			</main>
		</>
	);
}
