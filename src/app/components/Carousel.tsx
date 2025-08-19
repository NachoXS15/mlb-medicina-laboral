"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import empresas from "../config/Empresas";

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

	const ITEM_WIDTH = 180;
	const TOTAL_ITEMS = 13;

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
					width: `${empresas.length * ITEM_WIDTH}px`,
				}}
			>
				{empresas.map((empresa, index) => (
					<div
						key={index}
						className="flex-shrink-0"
						style={{ width: ITEM_WIDTH }}
					>
						<div className="carrousel-item bg-white text-center p-2 rounded-md shadow aspect-square overflow-hidden flex justify-center items-center">
							{empresa.url ? (
								<Link href={empresa.url} target="_blank">
									<Image
										src={empresa.img}
										alt={`Logo ${empresa.empresa_name}`}
										width={200}
										height={200}
									/>
								</Link>
							) : (
								<Image
									src={empresa.img}
									alt={`Logo ${empresa.empresa_name}`}
									width={200}
									height={200}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
