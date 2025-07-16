import Link from "next/link";

export default function Home() {
	return (
		<>
			<section id="banner" className="bg-f-shadow">
				<div className="w-full min-h-100 flex flex-col items-start justify-center text-gray-950 p-10 lg:max-w-5xl lg:mx-auto lg:py-2 lg:px-0">
					<div id="banner-description ">
						<h2 className="text-base text-white">Dra. Basso</h2>
						<h1 className="font-bold text-2xl md:text-4xl mb-3 text-white">
							Medicina laboral <br /> para empresas <br /> en La
							Rioja
						</h1>
						<Link
							href="/"
							className="px-4 py-2 bg-bronze font-bold text-white rounded-full"
						>
							Contactanos
						</Link>
					</div>
				</div>
			</section>
			<main className="w-full min-h-100 dark:bg-s-shadow dark:text-white flex flex-col items-start justify-center text-gray-950 p-10 lg:max-w-5xl lg:mx-auto lg:py-2">
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
