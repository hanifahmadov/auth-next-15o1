/* eslint-disable */
import * as z from "zod";

export const SignInSchema = z.object({
	username: z.string().trim().min(1, "Username or Email address is required"),
	pwd: z.string().trim().min(1, "Password is required").min(5, "Password (min. 5 characters)")
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
