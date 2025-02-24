import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

/* components */
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/forms/form-label";

/* api calls */
import { SignUpSchemaType } from "@/components/signup/signup_schema";

/* icons */
import { FaRegCircleCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

/* interface */
interface FormUsernameProps {
	form: UseFormReturn<SignUpSchemaType>;
	signUpErrorCode: number;
	username: string;
}

export const FormUsername = ({ form, signUpErrorCode, username }: FormUsernameProps) => {
	const [isUsernameValid, setIsUsernameValid] = useState(false);

	return (
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
							message={
								form.formState.errors.username?.message ||
								(field.value == username ? "This username is already taken" : undefined)
							}
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
									className={`bg-transparent 
												w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
												focus-visible:ring-gray-500
												placeholder-neutral-600 placeholder:pl-1
												p-5 tracking-wide
												${isUsernameValid && "bg-neutral-900"}
												${field.value == username ? "border border-red-600" : "border border-neutral-800"}
												`}
								/>

								{isUsernameValid ? (
									field.value !== username ? (
										<FaRegCircleCheck className='absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-base' />
									) : (
										<ImCross className='absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600 text-base' />
									)
								) : (
									""
								)}
							</div>
						</FormControl>
					</FormItem>
				)}
			/>
		</section>
	);
};
