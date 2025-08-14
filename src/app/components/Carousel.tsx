"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const empresas = [
	{
		img: "/assets/clients/farmanor.png",
		empresa_name: "Farmanor",
	},
	{
		img: "/assets/clients/global-medica.svg",
		empresa_name: "Global Medica",
		url: "https://www.globalmedica.com.ar/",
	},
	{
		img: "/assets/clients/enod.png",
		empresa_name: "FABRICA ENOD SA",
		url: "https://enodndt.com/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "RIOJA VIAL SA",
	},
	{
		img: "/assets/clients/venecia.png",
		empresa_name: "FELIPE VENECIA SA",
		url: "https://mueblesvenecia.com/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "HOTEL PLAZA",
	},
	{
		img: "/assets/clients/cerdo-de-los-llanos.svg",
		empresa_name: "CERDOS DE LOS LLANOS SA",
		url: "https://cerdodelosllanos.com.ar/",
	},
	{
		img: "/assets/clients/omintART.svg",
		empresa_name: "OMINT ART",
		url: "https://www.omintart.com.ar/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "SMG ART",
	},
	{
		img: "/assets/clients/grupo-paolini.png",
		empresa_name: "Paolini SA",
		url: "https://grupopaolini.com/",
	},
	{
		img: "/assets/clients/paolini.png",
		empresa_name: "Paolini-britos SA",
		url: "https://www.paolini.com.ar/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "Edelar",
		url: "https://www.edelar.com.ar/",
	},
	{
		img: "/assets/clients/roggio.png",
		empresa_name: "Benito Roggio - vialmani ute",
		url: "https://www.broggio.com.ar/",
	},
	// duplicados
	{
		img: "/assets/clients/farmanor.png",
		empresa_name: "Farmanor",
	},
	{
		img: "/assets/clients/global-medica.svg",
		empresa_name: "Global Medica",
		url: "https://www.globalmedica.com.ar/",
	},
	{
		img: "/assets/clients/enod.png",
		empresa_name: "FABRICA ENOD SA",
		url: "https://enodndt.com/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "RIOJA VIAL SA",
	},
	{
		img: "/assets/clients/venecia.png",
		empresa_name: "FELIPE VENECIA SA",
		url: "https://mueblesvenecia.com/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "HOTEL PLAZA",
	},
	{
		img: "/assets/clients/cerdo-de-los-llanos.svg",
		empresa_name: "CERDOS DE LOS LLANOS SA",
		url: "https://cerdodelosllanos.com.ar/",
	},
	{
		img: "/assets/clients/omintART.svg",
		empresa_name: "OMINT ART",
		url: "https://www.omintart.com.ar/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "SMG ART",
	},
	{
		img: "/assets/clients/grupo-paolini.png",
		empresa_name: "Paolini SA",
		url: "https://grupopaolini.com/",
	},
	{
		img: "/assets/clients/paolini.png",
		empresa_name: "Paolini-britos SA",
		url: "https://www.paolini.com.ar/",
	},
	{
		img: "/assets/clients/rioja-vial.webp",
		empresa_name: "Edelar",
		url: "https://www.edelar.com.ar/",
	},
	{
		img: "/assets/clients/roggio.png",
		empresa_name: "Benito Roggio - vialmani ute",
		url: "https://www.broggio.com.ar/",
	},
];

export default function Carousel() {
	const [offset, setOffset] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	useEffect(() => {
		if (isHovered) return;

		const interval = setInterval(() => {
			setOffset((prev) => (prev + 1) % TOTAL_ITEMS);
		}, 2000);

		return () => clearInterval(interval);
	}, [isHovered]);

	const ITEM_WIDTH = 180; // cambia esto según tu diseño (en px)
	// const VISIBLE_ITEMS = 5;
	const TOTAL_ITEMS = 13;

	const items = Array.from({ length: TOTAL_ITEMS * 2 }).map(
		(_, i) => i % TOTAL_ITEMS
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setOffset((prev) => (prev + 1) % TOTAL_ITEMS);
		}, 2000); // cada 2 segundos

		return () => clearInterval(interval);
	}, []);
	return (
		<div
			className="relative w-full overflow-hidden"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className="flex gap-0 md:gap-2 transition-transform duration-700 ease-in-out"
				style={{
					transform: `translateX(-${offset * ITEM_WIDTH}px)`,
					width: `${items.length * ITEM_WIDTH}px`,
				}}
			>
				{empresas.map((empresa, index) => (
					<div
						key={index}
						className="flex-shrink-0"
						style={{ width: ITEM_WIDTH }}
					>
						<div className="carrousel-item bg-white text-center p-2 rounded-md shadow aspect-square overflow-hidden">
							<Image
								src={empresa.img}
								alt={`Logo ${empresa.empresa_name}`}
								width={200}
								height={200}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
