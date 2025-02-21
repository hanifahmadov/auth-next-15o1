"use client";
/* npm packages */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

/* api calls */
import { SignInSchema, SignInSchemaType } from "@/components/signin/signin_schema";

/* components */
import { Form } from "@/components/ui/form";
import { SignInUsername } from "@/components/signin/signin_username";
import { FormPassword } from "@/components/forms/form-password";

const SignIn = () => {
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
		console.log(values);
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
						<SignInUsername form={form} username='' />
						<FormPassword form={form} />
					</form>
				</Form>
			</section>
		</div>
	);
};

export default SignIn;
