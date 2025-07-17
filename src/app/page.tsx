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
			<main className="w-full min-h-100 dark:bg-s-shadow dark:text-white flex flex-col gap-15 items-start justify-center text-gray-950 pb-10 lg:max-w-5xl lg:mx-auto lg:py-2">
				<section
					id="aboutUs"
					className="w-full py-5 flex flex-col md:flex-row items-center"
				>
					<div className="w-[90%] md:w-1/2 h-65 flex justify-center items-center bg-blue-300 rounded-4xl relative left-0 md:left-10 lg:left-20">
						IMAGEN
					</div>
					<div className="z-40 w-[80%] md:w-1/2 min-h-55 bg-bluemain p-5 rounded-3xl relative bottom-10 md:bottom-0 md:right-10 lg:right-10">
						<h3 className="text-sm md:text-base text-bronze">
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
					<h4 className="text-2xl font-bold pl-2 md:pl-0">
						Ofrecemos una amplia variedad de servicios
					</h4>
					<div className="flex w-full flex-wrap">
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 h-65 lg:h-85 pb-5 pl-5">
							<div className="gallery-item"></div>
						</div>
					</div>
				</section>
				<section
					id="clients"
					className="w-full py-5 bg-bluemain rounded-3xl overflow-hidden"
				>
					<h3 className="text-sm md:text-base text-white pl-2 md:pl-0 text-center">
						Nuestros clientes
					</h3>
					<h4 className="text-lg lg:text-2xl font-bold pl-2 md:pl-0 text-center">
						Ellos confian en nosotros
					</h4>
					<div
						id="carrousel"
						className="flex relativewhitespace-nowrap gap-5 animate-scroll"
					>
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
					</div>
				</section>
			</main>
			<div id="contact" className="bg-f-shadow">
				<div className="w-full min-h-100 px-2 py-5 lg:max-w-5xl lg:mx-auto lg:py-4 lg:px-0">
					<h4 className="text-2xl font-bold pl-2 md:pl-0 text-center mb-5">
						Estamos aquí para vos
					</h4>
					<div className="w-full flex flex-col md:flex-row">
						<div className="w-full md:w-1/2 h-full px-1 md:px-2">
							<div className="flex flex-col md:flex-row text-sm gap-5">
								<p>Corrientes 780</p>
								<p>
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
							<form
								action="#"
								className="w-full flex flex-col gap-2 px-2"
							>
								<div className="flex w-full">
									<input
										type="text"
										name="formNombre"
										id="formNombre"
										className="bg-white resize-none w-full rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
										placeholder="Nombre completo..."
									/>
								</div>
								<div className="flex w-full gap-2">
									<input
										type="text"
										name="formEmpresa"
										id="formEmpresa"
										className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
										placeholder="Empresa..."
									/>
									<input
										type="text"
										name="formEmpresa"
										id="formEmpresa"
										className="bg-white resize-none w-1/2 rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
										placeholder="Teléfono"
									/>
								</div>
								<div className="flex w-full">
									<input
										type="text"
										name="formCorreo"
										id="formCorreo"
										className="bg-white resize-none w-full rounded-xl py-2 px-2 text-s-shadow focus:outline-bluemain"
										placeholder="Dejanos un correo de contacto.."
									/>
								</div>
								<div className="flex w-full">
									<textarea
										className="bg-white resize-none w-full min-h-35 rounded-xl text-s-shadow p-2 focus:outline-bluemain"
										name="formMessage"
										id="formMessage"
										placeholder="Consulta..."
									></textarea>
								</div>
								<div className="flex w-full">
									<button
										type="submit"
										className="bg-bronze w-full py-2 rounded-xl"
									>
										Enviar consulta
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
