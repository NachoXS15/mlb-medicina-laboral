import Link from "next/link";
export default function page() {
    return (
        <>
            <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center ">
                <div className="xl:w-10/12">
                    <div className="flex justify-between mb-5">
                        <h2 className="text-xl mb-3">Bienvenida, Dra Basso</h2>
                        <form action="" className="flex gap-3 items-center">
                            <input type="text" className="h-9 w-44 px-2 border rounded border-slate-300" placeholder="Cliente"/>
                            <button type="submit" className=" bg-bronze text-slate-100 px-5 py-1 rounded">Buscar</button>
                        </form>
                        <Link href="/admin/dashboardA/addClient" className="text-xl underline">Agregar Cliente</Link>
                    </div>
                    <div className="h-[700px] overflow-y-scroll">
                        <table className="text-left border border-slate-300 shadow-md rounded-lg table-auto w-full">
                            <thead className="h-14">
                                <tr>
                                    <th className="border border-slate-300 bg-slate-50 text-center">Nombre de Cliente</th>
                                    <th className="border border-slate-300 bg-slate-50 text-center">Fecha de Alta</th>
                                    <th className="border border-slate-300 bg-slate-50 text-center">Usuario</th>
                                    <th className="border border-slate-300 bg-slate-50 text-center">Contraseña</th>
                                    <th className="border border-slate-300 bg-slate-50 text-center">Documentos</th>
                                </tr>
                            </thead>
                            <tbody className="border border-slate-300">
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">YPF S.A.</td>
                                    <td className="p-4 border text-sm border-slate-200">2023-01-15</td>
                                    <td className="p-4 border text-sm border-slate-200">ypf_admin</td>
                                    <td className="p-4 border text-sm border-slate-200">YPF#2023</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Arcor</td>
                                    <td className="p-4 border text-sm border-slate-200">2022-11-03</td>
                                    <td className="p-4 border text-sm border-slate-200">arcor_user</td>
                                    <td className="p-4 border text-sm border-slate-200">Choc@123</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Mercado Libre</td>
                                    <td className="p-4 border text-sm border-slate-200">2023-05-28</td>
                                    <td className="p-4 border text-sm border-slate-200">ml_admin</td>
                                    <td className="p-4 border text-sm border-slate-200">Meli#2023</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Grupo Clarín</td>
                                    <td className="p-4 border text-sm border-slate-200">2021-09-12</td>
                                    <td className="p-4 border text-sm border-slate-200">clarin_sys</td>
                                    <td className="p-4 border text-sm border-slate-200">Cl4r1n!</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Techint</td>
                                    <td className="p-4 border text-sm border-slate-200">2020-03-30</td>
                                    <td className="p-4 border text-sm border-slate-200">tech_user</td>
                                    <td className="p-4 border text-sm border-slate-200">T3chint$</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Aerolineas Argentinas</td>
                                    <td className="p-4 border text-sm border-slate-200">2021-07-08</td>
                                    <td className="p-4 border text-sm border-slate-200">aero_admin</td>
                                    <td className="p-4 border text-sm border-slate-200">Aero2021!</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Bagó</td>
                                    <td className="p-4 border text-sm border-slate-200">2022-02-10</td>
                                    <td className="p-4 border text-sm border-slate-200">bago_user</td>
                                    <td className="p-4 border text-sm border-slate-200">B@g0pass</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Molinos Río de la Plata</td>
                                    <td className="p-4 border text-sm border-slate-200">2023-04-22</td>
                                    <td className="p-4 border text-sm border-slate-200">molinos_admin</td>
                                    <td className="p-4 border text-sm border-slate-200">Mol1n0s!</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">La Serenísima</td>
                                    <td className="p-4 border text-sm border-slate-200">2022-08-14</td>
                                    <td className="p-4 border text-sm border-slate-200">seren_user</td>
                                    <td className="p-4 border text-sm border-slate-200">Ser3ni#ma</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>
                                <tr className="h-12 border border-slate-300">
                                    <td className="p-4 border text-sm border-slate-200">Banco Galicia</td>
                                    <td className="p-4 border text-sm border-slate-200">2021-12-01</td>
                                    <td className="p-4 border text-sm border-slate-200">galicia_admin</td>
                                    <td className="p-4 border text-sm border-slate-200">G@l1cia</td>
                                    <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}
