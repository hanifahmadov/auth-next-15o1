"use client";
/* npm packages */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

/* components */
import { Button } from "@/components/ui/button";

export const SocialAccounts = () => {
	return (
		<div className='social-accouts text-center mt-8'>
			<span className='text-base'>Sign in with a social account</span>

			<section className='links w-full flex flex-col gap-3 justify-center items-center mt-3'>
				<div className='google w-full'>
					<Button
						variant='outline'
						className='bg-transparent border border-neutral-800
                                hover:bg-neutral-900 hover:text-white
                                font-semibold w-full p-5 
                                '
					>
						<FcGoogle />
						<span className="text-sm">Google</span>
					</Button>
				</div>

				<div className='github  w-full'>
					<Button
						variant='outline'
						className='bg-transparent border border-neutral-800
                                hover:bg-neutral-900 hover:text-white
                                font-semibold w-full p-5 
                                '
					>
						<FaGithub />
						<span className="text-sm">Github</span>
					</Button>
				</div>
			</section>
		</div>
	);
};
