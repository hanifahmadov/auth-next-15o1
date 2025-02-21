/* NPM */
import React from "react";
import Image from "next/image";

/* component  */
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/features/login-button";
/* image */
import blankLogo from "@/public/blank-logo.png";

/* Home Page */
const Home = () => {
	return (
		<div
			className='home flex flex-col gap-3 justify-center items-center
                        sm:h-[25rem] sm:w-[35rem]
                        m-5 p-5 
                        '
		>
			<section className='header flex flex-col gap-3 justify-center items-center '>
				{/* App logo here */}
				<Image src={blankLogo} alt='room image' height={60} width={60} className='rounded' />
				{/* App Name here */}
				<h1 className='text-3xl font-semibold'>App Name Here</h1>
			</section>

			<section className='home-content flex flex-col justify-center items-center mt-2'>
				{/* <p className='app-description text-center text-[16px]'>
					This app is inspired by the Zoom video call application. 
                    Featuring only the core functionalities.
				</p> */}

				<p className='app-description text-center'>
					App description here!
				</p>
			</section>

			<section className='home-content flex flex-col gap-5 justify-center items-center mt-5'>
				<p className='app-description'>Please sign in to continue.</p>

				<LoginButton>
					<Button
						variant='outline'
						className='bg-transparent border border-neutral-800
                            	 hover:text-white hover:border-blue-500
                                 font-semibold px-4
                                '
					>
						Sign in
					</Button>
				</LoginButton>
			</section>
		</div>
	);
};

export default Home;
