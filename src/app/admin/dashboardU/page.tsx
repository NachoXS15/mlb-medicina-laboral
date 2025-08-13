import Link from 'next/link'
import logo from '../../assets/logo_blanco.webp'
import Image from 'next/image'
import { createClient } from '@/app/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Download, LogOut } from 'lucide-react'

export default async function page() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single()

    if (error || !data?.user) {
        redirect('/admin/login')
    } else if (profile?.role == "admin") {
        redirect('/admin/dashboardA')
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
                    <div className='flex items-center justify-between bg-slate-100 border-b border-b-slate-400 p-5'>
                        <div>
                            <h2 className='font-main text-xl font-bold'>Julio_2025</h2>
                            <span>Subido: </span>
                        </div>
                        <Link href="" className='hove:scale-105 transition'><Download width={30} color='#000' /></Link>
                    </div>
                </section>
            </section>
        </main>
    )
}
