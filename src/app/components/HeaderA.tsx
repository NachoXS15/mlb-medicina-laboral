import Image from "next/image"
import logo from '../assets/logo_blanco.webp'
import Link from "next/link"

export default function HeaderA() {
    return (
        <header className="bg-bluemain font-main py-10 w-full h-24 flex items-center justify-center">
            <div className="md:w-10/12  flex items-center justify-between">
                <Link href="/admin/dashboardA"><Image src={logo} width={150} alt="" /></Link>
                <p className="text-white text-xl">Sistema de Gestión de Clientes</p>
                <nav>
                    <Link href="/admin/logout" className="bg-bronze text-slate-100 px-5 py-2 rounded-full hover:underline transition">Cerrar sesión</Link>
                </nav>
            </div>
        </header>
    )
}