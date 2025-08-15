'use client'

import { useMemo, useState } from "react";
import { DocType } from "../config/definitions";
import DownloadButton from "./DownloadButton";

type Props = {
    docs: DocType[]
}


export default function SearchFormUser({ docs }: Props) {

    const [query, setQuery] = useState("")

    const filteredDocs = useMemo(() => {
        return docs.filter(doc => doc.doc_name.toLowerCase().includes(query.toLowerCase()))
    }, [docs, query])

    
    return (
        <section className="w-10/12 m-auto min-h-screen flex items-center justify-center flex-col gap-3" id="docs">
            <div className="w-full flex justify-between items-center">
                <h2 className='self-start text-xl'>Mis documentos</h2>
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 items-center">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="h-9 w-62 px-2 border rounded border-bronze" placeholder="Buscar Documento" />
                </form>
            </div>
            <section className='w-full h-[700px] border border-slate-300'>
                {filteredDocs?.length == 0 ? (
                    <div className='flex items-center justify-center w-full h-full'>
                        <h2>No hay documentos cargados.</h2>
                    </div>
                ) : filteredDocs?.map((doc, i) => (
                    <div key={i} className='flex items-center justify-between bg-slate-100 border-b border-b-slate-400 p-5'>
                        <div className="">
                            <h2 className='font-bold'>{doc.doc_name}</h2>
                            <span>Fecha de Carga: {doc.created_at.slice(0, 10)}</span>
                        </div>
                        <span className="px-5 py-2 bg-blue-200 rounded">{doc.type}</span>
                        <div className="flex items-center gap-5 px-15">
                            <span className='hove:scale-105 transition cursor-pointer flex items-center gap-2 bg-green-200 px-5 py-2 rounded'>Descargar <DownloadButton size={24} filePath={doc.path_name} /></span>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}
