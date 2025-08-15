'use client'
import { Download } from "lucide-react"
import { supabaseClient } from "../utils/supabase/client"

type Props = {
    filePath: string
    size: number
}

export default function DownloadButton({filePath, size}: Props) {
    const handleDownload = async() => {
        const {data, error} = await supabaseClient.storage.from('docsbucket').createSignedUrl(filePath, 60 * 60)
        if (error) {
            console.log(error);
            alert("No se pudo descargar archivo");
        }
        if (data?.signedUrl) {
            window.open(data.signedUrl, '_blank')
        }
    }

    return (
        <button onClick={handleDownload} className="cursor-pointer">
            <Download size={size} />
        </button>
    )
}
