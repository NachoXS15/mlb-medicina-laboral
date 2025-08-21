
import DeleteButton from "@/app/components/DeleteButton";
import DocumentDirectory from "@/app/components/DocDirectory";
import DownloadButton from "@/app/components/DownloadButton";
import { DocType } from "@/app/config/definitions";
import { TypeField } from "@/app/config/DynamicFieldsStyles";
import { fetchProfilebyId } from "@/app/lib/data-server";
import { createClient } from "@/app/utils/supabase/server";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import Link from "next/link";

export default async function page({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { id } = await params;
    const profile = await fetchProfilebyId(id)
    const supabase = await createClient();

    const { data: documents, error } = await supabase.from('docs').select().eq("user_id", id)
    if (error) {
        console.error(error);
    }

    const docs = documents as DocType[];

    return (
        <>
            <DocumentDirectory docs={docs} />
        </>
    )
}