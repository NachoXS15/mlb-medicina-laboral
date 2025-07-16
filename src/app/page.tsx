import Link from "next/link";

export default function Home() {
	return (
		<>
			<section id="banner" className="bg-blue-900">
				<div className="w-full min-h-100 bg-blue-300 flex flex-col items-start justify-center text-gray-950 p-10 lg:max-w-5xl lg:mx-auto lg:py-2">
					<div id="banner-description">
						<h2 className="text-xs">
							Dra. Basso, medicina laboral para empresas en La
							Rioja
						</h2>
						<h1 className="font-bold text-2xl mb-3">
							Medicina laboral <br /> para empresas
						</h1>
						<Link
							href="/"
							className="px-4 py-2 bg-sky-800 font-bold text-white rounded-full"
						>
							{" "}
							Contactanos{" "}
						</Link>
					</div>
				</div>
			</section>
			<main className="w-full min-h-100 dark:bg-sky-950 dark:text-white flex flex-col items-start justify-center text-gray-950 p-10 lg:max-w-5xl lg:mx-auto lg:py-2">
				<section id="aboutUs">
					{/* titulos */}
					<div>
						<h3>Sobre nosotros</h3>
					</div>
				</section>
				<section id="clients">
					<h3>Nuestros clientes</h3>
				</section>
			</main>
		</>
	);
}
