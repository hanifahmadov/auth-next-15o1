import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import Link from "next/link";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import Lottie from "lottie-react";
import rolling from "@/components/lotties/rolling.json";
import stop from "@/components/lotties/stop.json";
import signUpSuccessIcon from "@/components/lotties/success-01.json";

/* api calls */
import { SignUpSchemaType } from "@/components/signup/signup_schema";
import { Button } from "@/components/ui/button";

interface SignUpDialogProps {
	form: UseFormReturn<SignUpSchemaType>;
	openDialog: boolean;
	setOpenDialog: (val: boolean) => void;
	setSignUpSuccess: (val: boolean) => void;
	setSignUpError: (val: boolean) => void;
	setSignUpErrorMessage: (val: string) => void;
	setSignUpErrorCode: (val: number) => void;

	signUpSuccess: boolean;
	signUpError: boolean;
	signUpErrorMessage: string;
	signUpErrorCode: number;
}

export const SignUpDialog = ({
	signUpSuccess,
	signUpError,
	signUpErrorMessage,
	signUpErrorCode,
	openDialog,
	form,

	setOpenDialog,
	setSignUpSuccess,
	setSignUpError,
	setSignUpErrorCode,
	setSignUpErrorMessage,
}: SignUpDialogProps) => {
	/* handle cancel button click */
	const handleBackBtnClick = () => {
		setOpenDialog(false);
		// setSignUpError(false);
		// setSignUpErrorMessage("");
		// setSignUpErrorCode(0);
		// setSignUpSuccess(false);
	};
	const handleSignInBtnClick = () => {
		console.log("Siktir");

		// setSignUpErrorMessage("");
		// setSignUpErrorCode(0);
		// setSignUpSuccess(false);
	};
	return (
		<AlertDialog open={openDialog}>
			<AlertDialogContent className='bg-gray-900 text-neutral-100 border-0'>
				<div className='w-full flex items-center justify-center'>
					{signUpSuccess ? (
						<Lottie
							animationData={signUpSuccessIcon}
							loop={false}
							autoplay
							className='w-[1rem] h-[1rem] scale-[7] overflow-hidden  origin-center  bg-transparent'
						/>
					) : signUpError ? (
						<Lottie
							animationData={stop}
							loop={false}
							autoplay
							className='w-[1rem] h-[1rem] scale-[2] overflow-hidden  origin-center  bg-transparent'
						/>
					) : (
						<Lottie
							animationData={rolling}
							loop={true}
							autoplay
							className='w-[1rem] h-[1rem] scale-[7] overflow-hidden  origin-center  bg-transparent'
						/>
					)}
				</div>
				<AlertDialogHeader>
					<AlertDialogTitle className='text-center text-[18px]'>
						<span
							className={`font-semibold text-2xl ${signUpError ? "text-red-600" : "text-neutral-100"} `}
						>
							{signUpSuccess ? (
								<span className='text-green-300'>
									Signed up <span className='text-green-300'>Successfully!</span>
								</span>
							) : signUpError ? (
								"Credentials Error"
							) : (
								"Signing up ..."
							)}
						</span>
					</AlertDialogTitle>

					<AlertDialogDescription className='flex justify-center'>
						{!signUpError ? (
							// 1️⃣ No error → normal content
							<span className='py-3 flex flex-col gap-1'>
								<span className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
									<span className='text-gray-400'>Username:</span>
									<span>{form.getValues("username")}</span>
								</span>
								<span className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
									<span className='text-gray-400'>Email Address:</span>
									<span>{form.getValues("email")}</span>
								</span>
							</span>
						) : // 2️⃣ signUpError is true
						signUpErrorCode === 11001 ? (
							<span className='py-3 flex flex-col gap-1'>
								<span className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
									<span className='text-gray-400'>Username:</span>
									<span className='text-red-600'>{signUpErrorMessage}</span>
								</span>
								<span className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
									<span className='text-gray-400'>Email Address:</span>
									<span>{form.getValues("email")}</span>
								</span>
							</span>
						) : signUpErrorCode === 11000 ? (
							<span className='py-3 flex flex-col gap-1'>
								<span className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
									<span className='text-gray-400'>Username:</span>
									<span>{form.getValues("username")}</span>
								</span>
								<span className='username flex gap-1 items-center justify-center font-semibold text-[13px]'>
									<span className='text-gray-400'>Email Address:</span>
									<span className='text-red-600'>{signUpErrorMessage}</span>
								</span>
							</span>
						) : (
							// 2️⃣ (c) Fallback for other error codes
							<span className='py-3 flex flex-col gap-1'>
								<span className='text-red-800 text-center font-semibold'>
									An unknown error occurred!
								</span>
							</span>
						)}
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<div className=' w-full flex gap-2 items-center justify-center'>
						<Button
							disabled={!signUpError}
							className={`w-[7rem] border border-neutral-600 delay-250 hover:border-neutral-200  ${
								signUpError && "border-neutral-400"
							}`}
							onClick={handleBackBtnClick}
						>
							Back
						</Button>
						<Button
							disabled={!signUpSuccess}
							className={`w-[7rem] border border-neutral-600 delay-250 hover:border-neutral-200 p-0 m-0  ${
								signUpSuccess && "border-neutral-400"
							}`}
							onClick={handleSignInBtnClick}
						>
							<Link href='/sign-in' className='b h-full w-full  flex items-center justify-center'>
								Sign in
							</Link>
						</Button>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
