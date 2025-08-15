'use client'

import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { supabaseClient } from "@/app/utils/supabase/client";
import React, { useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams<{ id: string }>();
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState<File | null>(null)
    const [fileName, setFileName] = useState("");


    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
            setFile(e.target.files[0])
            console.log(file?.name);
            
        } else {
            setFileName("");
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) {
            console.log("No hay archivo");
            return;
        }

        setLoading(true)

        const filePath = `${params.id}/${fileName}`
        const {error: errorUpload} = await supabaseClient.storage.from('docsbucket').upload(filePath, file)
        if (errorUpload) {
            console.log(errorUpload);
            setLoading(true)
        }

    }

    return (
        <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
            <div className="w-10/12 xl:w-5/12">
                <div className="flex items-center px-10 gap-3">
                    <Link href="/admin/dashboardA" className="cursor-pointer hover:scale-110 transition"><ArrowLeft /></Link>
                    <h2 className="text-2xl font-bold text-center self-center">Carga de Documento</h2>
                </div>
                <form onSubmit={handleSubmit} className='w-full flex items-center shadow-xl p-10 flex-col gap-5'>
                    <div className="flex w-full gap-5">
                        <div className='w-full flex flex-col'>
                            <label htmlFor="">Tipo de Documento</label>
                            <select name="type" className='active:border-blue-500 h-10 px-5 border border-bluemain rounded-2xl'>
                                <option value="Examenes Preocupaciones">Examenes Preocupaciones</option>
                                <option value="Examenes Periodicos">Examenes Periodicos</option>
                                <option value="Pericias médicas">Pericias médicas</option>
                                <option value="Otros">Otros</option>
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
                                    <p className="text-xs text-gray-500">Solo archivos .PDF</p>
                                </div>
                                <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" />
                            </label>
                            {fileName && (
                                <p className="mt-3 text-sm text-gray-700">
                                    Archivo seleccionado: {fileName}
                                </p>
                            )}
                        </div>

                    </div>
                    <button type='submit' className={`mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze ${loading ? 'bg-bronze/85' : null}`}>{loading ? "Subiendo... " : "Agregar Documento"}</button>
                </form>
            </div>
        </main>

    )
}
