import Link from 'next/link'
import logo from '../../assets/logo_blanco.webp'
import Image from 'next/image'
import { createClient } from '@/app/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function page() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user?.id).single()

    if (error || !data?.user) {
        redirect('/admin/login')
    } else if (profile?.role == "admin") {
        redirect('/admin/dashboardA')
    }

    return (
        <main className='w-full min-h-screen font-main'>
            <section className="w-full min-h-screen bg-cover bg-center " style={{ backgroundImage: `url('/assets/ypf.jpg')` }}>
                <div className="w-full min-h-screen bg-s-shadow/50 flex items-center justify-center flex-col gap-5">
                    <div>
                        <Image src={logo} width={150} className="absolute left-40 top-40" alt="" />
                        <Link href="/admin/logout" className='text-white'>Cerrar sesion</Link>
                    </div>
                    <h2 className="text-white font-main text-6xl font-bold">¡Bienvenido, YPF!</h2>
                    <a href="#docs" className="text-2xl text-white font-main hover:underline">Ver mis documentos</a>
                </div>
            </section>
            <section className="w-3/4 m-auto min-h-screen flex items-center justify-center flex-col" id="docs">
                <h2 className='self-start text-xl'>Mis documentos</h2>
                <section className='w-full h-[700px] border border-slate-300'>
                    
                </section>
            </section>
        </main>
    )
}