import { ProfileType } from "@/app/config/definitions";
import { fetchProfiles } from "@/app/lib/data-server";
import { createClient } from "@/app/utils/supabase/server";
import TableA from "@/app/utils/tables/TableA";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function page() {

    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single()

    if (error || !data?.user) {
        redirect('/admin/login')
    }else if(profile?.role == "client"){
        redirect('/admin/dashboardU')
    }

    const profiles: ProfileType[] = (await fetchProfiles()) ?? [];

    return (
        <>
            <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center ">
                <div className="w-10/12">
                    <div className="flex justify-between mb-5">
                        <h2 className="text-xl mb-3">Hola, {profile.name}</h2>
                        <form action="" className="flex gap-3 items-center">
                            <input type="text" className="h-9 w-44 px-2 border rounded border-slate-300" placeholder="Cliente" />
                            <button type="submit" className=" bg-bronze text-slate-100 px-5 py-1 rounded">Buscar</button>
                        </form>
                        <Link href="/admin/dashboardA/addClient" className="text-xl underline">Agregar Cliente</Link>
                    </div>
                    <div className="h-[700px] overflow-y-scroll">
                        <TableA profiles={profiles} />
                    </div>
                </div>
            </main>
        </>
    )
}