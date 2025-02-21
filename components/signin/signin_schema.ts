/* eslint-disable */
import * as z from "zod";

export const SignInSchema = z.object({
	username: z.string().trim().min(1, "Username or Email is required"),
	pwd: z.string().trim().min(1, "Password is required"),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
