import Link from 'next/link'
import logo from '../../assets/logo_blanco.webp'
import Image from 'next/image'
import { createClient } from '@/app/utils/supabase/server'
import { redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'
import DocumentDirectory from '@/app/components/DocDirectory'

export default async function page() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single()
    
    
    if (error || !data?.user || profile.status == "Inactivo") {
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
            <section className="w-full min-h-screen bg-cover bg-center " style={{ backgroundImage: `url('${profile?.img}')` }}>
            {/* agregar foto de fondo y color por link  */}
                <div className="w-full min-h-screen bg-s-shadow/50 flex items-center justify-center flex-col gap-10">
                    <div className='w-full justify-between md:justify-around px-10 items-center flex'>
                        <Image src={logo} width={150} className="" alt="" />
                        <Link href="/admin/logout" className='text-white'><LogOut size={30} /></Link>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <h2 className="text-white font-main text-center text-4xl leading-12 md:text-6xl font-bold">¡Bienvenido, {profile.name}!</h2>
                        <a href="#docs" className="text-xl text-white font-main hover:underline">Ver mis documentos</a>
                    </div>
                </div>
            </section>
            <DocumentDirectory docs={documents} />
        </main>
    )
}
