// actions.ts
'use server'

import { createClient } from '@supabase/supabase-js'

type ActionState = {
  error?: string
  success?: boolean
}

export async function reset(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const pass = formData.get("password") as string
  const confirm_pass = formData.get("confirm-password") as string
  const id = formData.get("id") as string

  if (pass !== confirm_pass) {
    return { error: "Las contraseñas no coinciden" }
  }

  try {
    const { error } = await supabaseAdmin.auth.admin.updateUserById(id, {
      password: pass,
    })

    if (error) {
      console.error(error)
      return { error: "No se pudo actualizar la contraseña" }
    }else{
        console.log("Contraseña actualizada");   
    }
    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: "" }
  }
}
