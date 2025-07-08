import Link from "next/link";

export default async function Header() {
	return (
		<header className=" bg-gray-200 ">
			<div className="w-full flex flex-col items-center text-gray-950 lg:max-w-5xl lg:flex-row lg:mx-auto lg:justify-between lg:py-2">
				<Link href="/" className="text-center">
					<span className="text-xl font-bold">Logo</span> <br />{" "}
					Rehacer
				</Link>
				<nav className="flex justify-evenly items-center font-bold">
					<a
						href=""
						className="py-2 px-5 border-b-2 border-transparent hover:border-blue-800 transition-all hover:py-1"
					>
						Inicio
					</a>
					<a
						href=""
						className="py-2 px-5 border-b-2 border-transparent hover:border-blue-800 transition-all hover:py-1"
					>
						Servicios
					</a>
					<a
						href=""
						className="py-2 px-5 border-b-2 border-transparent hover:border-blue-800 transition-all hover:py-1"
					>
						Contacto
					</a>
				</nav>
			</div>
		</header>
	);
}
