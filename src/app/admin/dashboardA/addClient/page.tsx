'use client'

import Link from "next/link";
import { ArrowLeft } from 'lucide-react'
// import { postUser, postUserDB } from "@/app/lib/data-client";
import { ProfileType, UserSignUp } from "@/app/config/definitions";
import { supabaseClient } from "@/app/utils/supabase/client";
// import { postUser } from "@/app/lib/data-client";
export default function page() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const name = formData.get("name")?.toString();
        const mail = formData.get("mail")?.toString();
        const type = formData.get("type")?.toString();
        const status = formData.get("status")?.toString();
        const role = formData.get("role")?.toString();
        const password = formData.get("password")?.toString();

        console.log({
            name,
            mail,
            type,
            status,
            role
        });
        
        if (!name || !mail || !type || !status || !role || !password) {
            console.error("Todos los campos son obligatorios");
            return;
        }
        
        let userId: string | undefined = "";

        const postUser = async({mail, password}: UserSignUp) => {
        
            const info = {
                email: mail.trim(),
                password: password
            }
        
            try {
                const {data, error} = await supabaseClient.auth.signUp(info);
                console.log(data);
                userId = data.user?.id
                if (error) {
                    console.log("error crear usuario: ", error);
                }
                return data
            } catch (error) {
                console.log(error);
            }
        }

        const postUserDB = async ({
            name,
            mail,
            type,
            status,
            role
        }: ProfileType) => {
            try {
                const { data, error } = await supabaseClient
                    .from("profiles")
                    .insert([
                        {
                            id: userId,
                            name,
                            mail,
                            type,
                            status,
                            role
                        },
                    ])
                    .select();
                    console.log({ data, error });
                if (error) {
                    throw error;
                }
                console.log("Usuario: insertado:", data);
                return data;
            } catch (error) {
                console.error("Error al insertar usuario:", error);
                throw error;
            }
        };


        try {
            await postUser({mail: mail as string, password: password as string});
            await postUserDB({
                name,
                mail,
                type,
                status,
                role
            })
            window.location.href = "/admin/dashboardA"
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <>
            <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
                <div className="xl:w-5/12">
                    <div className="flex items-center px-10 gap-3">
                        <Link href="/admin/dashboardA" className="cursor-pointer hover:scale-110 transition"><ArrowLeft /></Link>
                        <h2 className="text-2xl font-bold text-center self-center">Carga de Usuarios</h2>
                    </div>
                    <form onSubmit={handleSubmit} className='w-full flex items-center shadow-xl p-10 flex-col gap-5'>
                        <div className="flex w-full gap-5">
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor="">Nombre de Cliente</label>
                                <input type="text" name="name" className='h-10 px-5 border border-bluemain rounded-2xl' />
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
                        <div className="flex w-full gap-5">
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor="">Email</label>
                                <input type="text" name="mail" className='h-10 px-5 border border-bluemain rounded-2xl' />
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <label htmlFor="">Contraseña</label>
                                <input type="password" name="password" className='h-10 px-5 border border-bluemain rounded-2xl' />
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
                        <button type='submit' className='mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze'>Agregar Usuario</button>
                    </form>
                </div>

            </main>
        </>
    )
}
