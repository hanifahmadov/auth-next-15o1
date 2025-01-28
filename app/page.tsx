/* NPM */
import React from "react";
import Image from "next/image";

/* component  */
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
/* image */
import roomImage from "@/public/room.png";
import blankLogo from "@/public/blank-logo.png";

/* Home Page */
const Home = () => {
	return (
		<div
			className='home flex flex-col gap-3 justify-center items-center
                        sm:h-[25rem] sm:w-[35rem] 
                        border border-neutral-800 
                        rounded-xl m-5 p-5 
                        '
		>
			<section className='header flex flex-col gap-3 justify-center items-center '>
				{/* App logo here */}
				{/* <Image src={roomImage} alt='room image' height={60} width={60} /> */}
				<Image src={blankLogo} alt='room image' height={60} width={60} className='rounded' />
				{/* <h1 className='text-3xl font-semibold text-white'>Room of Zoom</h1> */}
				<h1 className='text-3xl font-semibold text-white'>App Name Here</h1>
			</section>

			<section className='home-content flex flex-col justify-center items-center mt-2'>
				{/* <p className='app-description text-center text-[16px]'>
					This app is inspired by the Zoom video call application. 
                    Featuring only the core functionalities.
				</p> */}

				<p className='app-description text-center text-[16px]'>
					App description here!
				</p>
			</section>

			<section className='home-content flex flex-col gap-5 justify-center items-center mt-5'>
				<p className='app-description text-[16px]'>Please sign in to continue.</p>

				<LoginButton>
					<Button
						variant='outline'
						className='bg-transparent border border-neutral-800
                                hover:bg-neutral-950 hover:text-white
                                font-semibold text-[16px] px-5
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
