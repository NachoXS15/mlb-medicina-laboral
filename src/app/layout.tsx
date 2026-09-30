import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import "./loader.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const merriweatherSans = Merriweather_Sans({
	variable: "--font-merriweather-sans",
	subsets: ["latin"],
	style: "normal",
});

export const metadata: Metadata = {
	title: "Dra. Basso | Medicina Laboral para Empresas en La Rioja",
	description:
		"Medicina Laboral en La Rioja desde 2010. Exámenes preocupacionales, control de ausentismo, auditorías médicas, médico en planta y más. Atención a empresas.",
	keywords:
		"medicina laboral La Rioja, exámenes preocupacionales La Rioja, control ausentismo, auditorías médicas, médico en planta La Rioja, Dra Basso",
	authors: [{ name: "Dra. Laura Basso Corominas" }],
	metadataBase: new URL("https://www.mlb-medicinalaboral.com.ar"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		title: "Dra. Basso | Medicina Laboral para Empresas en La Rioja",
		description:
			"Especialistas en medicina del trabajo desde 2010 en La Rioja. Exámenes preocupacionales, auditorías, control de ausentismo y más.",
		url: "https://www.mlb-medicinalaboral.com.ar/",
		locale: "es_AR",
		images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630, alt: "MLB Medicina Laboral - Dra. Basso" }],
	},
	other: {
		"geo.region": "AR-F",
		"geo.placename": "La Rioja, Argentina",
		"geo.position": "-29.4131;-66.8558",
		ICBM: "-29.4131, -66.8558",
		telephone: "+5493804627098",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "MedicalBusiness",
	name: "Medicina Laboral Dra. Basso",
	description:
		"Especialistas en medicina del trabajo para empresas en La Rioja desde 2010.",
	url: "https://www.mlb-medicinalaboral.com.ar/",
	telephone: "+5493804627098",
	email: "drabassocorominas@hotmail.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Corrientes 780",
		addressLocality: "La Rioja",
		addressRegion: "La Rioja",
		addressCountry: "AR",
	},
	openingHours: "Mo-Fr 10:30-12:00, Mo-Fr 18:30-19:30",
	medicalSpecialty: "Occupational Medicine",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${merriweatherSans.variable} scroll-smooth antialiased`}
			>
				{children}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}