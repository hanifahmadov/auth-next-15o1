import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

/* components */
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/forms/form-label";

/* api calls */
import { SignInSchemaType } from "@/components/signin/signin_schema";

interface SignInUsernameProps {
	form: UseFormReturn<SignInSchemaType>;
	username: string;
}

export const SignInUsername = ({ form, username }: SignInUsernameProps) => {
	return (
		<section className='signin-username w-full'>
			<FormField
				control={form.control}
				name='username'
				render={({ field }) => (
					<FormItem>
						<FormLabel
							signin={true}
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
									placeholder='john-doe@gmail.com'
									autoComplete='off'
									autoFocus={true}
									className={`bg-transparent border border-neutral-800
												w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
												focus-visible:ring-gray-500
												placeholder-neutral-700 placeholder:pl-1 placeholder:tracking-wider
												p-5 tracking-wide
												`}
								/>
							</div>
						</FormControl>
					</FormItem>
				)}
			/>
		</section>
	);
};
