import DownloadButton from "@/app/components/DownloadButton";
import { DocType } from "@/app/config/definitions";
import { fetchProfilebyId } from "@/app/lib/data-server";
import { createClient } from "@/app/utils/supabase/server";
import { Trash } from "lucide-react";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default async function page({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { id } = await params;
    const profile = await fetchProfilebyId(id)
    const supabase = await createClient();

    const {data: documents, error} = await supabase.from('docs').select().eq("user_id", id)
    if (error) {
        console.error(error);
    }

    const docs = documents as DocType[];

    return (
        <>
            <section className="w-10/12 m-auto min-h-screen flex items-center justify-center flex-col gap-3 font-main" id="docs">
                <div className="w-full flex justify-between items-center">
                    <h2 className='self-start font-main'>Documentos de: <span className="font-bold">{profile?.name}</span></h2>
                    <Link href={`/admin/dashboardA/viewDocuments/${id}/addDocument`} className="font-bold hover:underline">Agregar Documento</Link>
                </div>
                <section className='w-full h-[700px] border border-slate-300'>
                    {docs?.length == 0 ? (
                        <div className='flex items-center justify-center w-full h-full'>
                            <h2>No hay documentos cargados.</h2>
                        </div> 
                    ): docs?.map((doc, i) => (
                        <div key={i} className='flex items-center justify-between bg-slate-100 border-b border-b-slate-400 p-5'>
                            <div className="">
                                <h2 className='font-bold'>{doc.doc_name}</h2>
                                <span>Cargado: {doc.created_at.slice(0, 19).replace("T", " | ")}</span>
                            </div>
                            <span className="px-5 py-2 bg-blue-200 rounded">{doc.type}</span>
                            <div className="flex items-center gap-5 px-15">
                                <Link href="" className='hove:scale-105 transition'><DownloadButton size={24} filePath={doc.path_name}/></Link>
                                <Link href="" className="hover:scale-105 transition"><Trash size={24} /></Link>
                            </div>
                        </div> 
                    ))}
                </section>
            </section>
        </>
    )
}