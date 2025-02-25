/* eslint-disable */
import axios, { AxiosResponse } from "axios";
import { SignInSchemaType } from "@/components/signin/signin_schema";

/* types */
export type DocumentNotFoundErrorType = {
	name?: "DocumentNotFoundError";
	title?: string;
	message?: string;
	document?: string;
	errorCode?: number;
};

/* types */
export type BadCredentialsErrorType = {
	name?: "BadCredentialsError";
	title?: string;
	message?: string;
	errorCode?: number;
};

export async function SignInApi(data: SignInSchemaType): Promise<AxiosResponse<any>> {
	try {
		const response = await axios({
			url: `${process.env.NEXT_PUBLIC_API_URL}/signin/`,
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
		// DocumentNotFoundError
		if (error?.response?.status === 404) {
			/*  "message" comes from your Node.js "DocumentNotFoundError" class */
			const messageFromServer: string = error?.response?.data?.message ?? "Document not found";
			const titleFromServer: string = error?.response?.data?.title ?? "";
			const documentFromServer: string = error?.response?.data?.document ?? "";
			const errorCodeFromServer: number = error?.response?.data?.errorCode ?? 12001;

			// Throw a typed error object
			const customError: DocumentNotFoundErrorType = {
				name: "DocumentNotFoundError",
				title: titleFromServer,
				message: messageFromServer,
				document: documentFromServer,
				errorCode: errorCodeFromServer,
			};

			throw customError;
		}

		// BadCredentialsError
		if (error?.response?.status === 401) {
			const messageFromServer: string = error?.response?.data?.message ?? "Invalid credentials";
			const errorCodeFromServer: number = error?.response?.data?.errorCode ?? 13001;

			// Throw a typed error object
			const customError: BadCredentialsErrorType = {
				name: "BadCredentialsError",
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
