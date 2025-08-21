'use client'
import { Trash } from "lucide-react";
import { deleteDoc } from "../lib/data-client";


interface Props {
    filePath: string;
    id: string;
}

export default function DeleteButton({filePath, id}: Props) {
    return (
        <button
            className="hover:scale-105 transition cursor-pointer flex items-center gap-2 bg-red-200 px-5 py-2 rounded"
            onClick={() => deleteDoc([filePath], id)}>
                <span className="hidden md:inline">Eliminar</span>
                <Trash size={24} />
        </button>
    )
}   
