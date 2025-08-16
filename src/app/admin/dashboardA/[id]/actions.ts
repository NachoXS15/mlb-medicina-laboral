'use server'
import { ProfileType } from "@/app/config/definitions";
import { createClient } from "@/app/utils/supabase/server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editProfile(formData: FormData){
    const supabase = await createClient();

    const id = formData.get("id") as string
    const data: ProfileType = {
        name: formData.get("name") as string,
        mail: formData.get("mail") as string,
        type: formData.get("type") as string,
        status: formData.get("status") as string,
        role: formData.get("role") as string,
        img: formData.get("img") as string,
    }

    console.log(data);
    

    if (!id) {
      console.error("id invalido");
      return;
    }

    try {
        const { error } = await supabase
        .from('profiles')
        .update({...data})
        .eq("id", id.trim())
        .select();
        
        if (error) {
          console.error("Error en Supabase:", error.message)
          redirect('/error')
        }
        console.log("Perfil actualizado");
        
    } catch (error) {
        console.log(error);
    }

    revalidatePath('/admin/dashboardA');
    redirect('/admin/dashboardA');

}
