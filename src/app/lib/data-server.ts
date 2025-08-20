import { createClient } from "../utils/supabase/server";
import { ProfileType } from "../config/definitions";

export async function fetchProfiles(){
    try {
        const supabase = await createClient();
        const {data: profiles, error} = await supabase.from('profiles').select('*')
        if (error) {
            console.log(error);
        }
        return profiles as ProfileType[];
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function fetchProfilebyId(id: string){
    try {
        const supabase = await createClient();
        const {data: profile, error} = await supabase.from('profiles').select('*').eq("id", id).single()
        if (error) {
            console.log(error);
        }
        return profile as ProfileType;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}
