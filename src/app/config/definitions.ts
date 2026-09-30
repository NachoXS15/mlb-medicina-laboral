export interface ProfileType {
	id?: string;
	name: string;
	mail: string;
	role: string;
	status: string;
	img?: string | null;
	type: string;
	created_at?: string;
}

export interface DocType {
	id: string;
	doc_name: string;
	path_name: string;
	type: string;
	created_at: string;
	user_id?: string;
	year?: string;
	month?: string;
}

export const CLIENT_TYPES = ["Pyme", "Particular", "Empresa Grande"] as const;
export const STATUSES = ["Activo", "Inactivo"] as const;
export const ROLES = ["client", "admin"] as const;
export const DOC_TYPES = [
	"Examenes Preocupacionales",
	"Examenes Periodicos",
	"Pericias Médicas",
	"Otros",
] as const;
export const MONTHS = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
] as const;

export const FIRST_DOC_YEAR = 2022;

/** Años disponibles para cargar documentos: del año próximo hacia atrás hasta FIRST_DOC_YEAR. */
export function docYears(now = new Date()): string[] {
	const years: string[] = [];
	for (let y = now.getFullYear() + 1; y >= FIRST_DOC_YEAR; y--) years.push(String(y));
	return years;
}

/** Corrige valores históricos mal escritos guardados en la base (p. ej. "Septimebre"). */
export function normalizeMonth(month: string): string {
	return month === "Septimebre" ? "Septiembre" : month;
}

export function isOneOf<T extends readonly string[]>(value: string, list: T): value is T[number] {
	return (list as readonly string[]).includes(value);
}

export function isValidEmail(value: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Devuelve "" si está vacío, la URL normalizada si es https válida, o null si es inválida.
 * Evita que se inyecte CSS/JS a través del campo de imagen de fondo.
 */
export function sanitizeImageUrl(value: string): string | null {
	const v = value.trim();
	if (!v) return "";
	try {
		const url = new URL(v);
		if (url.protocol !== "https:") return null;
		return url.toString();
	} catch {
		return null;
	}
}
