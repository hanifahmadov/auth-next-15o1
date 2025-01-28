import * as z from "zod";

export const LoginSchema = z.object({
	email: z.string().email({
        message:'Errorrr'
    }),
	pwd: z.string(),
});
