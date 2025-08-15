import { supabaseClient } from "../utils/supabase/client";

export async function deleteDoc(path: string[], id: string){
    try {
        //delete from bucket
        const {error: bucketError} = await supabaseClient.storage.from('docsbucket').remove(path)
        if (bucketError) {
            console.error(bucketError);
        }

        //delete from table
        const {error: tableError} = await supabaseClient.from('docs').delete().eq("id", id).single();
        if (tableError) {
            console.error(tableError);
        }
        location.reload()
            
    } catch (error) {
        console.log(error);
    }
}