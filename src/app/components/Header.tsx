import Link from "next/link";
import Logo from "../assets/logo.webp";
import Image from "next/image";
export default async function Header() {
	return (
		<header className=" bg-slate-200 py-2">
			<div className="w-full flex flex-col items-center text-gray-950 lg:max-w-5xl lg:flex-row lg:mx-auto lg:justify-between lg:py-1 md:px-2">
				<Link href="/">
					<Image
						src={Logo}
						alt="Logo MLB - Laura Basso"
						width={150}
					/>
				</Link>
				<nav className="flex justify-evenly items-center font-bold">
					<a
						href=""
						className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
					>
						Nosotros
					</a>
					<a
						href=""
						className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
					>
						Servicios
					</a>
					<a
						href=""
						className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
					>
						Clientes
					</a>
					<a
						href=""
						className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
					>
						Contacto
					</a>
				</nav>
				<a
					href="#"
					className="flex items-center justify-center aspect-square bg-s-shadow w-8 rounded-full text-center text-white"
				>
					O
				</a>
			</div>
		</header>
	);
}
