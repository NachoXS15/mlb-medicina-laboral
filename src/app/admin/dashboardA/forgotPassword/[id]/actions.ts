import { createClient } from "@/app/utils/supabase/server"
import { NextResponse } from "next/server"
export default async function reset(formData: FormData) {
    
    const pass = formData.get("password") as string
    const confirm_pass = formData.get("confirm-password") as string
    const id = formData.get("id") as string

    if (pass != confirm_pass) return alert("Contraseñas no coinciden")

    try {
        const supabase = await createClient();
        const {data, error} =  await supabase.auth.admin.updateUserById(id, {password: pass})

        if (error) {
            return NextResponse.json({error: error.message}, {status: 400})
        }

        return NextResponse.json({message: "Contraseña Actualizada", data})

    } catch (error) {
        console.error(error);
        
    }    
}
