import Image from "next/image"
import logo from '../assets/logo_blanco.webp'

export default function HeaderA() {
    return (
        <header className="bg-bluemain font-main py-10 w-full h-24 flex items-center justify-center">
            <div className="xl:w-10/12  flex items-center justify-between">
                <Image src={logo} width={150} alt="" />
                <p className="text-white text-xl">Sistema de Gestión de Clientes</p>
                <nav>
                    <a href="/login" className="bg-bronze text-slate-100 px-5 py-2 rounded-full hover:underline transition">Cerrar sesión</a>
                </nav>
            </div>
        </header>
    )
}