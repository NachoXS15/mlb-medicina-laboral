import { createBrowserClient } from "@supabase/ssr";

// Cliente del navegador que comparte la sesión (cookies) con el servidor.
// Las operaciones sensibles (subir/borrar/descargar documentos, altas de usuarios)
// NO se hacen desde acá: van por Server Actions con verificación de permisos.
export const supabaseClient = createBrowserClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
