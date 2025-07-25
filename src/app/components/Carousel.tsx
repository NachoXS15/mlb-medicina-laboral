"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
/*
const images = [
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
	"../assets/clients/farmanor.webp",
];
*/
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
				{items.map((i, index) => (
					<div
						key={index}
						className="flex-shrink-0"
						style={{ width: ITEM_WIDTH }}
					>
						<div className="carrousel-item bg-white text-center p-2 rounded-md shadow aspect-square overflow-hidden">
							<Image
								src="../assets/clients/farmanor.webp"
								alt="Logo cliente"
								width={100}
								height={100}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

/*
<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>
			<div className="carrousel-item"></div>

*/
