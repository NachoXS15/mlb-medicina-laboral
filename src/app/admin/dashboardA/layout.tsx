import HeaderA from "@/app/components/HeaderA";
import { ProfileType } from "@/app/config/definitions";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function layout({ children }: { children: React.ReactNode }) {

  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user?.id).single()

  console.log(profile);
  

  if (error || !data?.user || profile.status == "Inactivo") {
    redirect('/admin/login')
  } else if (profile?.role == "client") {
    redirect('/admin/dashboardU')
  }
  return (
    <>
      <HeaderA />
      {children}
    </>
  )
}