import Link from 'next/link'
import logo from '../../assets/logo_blanco.webp'
import Image from 'next/image'
import { createClient } from '@/app/utils/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'
import DownloadButton from '@/app/components/DownloadButton'

export default async function page() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single()
    
    
    if (error || !data?.user) {
        redirect('/admin/login')
    } else if (profile?.role == "admin") {
        redirect('/admin/dashboardA')
    }
    

    const {data: documents, error: docError} = await supabase.from('docs').select().eq("user_id", profile.id)
    if (docError) {
        console.log(docError);
        return;
    }
    return (
        <main className='w-full min-h-screen font-main'>
            <section className="w-full min-h-screen bg-cover bg-center " style={{ backgroundImage: `url('/assets/ypf.jpg')` }}>
            {/* agregar foto de fondo y color por link  */}
                <div className="w-full min-h-screen bg-s-shadow/50 flex items-center justify-center flex-col gap-5">
                    <div>
                        <Image src={logo} width={150} className="absolute left-40 top-40" alt="" />
                        <Link href="/admin/logout" className='text-white absolute top-40 right-40'><LogOut size={30} /></Link>
                    </div>
                    <h2 className="text-white font-main text-6xl font-bold">¡Bienvenido, {profile.name}!</h2>
                    <a href="#docs" className="text-2xl text-white font-main hover:underline">Ver mis documentos</a>
                </div>
            </section>
            <section className="w-10/12 m-auto min-h-screen flex items-center justify-center flex-col gap-3" id="docs">
                <h2 className='self-start text-xl'>Mis documentos</h2>
                <section className='w-full h-[700px] border border-slate-300'>
                    {documents?.length == 0 ? (
                        <div className='flex items-center justify-center w-full h-full'>
                            <h2>No hay documentos cargados.</h2>
                        </div> 
                    ): documents?.map((doc, i) => (
                        <div key={i} className='flex items-center justify-between bg-slate-100 border-b border-b-slate-400 p-5'>
                            <div className="">
                                <h2 className='font-bold'>{doc.doc_name}</h2>
                                <span>Fecha de Carga: {doc.created_at.slice(0, 10)}</span>
                            </div>
                            <span className="px-5 py-2 bg-blue-200 rounded">{doc.type}</span>
                            <div className="flex items-center gap-5 px-15">
                                <span className='hove:scale-105 transition cursor-pointer flex items-center gap-2 bg-green-200 px-5 py-2 rounded'>Descargar <DownloadButton size={24} filePath={doc.path_name}/></span>
                            </div>
                        </div> 
                    ))}
                </section>
            </section>
        </main>
    )
}
