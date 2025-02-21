/* eslint-disable */
import axios, { AxiosResponse } from "axios";
import { SignUpSchemaType } from "@/components/signup/signup_schema";

/* types */
interface SignupData {
	username: string;
	email: string;
	pwd: string;
}

interface DocumentAlreadyExistError {
	name: "DocumentAlreadyExist";
	message: string; // e.g. "Username is already taken"
	errorCode: number;
}

export async function SignUpApi(data: SignUpSchemaType): Promise<AxiosResponse<any>> {
	try {
		const response = await axios({
			url: `${process.env.NEXT_PUBLIC_API_URL}/signup/`,
			method: "POST",
			withCredentials: true,
			data,
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		return response;
	} catch (error: any) {
		if (error?.response?.status === 409) {
			/*  "message" comes from your Node.js "DocumentAlreadyExist" class */
			const messageFromServer: string = error?.response?.data?.message ?? "Document already exists";
			const errorCodeFromServer: number = error?.response?.data?.errorCode ?? 409;

			// Throw a typed error object
			const customError: DocumentAlreadyExistError = {
				name: "DocumentAlreadyExist",
				message: messageFromServer,
				errorCode: errorCodeFromServer,
			};

			throw customError;
		}

		// Fallback: re-throw any other error (500, network, etc.)
		// or you could transform it into a custom "ServerError" if you want
		throw error;
	}
}
