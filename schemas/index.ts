import * as z from "zod";

export const LoginSchema = z.object({
	email: z
		.string()
		.email("Invalid email format")
        .trim()
		.refine((value) => value.includes("@"), {
			message: "Email must contain @ character.",
		}),
	pwd: z.string().min(2, "Password must be at least 2 characters"),
});

export const RegisterSchema = z
	.object({
		email: z
			.string()
			.email("Invalid email format")
			.trim()
            .toLowerCase()
			.refine((value) => value.includes("@"), {
				message: "Email must contain @ character.",
			}),

		pwd: z.string().trim().min(2, "Password must be at least 2 characters"),
		repwd: z.string().trim().min(2, "Password must be at least 2 characters"),
	})
	.refine((data) => data.pwd === data.repwd, {
		message: "Passwords must match",
		path: ["repwd"], // The error message will appear under the `repwd` field
	});
