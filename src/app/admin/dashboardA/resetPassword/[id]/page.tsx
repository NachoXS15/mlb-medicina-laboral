import { fetchProfilebyId } from "@/app/lib/data-server"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ResetForm from "./form"

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const profile = await fetchProfilebyId(id)

  return (
    <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
      <div className="w-full xl:w-5/12">
        <div className="flex items-center px-5 md:px-10 gap-3">
          <Link
            href="/admin/dashboardA"
            className="cursor-pointer hover:scale-110 transition"
          >
            <ArrowLeft />
          </Link>
          <h2 className="text-xl font-bold self-center">
            Reestablecer Contraseña para {profile?.name}
          </h2>
        </div>

        <ResetForm id={id} />
      </div>
    </main>
  )
}