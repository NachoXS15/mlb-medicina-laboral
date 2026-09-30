"use client";

import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { supabaseClient } from "@/app/utils/supabase/client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { DOC_TYPES, MONTHS, docYears } from "@/app/config/definitions";
import { createUploadUrl, registerDocument } from "@/app/lib/doc-actions";

const MAX_MB = 20;
const selectClass = "w-full active:border-blue-500 h-10 px-5 border border-bluemain rounded-2xl";

export default function Page() {
	const params = useParams<{ id: string }>();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [file, setFile] = useState<File | null>(null);
	const years = docYears();
	const currentYear = String(new Date().getFullYear());
	const currentMonth = MONTHS[new Date().getMonth()];

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setError("");
		const selected = e.target.files?.[0] ?? null;
		if (selected && selected.type !== "application/pdf") {
			setError("Solo se permiten archivos PDF");
			setFile(null);
			return;
		}
		if (selected && selected.size > MAX_MB * 1024 * 1024) {
			setError(`El archivo debe pesar menos de ${MAX_MB} MB`);
			setFile(null);
			return;
		}
		setFile(selected);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");
		const formData = new FormData(e.currentTarget);
		const type = String(formData.get("type") ?? "");
		const year = String(formData.get("year") ?? "");
		const month = String(formData.get("month") ?? "");

		if (!file) {
			setError("Seleccioná un archivo PDF");
			return;
		}

		setLoading(true);
		try {
			// 1) El servidor valida permisos y nos da una URL de subida para una ruta aleatoria.
			const upload = await createUploadUrl({
				userId: params.id,
				fileName: file.name,
				fileSize: file.size,
				fileType: file.type,
			});
			if (!upload.ok) {
				setError(upload.error);
				return;
			}

			// 2) Subida directa a Storage con el token firmado.
			const { error: uploadError } = await supabaseClient.storage
				.from("docsbucket")
				.uploadToSignedUrl(upload.path, upload.token, file, {
					contentType: "application/pdf",
				});
			if (uploadError) {
				setError("No se pudo subir el archivo");
				return;
			}

			// 3) Registrar el documento.
			const saved = await registerDocument({
				userId: params.id,
				path: upload.path,
				docName: file.name,
				type,
				year,
				month,
			});
			if (!saved.ok) {
				setError(saved.error);
				return;
			}

			router.push(`/admin/dashboardA/viewDocuments/${params.id}`);
			router.refresh();
		} catch {
			setError("Ocurrió un error inesperado al subir el documento");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="flex flex-col w-full font-main my-10 text-gray-700 bg-white justify-center items-center">
			<div className="w-10/12 xl:w-5/12">
				<div className="flex items-center px-10 gap-3">
					<Link
						href={`/admin/dashboardA/viewDocuments/${params.id}`}
						className="cursor-pointer hover:scale-110 transition"
					>
						<ArrowLeft />
					</Link>
					<h2 className="text-2xl font-bold text-center self-center">Carga de Documento</h2>
				</div>
				<form onSubmit={handleSubmit} className="w-full flex items-center shadow-xl p-10 flex-col gap-5">
					<div className="flex w-full gap-5">
						<div className="w-full flex flex-col">
							<label htmlFor="doc-type">Tipo de Documento</label>
							<select id="doc-type" name="type" className={selectClass}>
								{DOC_TYPES.map((t) => (
									<option key={t} value={t}>
										{t}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="flex w-full gap-5">
						<div className="w-1/2 flex flex-col">
							<label htmlFor="doc-year">Año</label>
							<select id="doc-year" name="year" defaultValue={currentYear} className={selectClass}>
								{years.map((y) => (
									<option key={y} value={y}>
										{y}
									</option>
								))}
							</select>
						</div>
						<div className="w-1/2 flex flex-col">
							<label htmlFor="doc-month">Mes</label>
							<select id="doc-month" name="month" defaultValue={currentMonth} className={selectClass}>
								{MONTHS.map((m) => (
									<option key={m} value={m}>
										{m}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="flex w-full gap-5">
						<div className="flex flex-col items-center justify-center w-full">
							<label
								htmlFor="file-upload"
								className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-bluemain rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<Plus />
									<p className="mb-2 text-sm text-gray-500">
										<span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
									</p>
									<p className="text-xs text-gray-500">Solo archivos .PDF (máx. {MAX_MB} MB)</p>
								</div>
								<input
									id="file-upload"
									type="file"
									accept="application/pdf"
									onChange={handleFileChange}
									className="hidden"
								/>
							</label>
							{file && (
								<p className="mt-3 text-sm text-gray-700 break-all">
									Archivo seleccionado: {file.name}
								</p>
							)}
						</div>
					</div>
					{error && <p className="text-red-500 text-sm">{error}</p>}
					<button
						type="submit"
						disabled={loading}
						className="mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze disabled:opacity-60"
					>
						{loading ? "Subiendo... " : "Agregar Documento"}
					</button>
				</form>
			</div>
		</main>
	);
}
