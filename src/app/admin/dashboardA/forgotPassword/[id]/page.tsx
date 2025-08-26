import { fetchProfilebyId } from "@/app/lib/data-server";
import { ArrowLeft } from "lucide-react";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";


export default async function page({
    params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const { id } = await params
    const profile = await fetchProfilebyId(id)


    return (
        <>
            <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
                <div className="w-full xl:w-5/12">
                    <div className="flex items-center px-5 md:px-10 gap-3">
                        <Link
                            href="/admin/dashboardA"
                            className="cursor-pointer hover:scale-110 transition"
                        >
                            <ArrowLeft />
                        </Link>
                        <h2 className="text-2xl font-bold text-center self-center">
                            Reestablecer Contraseña para {profile?.name}
                        </h2>
                    </div>
                    <form
                        // onSubmit={handleSubmit}
                        className="w-full flex items-center shadow-xl p-10 flex-col gap-5"
                    >
                        <div className="flex flex-col w-full gap-5">
                            <div className="w-full flex flex-col">
                                <label htmlFor="">Nueva Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="h-10 px-5 border border-bluemain rounded-2xl"
                                />
                            </div>
                            <input type="hidden" defaultValue={id} />
                            <div className="w-full flex flex-col">
                                <label htmlFor="">Confirmar Contraseña</label>
                               <input
                                    type="password"
                                    name="confirm-password"
                                    className="h-10 px-5 border border-bluemain rounded-2xl"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze"
                        >
                            Agregar Usuario
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
