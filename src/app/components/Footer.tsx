export default async function Footer() {
	return (
		<footer className="bg-red-500 py-5 min-h-30">
			<p className="text-center">
				Copyright &copy; 2025 | Diseñado por:{" "}
			</p>
			<div className="flex w-48 mx-auto my-5">
				<a
					href="https://api.whatsapp.com/send/?phone=%2B5493804627098&text&type=phone_number&app_absent=0"
					target="_blank"
					className="flex aspect-square bg-blue-500 p-2"
				>
					icon
				</a>
			</div>
		</footer>
	);
}
