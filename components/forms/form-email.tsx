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

interface FormUsernameProps {
	form: UseFormReturn<SignUpSchemaType>;
	signUpErrorCode: number;
	email: string;
}

export const FormEmail = ({ form, email, signUpErrorCode }: FormUsernameProps) => {
	const [isEmailValid, setIsEmailValid] = useState(false);

	return (
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
							message={
								form.formState.errors.email?.message ||
								(field.value == email ? "This email address is already taken" : undefined)
							}
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
									className={`bg-transparent 
														w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
														focus-visible:ring-gray-500
														placeholder-neutral-600 placeholder:pl-1
														p-5 tracking-wide
														${isEmailValid && "bg-neutral-900"} 
														${field.value == email ? "border border-red-600" : "border border-neutral-800"}
														`}
								/>

								{isEmailValid ? (
									field.value !== email ? (
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
