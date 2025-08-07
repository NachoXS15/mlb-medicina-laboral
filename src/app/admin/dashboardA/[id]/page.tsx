
import { fetchProfilebyId } from "@/app/lib/data-server"
import { ArrowLeft } from "lucide-react"
import { InferGetServerSidePropsType } from "next"
import Link from "next/link"
import { editProfile } from "./actions";

export default async function page({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { id } = await params;
    const profile = await fetchProfilebyId(id)
    

    return (
        <>
            <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
                <div className="xl:w-5/12">
                    <div className="flex items-center px-10 gap-3">
                        <Link href="/admin/dashboardA" className="cursor-pointer hover:scale-110 transition"><ArrowLeft /></Link>
                        <h2 className="text-2xl font-bold text-center self-center">Editar: {profile?.name}</h2>
                    </div>
                    <form className='w-full flex items-center shadow-xl p-10 flex-col gap-5'>
                        <div className="flex w-full gap-5">
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor="">Nombre de Cliente</label>
                                <input type="text" defaultValue={profile?.name} name="name" className='h-10 px-5 border border-bluemain rounded-2xl' />
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor="">Tipo de Cliente</label>
                                <select name="type" className='h-10 px-5 border border-bluemain rounded-2xl'>
                                    <option value="Pyme">Pyme</option>
                                    <option value="Particular">Particular</option>
                                    <option value="Empresa Grande">Empresa Grande</option>
                                </select>
                            </div>
                        </div>
                        <input type="hidden" defaultValue={profile?.id} name="id" />
                        <div className="flex w-full gap-5">
                            <div className='w-full flex flex-col'>
                                <label htmlFor="">Email</label>
                                <input type="text" defaultValue={profile?.mail} name="mail" className='h-10 px-5 border border-bluemain rounded-2xl' />
                            </div>
                        </div>
                        <div className="flex w-full gap-5">
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor="">Estado</label>
                                <select name="status" className='h-10 px-5 border border-bluemain rounded-2xl'>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor="">Rol</label>
                                <select name="role" className='h-10 px-5 border border-bluemain rounded-2xl'>
                                    <option value="client">Cliente</option>
                                    <option value="admin">Administrador</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex w-full gap-5">
                            <div className='w-full flex flex-col'>
                                <label htmlFor="">Imagen de Local</label>
                                <input type="file" name="img" className='h-10 px-5 border border-bluemain rounded-2xl' />
                            </div>
                        </div>
                        <button formAction={editProfile} className='mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze'>Actualizar Usuario</button>
                    </form>
                </div>
            </main>
        </>
    )
}
