
import Link from "next/link"
import { createClient } from "../utils/supabase/server";

export default async function page() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (data.user) {
        supabase.auth.signOut();
        console.log("sesion cerrada");
    }

    return (
        <>
            <main className="w-full min-h-screen flex items-center justify-center flex-col m-auto">
                <section className="flex gap-6 flex-col items-center font-main">
                    <span className="text-bronze font-bold text-7xl">{":("}</span>
                    <span className="font-semibold text-4xl">Usuario Deshabilitado</span>
                    <Link href="/" className="px-5 bg-bluemain text-white py-2 rounded hover:bg-white border border-bluemain hover:text-bluemain transition">Volver a Inicio</Link>
                </section>
            </main>
        </>
    )
}