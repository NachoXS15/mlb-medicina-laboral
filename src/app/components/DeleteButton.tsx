"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { deleteDocument } from "../lib/doc-actions";

interface Props {
	docId: string;
	docName: string;
}

export default function DeleteButton({ docId, docName }: Props) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleDelete = async () => {
		if (!confirm(`¿Eliminar "${docName}"? Esta acción no se puede deshacer.`)) return;
		setLoading(true);
		try {
			const res = await deleteDocument(docId);
			if (!res.ok) {
				alert(res.error);
				return;
			}
			router.refresh();
		} catch {
			alert("No se pudo eliminar el documento");
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			className="hover:scale-105 transition cursor-pointer flex items-center gap-2 bg-red-200 px-5 py-2 rounded disabled:opacity-60"
			onClick={handleDelete}
			disabled={loading}
		>
			<span className="hidden md:inline">{loading ? "Eliminando..." : "Eliminar"}</span>
			<Trash size={24} />
		</button>
	);
}
