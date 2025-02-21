/* eslint-disable */
import * as z from "zod";

export const SignUpSchema = z.object({
	username: z.string().trim().min(1, "Username is required").min(2, "Username must be at least 2 characters"),
	email: z
		.string()
		.trim()
		.toLowerCase()
		.min(1, "Email is required")
		.refine((value) => value.includes("@"), {
			message: "Email must contain @ character.",
		})
		.refine(
			(value) => {
				const parts = value.split("@");
				return parts.length === 2 && parts[1].includes(".");
			},
			{ message: "Incomplete domain name ( e.g, gmail.com )" }
		)
		.refine(
			(value) => {
				const domain = value.split("@")[1];
				if (!domain || !domain.includes(".")) return false;
				const domainSuffix = domain.split(".").pop();
				return domainSuffix !== undefined && domainSuffix.length >= 2;
			},
			{ message: "Incomplete domain name ( e.g, gmail.com )" }
		),
	pwd: z.string().trim().min(1, "Password is required").min(5, "Password must be at least 5 characters"),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
