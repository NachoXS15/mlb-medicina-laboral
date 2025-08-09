import Image from "next/image";
import logo_b from "../assets/logo_blanco.webp";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
export default async function Footer() {
	return (
		<footer className="bg-s-shadow py-5 min-h-30">
			<div className="w-full text-white flex flex-col items-start justify-center lg:max-w-5xl lg:mx-auto lg:py-2">
				<div className="flex flex-col gap-3 lg:flex-row lg:gap-15 px-5 pb-5">
					<div className="flex flex-col lg:flex-row items-center lg:w-1/2">
						<Link href="/" className="w-full block py-2 lg:w-100">
							<Image
								src={logo_b}
								width={200}
								className="mx-auto"
								alt="Logo MLB - Laura Basso"
							/>
						</Link>
						<p className="text-xs w-full">
							Especializado en medicina del trabajo desde el año
							2010, en la provincia de La Rioja. Prestamos un
							servicio con altos estándares de calidad, para dar
							apoyo médico a empresas.
						</p>
					</div>
					<div className="lg:w-1/2">
						<h4 className="text-sm uppercase text-bronze font-bold">
							Información
						</h4>
						<ul className="list-none text-xs flex flex-col gap-2">
							<li className="flex gap-2 items-center">
								<Mail color="white" size={20} />
								<a href="mailto:laurabasso28@hotmail.com">
									laurabasso28@hotmail.com
								</a>
							</li>
							<li className="flex gap-2 items-center">
								<Phone color="white" size={20} />
								<a href="tel:+5493804627098">+5493804627098</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p className="text-center text-sm text-white">
				Copyright &copy; 2025 | Diseñado por:{" "}
			</p>
		</footer>
	);
}
