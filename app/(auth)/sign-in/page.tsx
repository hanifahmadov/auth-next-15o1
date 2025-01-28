"use client";
/* npm packages */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/* schemas */
import { LoginSchema } from "@/schemas";

/* components */
import { SocialAccounts } from "@/components/auth/social-accounts";
import { Footer } from "@/components/auth/footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");

	/* form */
	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			pwd: "",
		},
	});

	return (
		<div className='singin-page w-[18rem]'>
			<section className='header text-center'>
				<h1 className='text-white text-3xl font-bold'>LOGIN</h1>
			</section>

			{/* <section className='form mt-8'>
				<Form {...form}>
					<form
						className='flex flex-col gap-4 justify-center items-center w-full'
						onSubmit={form.handleSubmit(() => {})}
					>
						<section className='email w-full '>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												{...field}
												type='email'
												placeholder='Email Address'
												autoComplete='off'
												className='bg-transparent border border-neutral-800
                                                            text-[14px] w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
                                                             focus-visible:ring-gray-500
                                                            '
											/>
										</FormControl>
										<FormMessage />
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
										<FormControl>
											<Input
												{...field}
												type='password'
												placeholder='Password'
												autoComplete='off'
												className='bg-transparent border border-neutral-800
                                                            text-[14px] w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
                                                             focus-visible:ring-gray-500
                                                            '
											/>
										</FormControl>
                                        <FormMessage />
									</FormItem>
								)}
							/>
						</section>

                        <section className="submit-btn w-full mt-5">
                            <Button variant='secondary' className="w-full">Login</Button>
                        </section>
					</form>
				</Form>
			</section> */}

			{/* <section className='inputs mt-8 flex flex-col gap-4'>
				<div className='email=wrapper'>
					<Input
						type='email'
						className='bg-transparent border border-neutral-800
                                text-[14px] w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
                                focus-visible:ring-gray-500
                                '
						placeholder='Email Address'
						onChange={(e) => setEmail(e.target.value.trim())}
					/>
				</div>

				<div className='pwd-wrapper'>
					<Input
						type='password'
						className='bg-transparent border border-neutral-800
                                text-[14px] w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
                               
                                '
						placeholder='Password'
						onChange={(e) => setPwd(e.target.value.trim())}
					/>
				</div>

				<div className='mt-5'>
					<Button variant='secondary' className='font-semibold text-[14px] w-full'>
						Sign in
					</Button>
				</div>
			</section> */}

			{/* <section className='socials pt-5'>
				<SocialAccounts />
			</section>

			<section className='footer mt-10 text-[16px]'>
				<Footer footerContent='Dont have an account?' footerLinkContent='Sign up' footerLinkHref='/sign-up' />
			</section> */}
		</div>
	);
};

export default SignIn;
