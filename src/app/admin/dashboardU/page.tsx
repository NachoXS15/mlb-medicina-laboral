import Image from "next/image";
import logo from '../../assets/logo_blanco.webp'
export default function page() {
  return (
    <>
        <header className="bg-bluemain font-main py-10 w-full h-24 flex items-center justify-center">
            <div className="xl:w-10/12  flex items-center justify-between">
                <Image src={logo} width={150} alt="" />
                <p className="text-white text-xl">Sistema de Gestión de Clientes</p>
                <nav>
                    <a href="/login" className="bg-bronze text-slate-100 px-5 py-2 rounded-full hover:underline transition">Cerrar sesión</a>
                </nav>
            </div>
        </header>
        <main className="flex flex-col w-full font-main my-20 text-gray-700 bg-white justify-center items-center ">
            <div className="xl:w-10/12">
                <h2 className="text-xl mb-3">Bienvenida, Dra Basso</h2>
                <table className="text-left h-[700px] border border-slate-300 shadow-md rounded-lg table-auto  w-full">
                    <thead className="h-14">
                        <tr>
                            <td className="border border-slate-300 bg-slate-50 text-center">Nombre de Cliente</td>
                            <td className="border border-slate-300 bg-slate-50 text-center">Fecha de Alta</td>
                            <td className="border border-slate-300 bg-slate-50 text-center">Usuario</td>
                            <td className="border border-slate-300 bg-slate-50 text-center">Contraseña</td>
                            <td className="border border-slate-300 bg-slate-50 text-center">Documentos</td>
                        </tr>
                    </thead>
                    <tbody className="max-h-full border border-slate-300 overflow-y-scroll">
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                        <tr className="border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                            <td className="p-4 border text-sm border-slate-200">asd</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </>
  )
}
