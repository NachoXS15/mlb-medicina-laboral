import type { Metadata } from "next";

// El área privada no debe aparecer en buscadores.
export const metadata: Metadata = {
	title: "Área de clientes | MLB Medicina Laboral",
	robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return children;
}
