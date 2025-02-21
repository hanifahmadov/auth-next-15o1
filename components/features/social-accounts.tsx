"use client";
/* npm packages */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

/* components */
import { Button } from "@/components/ui/button";

export const SocialAccounts = () => {
	return (
		<div className='social-accouts text-center'>
			<div className=' my-5 flex flex-row justify-center items-center w-full '>
				<span className='inline-block flex-grow border-b-[1px] border-neutral-500' />
				<span className='font-semibold text-white inline-block px-3'>OR</span>
				<span className='inline-block flex-grow border-b-[1px] border-neutral-500' />
			</div>
			<p className=''>Sign in with a social account</p>

			<section className='links w-full flex flex-col gap-3 justify-center items-center mt-3'>
				<div className='google w-full'>
					<Button
						variant='outline'
						className='bg-transparent border border-neutral-800
                                hover:bg-neutral-900 hover:text-white
                                font-semibold w-full
                                '
					>
						<FcGoogle />
						<span>Google</span>
					</Button>
				</div>

				<div className='github  w-full'>
					<Button
						variant='outline'
						className='bg-transparent border border-neutral-800
                                hover:bg-neutral-900 hover:text-white
                                font-semibold w-full
                                '
					>
						<FaGithub />
						<span>Github</span>
					</Button>

				</div>
			</section>
		</div>
	);
};
