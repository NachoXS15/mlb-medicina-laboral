import Carousel from "./components/Carousel";
import Link from "next/link";
import Logo from "./assets/logo.webp";
import Image from "next/image";
import Footer from "./components/Footer";
import Formindex from "./components/Formindex";
import { Clock7, MapPin, User } from "lucide-react";
export default function Home() {
	return (
		<>
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
							href="#aboutUs"
							className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
						>
							Nosotros
						</a>
						<a
							href="#services"
							className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
						>
							Servicios
						</a>
						<a
							href="#clients"
							className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
						>
							Clientes
						</a>
						<a
							href="#contact"
							className="text-xs lg:text-base py-2 px-2 md:px-5 border-b-2 border-transparent hover:border-f-shadow transition-all hover:py-1"
						>
							Contacto
						</a>
					</nav>
					<Link
						href="admin/login"
						className="flex items-center justify-center aspect-square bg-s-shadow w-8 rounded-full text-center text-white hover:bg-bronze transition-all"
					>
						<User />
					</Link>
				</div>
			</header>
			<section
				id="banner"
				className="bg-f-shadow bg-[url(../../public/assets/banner-mobile.png)] md:bg-[url(../../public/assets/banner.png)]"
			>
				<div className="w-full min-h-100 flex flex-col items-start justify-center text-gray-950 p-10 lg:max-w-5xl lg:mx-auto lg:py-2 lg:px-0">
					<div id="banner-description ">
						<h2 className="text-base text-white font-bold">
							Dra. Basso
						</h2>
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
			<main className="w-full min-h-100 dark:text-white flex flex-col gap-15 items-start justify-center text-gray-950 pb-10 lg:max-w-5xl lg:mx-auto lg:py-2">
				<section
					id="aboutUs"
					className="w-full py-5 flex flex-col md:flex-row items-center"
				>
					<div className="w-[90%] md:w-1/2 h-65 flex justify-center items-center rounded-4xl relative left-0 md:left-10 lg:left-20 overflow-hidden shadow-lg">
						<Image
							src="/assets/about.png"
							width="510"
							height="220"
							alt="imagen"
							priority={true}
						/>
					</div>
					<div className="z-40 w-[80%] md:w-1/2 min-h-55 bg-bluemain p-5 rounded-3xl relative bottom-10 md:bottom-0 md:right-10 lg:right-10">
						<h3 className="text-sm md:text-base text-bronze font-bold">
							Sobre nosotros
						</h3>
						<h4 className="text-base md:text-2xl text-white font-bold">
							Conocenos un poco
						</h4>
						<p className="text-sm md:text-sm text-white">
							En Medicina Laboral Dra Basso, nos especializamos en
							medicina del trabajo desde el año 2010, en la
							provincia de La Rioja. Prestamos un servicio con
							altos estándares de calidad, para dar apoyo médico a
							empresas.
						</p>
					</div>
				</section>
				<section id="services" className="w-full">
					<h3 className="text-bronze pl-2 md:pl-0">
						Nuestros servicios
					</h3>
					<h4 className="text-2xl text-f-shadow font-bold pl-2 md:pl-0">
						Ofrecemos una amplia variedad de servicios
					</h4>
					<div className="flex w-full flex-wrap pt-2">
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-01.png"
									width="234"
									height="318"
									alt="imagen"
									priority={false}
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold  ">
										Capacitaciones de RCP y primeros
										auxilios
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-02.png"
									width="234"
									height="318"
									alt="imagen"
									priority={false}
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold  ">
										Médico en planta
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-03.png"
									width="234"
									height="318"
									alt="imagen"
									priority={false}
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold  ">
										Realización de exámenes preocupacionales
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-04.png"
									width="234"
									height="318"
									alt="imagen"
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold  ">
										Auditorias médicas
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-06.png"
									width="234"
									height="318"
									alt="imagen"
									priority={false}
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold">
										Determinación de incapacidad
										{/* de daño corporal */}
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-08.png"
									width="234"
									height="318"
									alt="imagen"
									priority={false}
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold  ">
										Unidad movil
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-05.png"
									width="234"
									height="318"
									alt="imagen"
									priority={false}
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold  ">
										Control de ausentismo
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item">
								<Image
									src="/assets/services/service-07.png"
									width="234"
									height="318"
									alt="imagen"
									priority={false}
								/>
								<div className="absolute right-0 top-0 lg:top-65 lg:bottom-0 z-40 py-2 px-2 bg-bluemain w-1/2 h-full lg:w-full lg:h-auto flex items-center justify-center">
									<p className="text-center font-bold">
										Capacitaciones médicas a empresas
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					id="clients"
					className="w-full py-5 bg-bluemain md:rounded-3xl overflow-hidden"
				>
					<h3 className="text-sm md:text-base text-white pl-2 md:pl-0 text-center">
						Nuestros clientes
					</h3>
					<h4 className="text-lg lg:text-2xl font-bold pl-2 md:pl-0 text-center">
						Ellos confian en nosotros
					</h4>
					<Carousel />
				</section>
			</main>
			<div id="contact" className="bg-f-shadow">
				<div className="w-full min-h-100 px-2 py-5 lg:max-w-5xl lg:mx-auto lg:py-4 lg:px-0">
					<h4 className="text-2xl font-bold pl-2 md:pl-0 text-center mb-5 text-white">
						Estamos aquí para vos
					</h4>
					<div className="w-full flex flex-col md:flex-row">
						<div className="w-full md:w-1/2 h-full px-1 md:px-2">
							<div className="flex flex-col md:flex-row text-sm gap-5 text-white">
								<p className="flex items-center gap-2">
									<MapPin size={14} />
									Corrientes 780
								</p>
								<p className="flex items-center gap-2">
									<Clock7 size={14} />
									Lun a Vie de 10.30 a 12:00 hs y de 18.30 a
									19.30 hs.
								</p>
							</div>
							<div className="w-full py-5 h-83">
								<iframe
									className="w-full border-none h-[100%]"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.306424207593!2d-66.86052302379666!3d-29.419839275244186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427dbcb62edc22f%3A0x1c97cbe2c6205931!2sCorrientes%20780%2C%20F5300%20La%20Rioja!5e0!3m2!1ses!2sar!4v1752718668009!5m2!1ses!2sar"
									width="600"
									height="450"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
						<div className="w-full md:w-1/2 h-full">
							<Formindex />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
