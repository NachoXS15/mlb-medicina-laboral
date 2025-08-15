import { ProfileType } from "@/app/config/definitions";
import { ActiveField } from "@/app/config/DynamicFieldsStyles";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function TableA({profiles}: {profiles:ProfileType[]}) {

    
    return (
        <table className="text-left border border-slate-300 shadow-md rounded-lg overflow-x-auto table-auto w-full">
            <thead className="h-14">
                <tr>
                    <th className="border border-slate-300 bg-slate-50 text-center">Nombre de Cliente</th>
                    <th className="border border-slate-300 bg-slate-50 text-center">Fecha de Alta</th>
                    <th className="border border-slate-300 bg-slate-50 text-center">Mail</th>
                    <th className="border border-slate-300 bg-slate-50 text-center">Estado</th>
                    <th className="border border-slate-300 bg-slate-50 text-center">Role</th>
                    <th className="border border-slate-300 bg-slate-50 text-center">Documentos</th>
                </tr>
            </thead>
            <tbody className="border border-slate-300">
                {profiles.map((profile, i) => {
                    
                    const selectedActiveField = ActiveField.find(field => field.title === profile.status)
                    return(
                        <tr key={i} className="h-12 border border-slate-300">
                            <td className="p-4 border text-sm border-slate-200">{profile.name}</td>
                            <td className="p-4 border text-sm border-slate-200">{profile.created_at?.slice(0, 19).replace("T", " | ")}</td>
                            <td className="p-4 border text-sm border-slate-200">{profile.mail}</td>
                            <td className={`p-4 border text-sm border-slate-200 text-center ${selectedActiveField?.style}`}>{selectedActiveField?.title}</td>
                            <td className="p-4 border text-sm border-slate-200">{profile.role === "admin" ? "Administrador" : "Cliente"}</td>
                            <td className="p-4 border text-sm border-slate-200"><Link href={`/admin/dashboardA/viewDocuments/${profile.id}`} className="hover:underline text-bluemain">Ver Documentos</Link></td>
                            <td className="p-4 text-center hover:scale-105 transition hover:text-orange-500"><Link href={`/admin/dashboardA/${profile.id}`}><Pencil></Pencil></Link></td>
                            <td className="p-4 text-center hover:scale-105 transition hover:text-red-500"><Link href=""><Trash2></Trash2></Link></td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>

    )
}
