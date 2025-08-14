import { fetchProfilebyId } from "@/app/lib/data-server";
import { Download, Trash } from "lucide-react";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default async function page({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { id } = await params;
    const profile = await fetchProfilebyId(id)

    return (
        <>
            <section className="w-10/12 m-auto min-h-screen flex items-center justify-center flex-col gap-3 font-main" id="docs">
                <div className="w-full flex justify-between items-center">
                    <h2 className='self-start text-xl font-main'>Documentos de: <span className="font-bold">{profile?.name}</span></h2>
                    <Link href={`/admin/dashboardA/viewDocuments/${id}/addDocument`} className="font-bold text-xl hover:underline">Agregar Documento</Link>
                </div>
                <section className='w-full h-[700px] border border-slate-300'>
                    <div className='flex items-center justify-between bg-slate-100 border-b border-b-slate-400 p-5'>
                        <div>
                            <h2 className='text-xl font-bold'>Julio_2025</h2>
                            <span>Subido: </span>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href="" className='hove:scale-105 transition'><Download size={30} color='#000' /></Link>
                            <Link href="" className="hover:scale-105 transition"><Trash size={30} /></Link>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}