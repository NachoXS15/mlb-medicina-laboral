'use server'
import { createClient } from "@/app/utils/supabase/server"
import { redirect} from "next/navigation"


export async function login(formData: FormData){
    
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    })

    if (error) {
        redirect('/error');
    }

    const { data: profile, status, statusText } = await supabase.from('profiles').select('*').eq('id', data.user.id).single()

    if (status != 200) {
        console.log("status: ", status, ", ", statusText);
    }
    console.log(data.user.id);

    if (profile.status == "Inactivo") {
        redirect('/disabled-user')
    }

    if (profile?.role === 'admin') {
        redirect('/admin/dashboardA')
    } else {
        redirect('/admin/dashboardU')
    }
}