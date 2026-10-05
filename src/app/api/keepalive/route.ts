import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/app/utils/supabase/admin";

/**
 * Keep-alive para Supabase (plan gratuito): el proyecto se pausa tras ~7 días sin actividad.
 * Vercel Cron llama a este endpoint según el schedule de vercel.json.
 *
 * Seguridad: Vercel envía automáticamente `Authorization: Bearer <CRON_SECRET>`
 * si la variable de entorno CRON_SECRET está definida en el proyecto.
 */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
	const secret = process.env.CRON_SECRET;
	if (!secret) {
		console.error("keepalive: falta CRON_SECRET");
		return NextResponse.json({ ok: false, error: "not configured" }, { status: 500 });
	}
	if (request.headers.get("authorization") !== `Bearer ${secret}`) {
		return NextResponse.json({ ok: false }, { status: 401 });
	}

	const started = Date.now();
	try {
		const supabase = createAdminClient();
		// Consulta real a la base (no solo un ping HTTP), liviana: solo cuenta, sin traer filas.
		const { count, error } = await supabase
			.from("profiles")
			.select("id", { count: "exact", head: true });

		if (error) {
			console.error("keepalive: error de Supabase:", error.message);
			return NextResponse.json({ ok: false, error: error.message || "supabase error" }, { status: 502 });
		}

		console.log(`keepalive: ok (${count ?? 0} perfiles, ${Date.now() - started} ms)`);
		return NextResponse.json({
			ok: true,
			at: new Date().toISOString(),
			ms: Date.now() - started,
		});
	} catch (error) {
		console.error("keepalive:", error);
		return NextResponse.json({ ok: false, error: "unexpected" }, { status: 500 });
	}
}
