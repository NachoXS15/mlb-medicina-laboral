import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather_Sans } from "next/font/google";
import "./globals.css";
import './loader.css'

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
	title: "Dra. Basso - Medicina laboral en La Rioja",
	description: "Auditorias médicas en La Rioja",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<title>Dra. Basso | Medicina Laboral para Empresas en La Rioja</title>
				<meta name="description" content="Medicina Laboral en La Rioja desde 2010. Exámenes preocupacionales, control de ausentismo, auditorías médicas, médico en planta y más. Atención a empresas." />
				<meta name="keywords" content="medicina laboral La Rioja, exámenes preocupacionales La Rioja, control ausentismo, auditorías médicas, médico en planta La Rioja, Dra Basso" />
				<meta name="author" content="Dra. Laura Basso Corominas" />
				<link rel="canonical" href="https://www.mlb-medicinalaboral.com.ar/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Dra. Basso | Medicina Laboral para Empresas en La Rioja" />
				<meta property="og:description" content="Especialistas en medicina del trabajo desde 2010 en La Rioja. Exámenes preocupacionales, auditorías, control de ausentismo y más." />
				<meta property="og:url" content="https://www.mlb-medicinalaboral.com.ar/" />
				<meta property="og:image" content="https://www.mlb-medicinalaboral.com.ar/assets/og-image.jpg" />
				<meta property="og:locale" content="es_AR" />
				<meta name="geo.region" content="AR-F" />
				<meta name="geo.placename" content="La Rioja, Argentina" />
				<meta name="geo.position" content="-29.4131;-66.8558" />
				<meta name="ICBM" content="-29.4131, -66.8558" />
				
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${merriweatherSans.variable} scroll-smooth antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
