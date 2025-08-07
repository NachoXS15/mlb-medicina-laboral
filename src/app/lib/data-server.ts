import { createClient } from "../utils/supabase/server";
import { ProfileType } from "../config/definitions";

export async function fetchProfiles(){
    try {
        const supabase = await createClient();
        const {data: profiles, error} = await supabase.from('profiles').select('*')
        if (error) {
            console.log(error);
        }
        console.log(profiles);
        return profiles as ProfileType[];
        
    } catch (error) {
        console.log(error);
        return null;
    }
}