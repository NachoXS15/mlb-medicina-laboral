import Link from "next/link";

export default function page() {
  return (
    <>
        <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
            <div className="xl:w-5/12">
                <div className="flex items-center gap-5">
                    <Link href="/admin/dashboardA" className="cursor-pointer hover:scale-105 transition">{"<-"}</Link>
                    <h2 className="text-2xl font-bold text-center self-center">Carga de Usuarios</h2>
                </div>
                <form action="" className='w-full flex items-center shadow-xl p-10 flex-col gap-5'>
                    <div className="flex w-full gap-5">
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="">Nombre de Cliente</label>
                            <input type="text" className='h-10 px-5 border border-bluemain rounded-2xl' />
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="">Rubro</label>
                            <select className='h-10 px-5 border border-bluemain rounded-2xl'>
                                <option value="">Gastronomico</option>
                                <option value="">Electronico</option>
                                <option value="">Educación</option>
                                <option value="">Salud</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full gap-5">
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="text" className='h-10 px-5 border border-bluemain rounded-2xl' />
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="">Contraseña</label>
                            <input type="password" className='h-10 px-5 border border-bluemain rounded-2xl' />
                        </div>
                    </div>
                    <div className="flex w-full gap-5">
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="">Imagen de Local</label>
                            <input type="file" className='h-10 px-5 border border-bluemain rounded-2xl' />
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="">Tipo de Cliente</label>
                            <select className='h-10 px-5 border border-bluemain rounded-2xl'>
                                <option value="">Pyme</option>
                                <option value="">Particular</option>
                                <option value="">Empresa Grande</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className='mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze'>Agregar Usuario</button>
                </form>
            </div>

        </main>
    </>
  )
}
