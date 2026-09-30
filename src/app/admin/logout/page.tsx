import { signOut } from "@/app/lib/auth-actions";

// Cerrar sesión con un GET (link/prefetch) no es seguro ni funciona en un Server Component:
// se hace con un POST vía Server Action.
export default function Page() {
	return (
		<main className="w-full min-h-screen flex items-center justify-center font-main">
			<form action={signOut} className="flex flex-col items-center gap-5">
				<h2 className="text-2xl font-bold">¿Cerrar sesión?</h2>
				<button
					type="submit"
					className="px-5 bg-bluemain text-white py-2 rounded hover:bg-white border border-bluemain hover:text-bluemain transition cursor-pointer"
				>
					Cerrar sesión
				</button>
			</form>
		</main>
	);
}
