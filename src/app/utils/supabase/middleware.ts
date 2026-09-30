import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const LOGIN_PATH = "/admin/login";

/**
 * Refresca la sesión de Supabase en cada request (renueva el access token vencido)
 * y bloquea /admin/* a usuarios sin sesión. Los chequeos de rol/estado se hacen
 * en los layouts/páginas y en cada Server Action.
 */
export async function updateSession(request: NextRequest) {
	let supabaseResponse = NextResponse.next({ request });

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
					supabaseResponse = NextResponse.next({ request });
					cookiesToSet.forEach(({ name, value, options }) =>
						supabaseResponse.cookies.set(name, value, options)
					);
				},
			},
		}
	);

	// IMPORTANTE: no poner código entre createServerClient y getUser().
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { pathname } = request.nextUrl;
	const isAdminArea = pathname.startsWith("/admin");
	const isLogin = pathname === LOGIN_PATH || pathname.startsWith(`${LOGIN_PATH}/`);

	if (!user && isAdminArea && !isLogin) {
		const url = request.nextUrl.clone();
		url.pathname = LOGIN_PATH;
		url.search = "";
		const redirect = NextResponse.redirect(url);
		// Conservar cookies que Supabase haya actualizado (p. ej. al limpiar una sesión inválida).
		supabaseResponse.cookies.getAll().forEach((c) => redirect.cookies.set(c));
		return redirect;
	}

	return supabaseResponse;
}
