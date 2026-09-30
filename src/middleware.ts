import type { NextRequest } from "next/server";
import { updateSession } from "@/app/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
	return updateSession(request);
}

export const config = {
	// Solo el área privada: el sitio público no necesita sesión y así no suma latencia.
	matcher: ["/admin/:path*"],
};
