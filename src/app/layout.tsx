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
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${merriweatherSans.variable} scroll-smooth antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
