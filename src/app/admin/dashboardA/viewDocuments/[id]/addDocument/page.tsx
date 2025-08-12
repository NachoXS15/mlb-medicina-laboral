import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";

export default function page() {
    return (
        <main className="flex flex-col w-full font-main my-15 text-gray-700 bg-white justify-center items-center">
            <div className="xl:w-5/12">
                <div className="flex items-center px-10 gap-3">
                    <Link href="/admin/dashboardA" className="cursor-pointer hover:scale-110 transition"><ArrowLeft /></Link>
                    <h2 className="text-2xl font-bold text-center self-center">Carga de Documentos</h2>
                </div>
                <form className='w-full flex items-center shadow-xl p-10 flex-col gap-5'>
                    <div className="flex w-full gap-5">
                        <div className='w-full flex flex-col'>
                            <label htmlFor="">Tipo de Cliente</label>
                            <select name="type" className='h-10 px-5 border border-bluemain rounded-2xl'>
                                <option value="Pyme">Pyme</option>
                                <option value="Particular">Particular</option>
                                <option value="Empresa Grande">Empresa Grande</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full gap-5">
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-bluemain rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Plus  />
                                    <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
                                    </p>
                                    <p className="text-xs text-gray-500">Solo archivos .PDF</p>
                                </div>
                                <input id="file-upload" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <button type='submit' className='mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze'>Agregar Documento</button>
                </form>
            </div>

        </main>
    )
}
