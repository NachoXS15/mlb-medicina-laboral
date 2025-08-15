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
            className="hover:scale-105 transition cursor-pointer"
            onClick={() => deleteDoc([filePath], id)}>
            <Trash size={24} />
        </button>
    )
}
