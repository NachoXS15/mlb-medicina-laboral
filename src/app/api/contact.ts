// /pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "POST") return res.status(405).end();

	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	await transporter.sendMail({
		from: email,
		to: process.env.EMAIL_RECEIVER,
		subject: `Nuevo mensaje de ${name}`,
		text: message,
	});

	res.status(200).json({ success: true });
}
