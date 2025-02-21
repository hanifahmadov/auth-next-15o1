"use client";
/* npm packages */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

import Lottie from "lottie-react";
import rolling from "@/components/lotties/rolling.json";

/* api calls */
import { SignUpSchema, SignUpSchemaType } from "@/components/signup/signup_schema";
import { SignUpApi } from "@/components/signup/signup_api";

/* components */
import { Form } from "@/components/ui/form";
import { FormUsername } from "@/components/forms/form-username";
import { FormEmail } from "@/components/forms/form-email";
import { FormPassword } from "@/components/forms/form-password";
import { SignUpDialog } from "@/components/signup/signup-dialog";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/features/footer";

const SignUp = () => {
	/* states */
	const [openDialog, setOpenDialog] = useState(false);
	const [signUpSuccess, setSignUpSuccess] = useState(false);
	const [signUpError, setSignUpError] = useState(false);
	const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
	const [signUpErrorCode, setSignUpErrorCode] = useState(0);
	const [email, setEmail] = useState("hanifa@gmail.com");
	const [username, setUsername] = useState("hanifa");

	/* form */
	const form = useForm<SignUpSchemaType>({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			username: "",
			email: "",
			pwd: "",
		},
	});

	/* handle form submit */
	const handleSubmit = async (values: SignUpSchemaType) => {
		/* if  */

		console.log(values.username, username);
		console.log(values.email, email);

		if (values.email === email || values.username === username) return;

		/* open dialog */
		setOpenDialog(true);
		setSignUpError(false);
		setSignUpErrorMessage("");
		setSignUpErrorCode(0);
		setSignUpSuccess(false);

		try {
			const response = await SignUpApi(values);
			console.log("Signup successful:", response.data);

			setSignUpSuccess(true);
		} catch (err: any) {
			const { username, email } = values;
			console.log(err);

			if (err.errorCode == 11000) {
				setEmail(email);
			}

			if (err.errorCode == 11001) {
				setUsername(username);
			}

			setSignUpError(true);
			setSignUpErrorCode(err.errorCode);
			setSignUpErrorMessage(err.message);
		}
	};

	return (
		<div className='singin-page w-[21rem] h-full'>
			<section className='header text-center'>
				<h1 className='text-4xl font-semibold'>REGISTER</h1>
			</section>

			<section className='sub-header text-center mt-5 text-[12px]'>
				<h1 className=''>For testing only. Do not use real personal info.</h1>
				<h1 className=''>Use a fake email to register.</h1>
			</section>

			<section className='form mt-5'>
				<Form {...form}>
					<form
						noValidate
						className='flex flex-col gap-3 justify-center items-center w-full'
						onSubmit={form.handleSubmit(handleSubmit)}
					>
						<FormUsername form={form} signUpErrorCode={signUpErrorCode} username={username} />
						<FormEmail form={form} signUpErrorCode={signUpErrorCode} email={email} />
						<FormPassword form={form} />

						<motion.section whileTap={{ scale: 0.99 }} className='submit-btn w-full mt-3 rounded-md'>
							<Button className='w-full h-full bg-green-900 font-semibold hover:bg-opacity-80 border border-transparent'>
								<span className='h-[19px] text-[12px]'>Create an account</span>
							</Button>
						</motion.section>
					</form>
				</Form>
			</section>

			<section className='footer mt-8'>
				<Footer
					footerContent='Already have an account ?'
					footerLinkContent='Sign in'
					footerLinkHref='/sign-in'
				/>
			</section>

			<SignUpDialog
				signUpSuccess={signUpSuccess}
				signUpError={signUpError}
				openDialog={openDialog}
				setSignUpSuccess={setSignUpSuccess}
				setSignUpError={setSignUpError}
				setOpenDialog={setOpenDialog}
				setSignUpErrorCode={setSignUpErrorCode}
				setSignUpErrorMessage={setSignUpErrorMessage}
				signUpErrorMessage={signUpErrorMessage}
				signUpErrorCode={signUpErrorCode}
				form={form}
			/>
		</div>
	);
};

export default SignUp;
