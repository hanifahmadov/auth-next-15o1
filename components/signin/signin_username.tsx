import React, { useState, useRef } from "react";
import { UseFormReturn } from "react-hook-form";

/* components */
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInLabel } from "@/components/signin/signin-label";

/* api calls */
import { SignInSchemaType } from "@/components/signin/signin_schema";
import { DocumentNotFoundErrorType } from "./signin_api";
import { tree } from "next/dist/build/templates/app-page";

type SignInUsernameProps = {
	form: UseFormReturn<SignInSchemaType>;
	signInErrorInfo: DocumentNotFoundErrorType;
	signInError: boolean;
	setSignInError: (val: boolean) => void;
	setSignInErrorInfo: (val: DocumentNotFoundErrorType) => void;
};

export const SignInUsername = ({
	form,
	signInError,
	setSignInError,
	signInErrorInfo,
	setSignInErrorInfo,
}: SignInUsernameProps) => {
	/* input ref */
	const inputRef = useRef<HTMLInputElement>(null);

	/* states */
	const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false);

	// const { title, message } = signInError;

	/* handle onFocus */
	const handleFocus = (val: string | undefined) => {
		setIsUsernameValid(false);
		setSignInError(false);
		setSignInErrorInfo({});
	};

	/* handle onBlue */
	const handleOnBlur = (val: string | undefined) => {
		if (val && val.trim().length) {
			setIsUsernameValid(true);
		}
	};

	return (
		<section className='signin-username w-full'>
			<FormField
				control={form.control}
				name='username'
				render={({ field }) => (
					<FormItem>
						<SignInLabel signInErrorInfo={signInErrorInfo} username={true} pwd={false} />
						<FormControl>
							<div className='relative w-full'>
								<Input
									{...field}
									type='text'
									placeholder='john-doe@gmail.com'
									autoComplete='off'
									autoFocus={true}
									onFocus={() => handleFocus(field.value)}
									onBlur={() => handleOnBlur(field.value)}
									className={`bg-transparent border border-neutral-800
												w-full p-5 focus-visible:ring-0 focus-visible:ring-offset-blue-500
												focus-visible:ring-gray-500 
												placeholder-neutral-700 placeholder:pl-1 placeholder:tracking-wider
												tracking-wide 
												${isUsernameValid && !signInError && "bg-neutral-900"}
												${signInError && "ring-2 ring-red-600"}
												`}
								/>
							</div>
						</FormControl>
					</FormItem>
				)}
			/>
		</section>
	);
};
