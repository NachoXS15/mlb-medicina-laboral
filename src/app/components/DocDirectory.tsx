'use client'

import { useMemo, useState } from "react";
import { DocType } from "../config/definitions";
import DownloadButton from "./DownloadButton";

type Props = {
    docs: DocType[]
}

export default function DocumentDirectory({ docs }: Props) {
    // revisa los años y meses abiertos
    const [openYears, setOpenYears] = useState<{ [year: string]: boolean }>({});
    const [openMonths, setOpenMonths] = useState<{ [key: string]: boolean }>({});

    // Agrupar documentos por año y luego por mes
    const groupedDocs = docs.reduce((acc: any, doc) => {

        if (!doc.year || !doc.month) return acc;

        if (!acc[doc.year]) acc[doc.year] = {};
        if (!acc[doc.year][doc.month]) acc[doc.year][doc.month] = [];

        acc[doc.year][doc.month].push(doc);
        return acc;
    }, {});

    //funcion q abre o colapsa el acorden por año
    const toggleYear = (year: string) => {
        setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
    };

    //funcion q abre o colapsa el acorden por año
    const toggleMonth = (year: string, month: string) => {
        const key = `${year}-${month}`;
        setOpenMonths((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // agrupa los años en orden descendente
    const sortedYears = Object.keys(groupedDocs).sort((a, b) => Number(b) - Number(a));

    return (
        <section className="w-10/12 m-auto py-10 min-h-screen flex items-center justify-center flex-col gap-3" id="docs">
            <div className="w-full flex justify-between items-center">
                <h2 className='self-start text-xl'>Mis documentos</h2>
                {/* <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 items-center">
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="h-9 w-62 px-2 border rounded border-bronze" placeholder="Buscar Documento" />
                </form> */}
            </div>
            <section className="w-full h-[700px] border border-slate-300">
                {sortedYears.length === 0 ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <h2>No hay documentos cargados.</h2>
                    </div>
                ) : (
                    sortedYears.map((year) => (
                        <div key={year} className="border-b border-slate-300">
                            <button
                                onClick={() => toggleYear(year)}
                                className="w-full hover:bg-slate-200 rounded px-5 flex justify-between items-center py-5 text-slate-800"
                            >
                                <span className="text-xl font-bold">{year}</span>
                                <span className="text-xl">{openYears[year] ? '-' : '+'}</span>
                            </button>

                            {/* Acordeón de meses */}
                            <div className={`${openYears[year] ? 'block' : 'hidden'} px-5`}>
                                {Object.keys(groupedDocs[year]).map((month) => {
                                    const key = `${year}-${month}`;
                                    const monthDocs = groupedDocs[year][month];

                                    return (
                                        <div key={key} className="border-t border-slate-200 py-3">
                                            <button
                                                onClick={() => toggleMonth(year, month)}
                                                className="w-full text-left hover:bg-slate-100 px-4 py-3 flex justify-between items-center text-slate-700"
                                            >
                                                <span className="text-md font-medium">{month}</span>
                                                <span className="text-md">{openMonths[key] ? '-' : '+'}</span>
                                            </button>

                                            <div className={`${openMonths[key] ? 'block' : 'hidden'} pl-6`}>
                                                {monthDocs.map((doc: DocType) => (
                                                    <div key={doc.id} className="py-2 flex justify-between items-center border-b border-dashed border-slate-200">
                                                        <div className="">
                                                            <h2 className='font-bold text-md'>{doc.doc_name}</h2>
                                                            <span className="text-xs">Fecha de Carga: {doc.created_at.slice(0, 10)}</span>
                                                        </div>
                                                        <span className="h-fit py-2 px-5 text-xs bg-blue-200 rounded">{doc.type}</span>
                                                        <div className="flex items-center gap-5 text-xs px-15">
                                                            <span className='hove:scale-105 transition cursor-pointer flex items-center gap-2 bg-green-200 px-5 py-2 rounded'>Descargar <DownloadButton size={20} filePath={doc.path_name} /></span>
                                                        </div>

                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))
                )}
            </section>
        </section>
    )
}

