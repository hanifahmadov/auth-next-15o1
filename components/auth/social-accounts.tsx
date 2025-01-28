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
				<span className='font-bold text-white text-[14px] inline-block px-3'>OR</span>
				<span className='inline-block flex-grow border-b-[1px] border-neutral-500' />
			</div>
			<p className='text-[16px]'>Sign in with a social account</p>

			<section className='links w-full flex justify-center items-center gap-3 mt-3'>
				<div className='google w-full'>
					<Button
						variant='outline'
						className='bg-transparent border border-neutral-800
                                hover:bg-neutral-900 hover:text-white
                                font-semibold text-[14px] w-full
                                '
					>
						<FcGoogle />
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
					</Button>

				</div>
			</section>
		</div>
	);
};
