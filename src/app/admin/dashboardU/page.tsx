import logo from "../../assets/logo_blanco.webp";
import Image from "next/image";

export default function page() {
	return (
		<>
			<main
				className="w-full min-h-screen bg-cover bg-center "
				style={{ backgroundImage: `url('/assets/ypf.jpg')` }}
			>
				<div className="w-full min-h-screen bg-radial from-s-shadow/50 to-s-shadow flex items-center justify-center flex-col gap-5">
					<Image
						src={logo}
						width={150}
						className="md:absolute left-20 top-20"
						alt=""
					/>
					<h2 className="text-white font-main text-xl md:text-6xl font-bold">
						¡Bienvenido, YPF!
					</h2>
					<a
						href="#docs"
						className="text-base md:text-2xl text-white font-main"
					>
						Ver mis documentos
					</a>
				</div>
			</main>
			{/* <section className="w-full min-h-screen" id="docs">
            <h2>Mis documentos</h2>
        </section> */}
		</>
	);
}
