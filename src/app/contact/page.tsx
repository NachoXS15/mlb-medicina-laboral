import { redirect } from "next/navigation";

// La sección de contacto vive en la home.
export default function Page() {
	redirect("/#contact");
}
