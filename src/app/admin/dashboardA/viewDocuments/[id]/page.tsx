import { fetchProfilebyId } from "@/app/lib/data-server";
import { Download, Trash } from "lucide-react";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default async function page({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { id } = await params;
    const profile = await fetchProfilebyId(id)

    const

    const docs: string[] = [];
    const 


    return (
        <>
            <section className="w-10/12 m-auto min-h-screen flex items-center justify-center flex-col gap-3 font-main" id="docs">
                <div className="w-full flex justify-between items-center">
                    <h2 className='self-start font-main'>Documentos de: <span className="font-bold">{profile?.name}</span></h2>
                    <Link href={`/admin/dashboardA/viewDocuments/${id}/addDocument`} className="font-bold hover:underline">Agregar Documento</Link>
                </div>
                <section className='w-full h-[700px] border border-slate-300'>
                    {docs.length == 0 ? (
                        <div className='flex items-center justify-center w-full h-full'>
                            <h2>No hay documentos cargados.</h2>
                        </div> 
                    ): docs.map((doc, i) => (
                        <div key={i} className='flex items-center justify-between bg-slate-100 border-b border-b-slate-400 p-5'>
                            <div>
                                <h2 className='font-bold'>Julio_2025</h2>
                                <span>Subido: </span>
                            </div>
                            <div className="flex items-center gap-5">
                                <Link href="" className='hove:scale-105 transition'><Download size={24} color='#000' /></Link>
                                <Link href="" className="hover:scale-105 transition"><Trash size={24} /></Link>
                            </div>
                        </div> 
                    ))}
                </section>
            </section>
        </>
    )
}