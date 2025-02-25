"use client";
/* npm packages */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

/* hooks imports */
import { useUserStore } from "@/components/store/useUserStore";

/* api calls */
import { SignInApi, DocumentNotFoundErrorType, BadCredentialsErrorType } from "@/components/signin/signin_api";
import { SignInSchema, SignInSchemaType } from "@/components/signin/signin_schema";

/* components */
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { SignInUsername } from "@/components/signin/signin_username";
import { FormPassword } from "@/components/forms/form-password";
import { Button } from "@/components/ui/button";
import { SocialAccounts } from "@/components/features/social-accounts";
import { Footer } from "@/components/features/footer";

const SignIn = () => {
	/* hooks setup */
	const { setUser } = useUserStore();

	/* states setup */
	const [signInError, setSignInError] = useState<boolean>(false);
	const [signInErrorInfo, setSignInErrorInfo] = useState<DocumentNotFoundErrorType | BadCredentialsErrorType>({});

	/* form */
	const form = useForm<SignInSchemaType>({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			username: "",
			pwd: "",
		},
	});

	/* handle form submit */
	const handleSubmit = async (values: SignInSchemaType) => {
		if (signInError) return;

		try {
			const response = await SignInApi(values);

			// user response from the server
			setUser(response.data);
		} catch (error: any) {
			console.log(error);
			setSignInError(true);
			setSignInErrorInfo(error);
		}
	};

	return (
		<div className='singin-page w-[21rem] h-full'>
			<section className='header text-center'>
				<h1 className='text-4xl font-semibold'>LOGIN</h1>
			</section>

			<section className='form mt-5'>
				<Form {...form}>
					<form
						noValidate
						className='flex flex-col gap-3 justify-center items-center w-full'
						onSubmit={form.handleSubmit(handleSubmit)}
					>
						<SignInUsername
							form={form}
							signInError={signInError}
							setSignInError={setSignInError}
							signInErrorInfo={signInErrorInfo.errorCode == 12001 ? signInErrorInfo : {}}
							setSignInErrorInfo={setSignInErrorInfo}
						/>
						<FormPassword<SignInSchemaType> form={form} signin={true} />

						<motion.section whileTap={{ scale: 0.99 }} className='submit-btn w-full mt-3 rounded-md'>
							<Button
								className='w-full h-full bg-blue-900 font-semibold hover:bg-opacity-80 
											p-0 m-0 text-sm
											leading-[33px] py-[2px]
											'
							>
								Sign in
							</Button>
						</motion.section>
					</form>
				</Form>
			</section>

			<section className='mt-8 flex flex-row justify-center items-center'>
				<Separator className='bg-blue-950 w-[9rem] h-[2px]' />
				<span className='w-[2.75rem] text-center font-semibold text-[12px]'>OR</span>
				<Separator className='bg-blue-950 w-[9rem] h-[2px]' />
			</section>

			<section>
				<SocialAccounts />
			</section>

			<section className='footer mt-8'>
				<Footer footerContent='Dont have an account ?' footerLinkContent='Sign up' footerLinkHref='/sign-up' />
			</section>
		</div>
	);
};

export default SignIn;
