import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().trim().min(2, "Please enter your name."),
	email: z.email("Please enter a valid email."),
	message: z
		.string()
		.trim()
		.min(10, "Message should be at least 10 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
	.validator(contactSchema)
	.handler(async ({ data }) => {
		// Placeholder: no email provider wired yet.
		console.info("[contact]", {
			name: data.name,
			email: data.email,
			messageLength: data.message.length,
		});
		return {
			ok: true as const,
			message: "Thanks — your message is on the network.",
		};
	});
