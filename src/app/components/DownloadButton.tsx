"use client";
import { useState } from "react";
import { Download } from "lucide-react";
import { getDocumentUrl } from "../lib/doc-actions";

type Props = {
	docId: string;
	size: number;
};

export default function DownloadButton({ docId, size }: Props) {
	const [loading, setLoading] = useState(false);

	const handleDownload = async () => {
		// Abrimos la pestaña antes del await para que el navegador no la bloquee como popup.
		const win = window.open("", "_blank");
		setLoading(true);
		try {
			const res = await getDocumentUrl(docId);
			if (!res.ok) {
				win?.close();
				alert(res.error);
				return;
			}
			if (win) win.location.href = res.url;
			else window.location.href = res.url;
		} catch {
			win?.close();
			alert("No se pudo descargar el archivo");
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			onClick={handleDownload}
			disabled={loading}
			className="hover:scale-105 transition cursor-pointer flex items-center gap-2 bg-green-200 px-5 py-2 rounded disabled:opacity-60"
		>
			<span className="hidden md:inline">{loading ? "Abriendo..." : "Descargar"}</span>
			<Download size={size} />
		</button>
	);
}
