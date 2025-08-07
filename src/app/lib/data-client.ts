import { ProfileType, UserSignUp } from "../config/definitions";
import { supabaseClient } from "../utils/supabase/client";

export const postUserDB = async ({
    name,
    mail,
    type,
    status,
    role
}: ProfileType) => {
    try {
        const { data, error } = await supabaseClient
            .from("profiles")
            .insert([
                {
                    name,
                    mail,
                    type,
                    status,
                    role
                },
            ])
            .select();
            console.log({ data, error });
        if (error) {
            throw error;
        }
        console.log("Usuario: insertado:", data);
        return data;
    } catch (error) {
        console.error("Error al insertar usuario:", error);
        throw error;
    }
};

export const postUser = async({mail, password}: UserSignUp) => {

    const info = {
        email: mail.trim(),
        password: password
    }

    try {
        const {data, error} = await supabaseClient.auth.signUp(info);
        console.log(data);
        if (error) {
            console.log("error crear usuario: ", error);
        }
        return data
    } catch (error) {
        console.log(error);
    }
}

