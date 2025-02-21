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
import { SignUpSchema, SignUpSchemaType } from "@/actions/schemas/signup_schema";
import { SignUpApi } from "@/actions/apis/sign_up";

/* icons */
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

/* components */
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form-label";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/auth/footer";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SignUp = () => {
	const [isUsernameValid, setIsUsernameValid] = useState(false);
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [isPwdValid, setIsPwdValid] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [openDialoge, setOpenDialoge] = useState(false);

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

	const handleSubmit = async (values: SignUpSchemaType) => {
		/* showPassword */
		setShowPassword(false);
		setOpenDialoge(true);

		try {
			const response = await SignUpApi(values);

			// console.log("Signup successful:", response.data);
		} catch (error: any) {
			console.log(error);
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
						<section className='username w-full '>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											username={true}
											email={false}
											pwd={false}
											message={form.formState.errors.username?.message}
										/>
										<FormControl>
											<div className='relative w-full'>
												<Input
													{...field}
													type='text'
													placeholder='At least 2 characters'
													autoComplete='off'
													autoFocus={true}
													onFocus={() => {
														setIsUsernameValid(false);
													}}
													onBlur={() => {
														if (field.value.trim().length > 0) {
															form.trigger("username").then(() => {
																if (!form.formState.errors.username) {
																	setIsUsernameValid(true);
																} else {
																	setIsUsernameValid(false);
																}
															});
														}
													}}
													className={`bg-transparent border border-neutral-800
														w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
														focus-visible:ring-gray-500
														placeholder-neutral-600 placeholder:pl-1
														p-5 tracking-wide
														${isUsernameValid && "bg-neutral-900"}`}
												/>
												{isUsernameValid && (
													<FaRegCircleCheck className='absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xl' />
												)}
											</div>
										</FormControl>
									</FormItem>
								)}
							/>
						</section>

						<section className='email w-full'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											username={false}
											email={true}
											pwd={false}
											message={form.formState.errors.email?.message}
										/>
										<FormControl>
											<div className='relative w-full'>
												<Input
													{...field}
													type='email'
													placeholder='Enter email @ address'
													autoComplete='off'
													autoFocus={false}
													onFocus={() => {
														setIsEmailValid(false);
													}}
													onBlur={() => {
														if (field.value.trim().length > 0) {
															form.trigger("email").then(() => {
																if (!form.formState.errors.email) {
																	setIsEmailValid(true);
																} else {
																	setIsEmailValid(false);
																}
															});
														}
													}}
													className={`bg-transparent border border-neutral-800
														w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
														focus-visible:ring-gray-500
														placeholder-neutral-600 placeholder:pl-1
														p-5 tracking-wide
														${isEmailValid && "bg-neutral-900"}`}
												/>

												{isEmailValid && (
													<FaRegCircleCheck className='absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xl' />
												)}
											</div>
										</FormControl>
									</FormItem>
								)}
							/>
						</section>

						<section className='pwd w-full'>
							<FormField
								control={form.control}
								name='pwd'
								render={({ field }) => (
									<FormItem>
										<FormLabel
											username={false}
											email={false}
											pwd={true}
											message={form.formState.errors.pwd?.message}
										/>
										<FormControl>
											<div className='relative w-full'>
												<Input
													{...field}
													type={showPassword ? "text" : "password"}
													placeholder='At least 5 characters'
													autoComplete='off'
													onFocus={() => {
														setIsPwdValid(false);
													}}
													onBlur={() => {
														if (field.value.trim().length > 0) {
															form.trigger("pwd").then(() => {
																if (!form.formState.errors.pwd) {
																	setIsPwdValid(true);
																} else {
																	setIsPwdValid(false);
																}
															});
														}
													}}
													className={`bg-transparent border border-neutral-800
														w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
														tracking-wide 
														 focus-visible:ring-gray-500
														 placeholder-neutral-600 placeholder:pl-1
														 p-5
														 ${isPwdValid && "bg-neutral-900"}
														`}
												/>

												{field.value.length > 0 && (
													<div
														className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer h-[70%] w-[25px] flex items-center justify-center'
														onClick={() => setShowPassword((prev) => !prev)}
													>
														{showPassword ? (
															<FaRegEye className='text-red-500 text-xl' />
														) : (
															<FaRegEyeSlash className=' text-green-500 text-xl' />
														)}
													</div>
												)}
											</div>
										</FormControl>
									</FormItem>
								)}
							/>
						</section>

						<motion.section whileTap={{ scale: 0.99 }} className='submit-btn w-full mt-3 rounded-md'>
							<Button
								// disabled={!(isEmailValid && isPwdValid && isConfirmPwdValid)}
								className='w-full h-full bg-green-900 font-semibold hover:bg-opacity-80 border border-transparent'
							>
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

			<AlertDialog open={openDialoge}>
				<AlertDialogContent className='bg-gray-900 text-neutral-100 border border-neutral-800'>
					<div className='w-full flex items-center justify-center'>
						<Lottie
							animationData={rolling}
							loop
							autoplay
							className='w-[1rem] h-[1rem] scale-[7] overflow-hidden  origin-center  bg-transparent'
						/>
					</div>
					<AlertDialogHeader>
						<AlertDialogTitle className='text-center text-[18px]'>
							Signing up with the credentials.
						</AlertDialogTitle>

						<AlertDialogDescription className='py-3 flex flex-col gap-1'>
							<div className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
								<span className='text-gray-500'>Username:</span>
								<span className=''>{form.getValues("username")}</span>
							</div>
							<p className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
								<span className='text-gray-500'>Email Address:</span>
								<span className=''>{form.getValues("email")}</span>
							</p>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<div className=' w-full flex gap-2 items-center justify-center'>
							<Button
								disabled={false}
								className='border border-neutral-600 hover:border-neutral-200'
								onClick={() => setOpenDialoge(false)}
							>
								Cancel
							</Button>
							<Button disabled={false} className='border border-neutral-600  hover:border-neutral-200'>
								Sign in
							</Button>
						</div>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default SignUp;
