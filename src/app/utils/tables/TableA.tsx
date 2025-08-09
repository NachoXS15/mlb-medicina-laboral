import { ProfileType } from "@/app/config/definitions";
import Link from "next/link";

export default function TableA({profiles}: {profiles:ProfileType[]}) {
    return (
        <table className="text-left border border-slate-300 shadow-md rounded-lg table-auto w-full">
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
                {profiles.map((profile, i) => (
                    <tr key={i} className="h-12 border border-slate-300">
                        <td className="p-4 border text-sm border-slate-200">{profile.name}</td>
                        <td className="p-4 border text-sm border-slate-200">2023-01-15</td>
                        <td className="p-4 border text-sm border-slate-200">{profile.mail}</td>
                        <td className="p-4 border text-sm border-slate-200">{profile.status}</td>
                        <td className="p-4 border text-sm border-slate-200">{profile.role === "admin" ? "Administrador" : "Cliente"}</td>
                        <td className="p-4 border text-sm border-slate-200"><Link href="/admin/dashboardA/viewDocuments" className="hover:underline text-bluemain">Ver Documentos</Link></td>
                    </tr>

                ))}
                
            </tbody>
        </table>

    )
}
