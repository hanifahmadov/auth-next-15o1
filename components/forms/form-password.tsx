import React, { useState } from "react";
import { FieldValues, UseFormReturn, Path } from "react-hook-form";

/* components */
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/forms/form-label";

/* icons */
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

// Constrain T so it definitely has a `pwd` property:
type FormPasswordProps<T extends FieldValues & { pwd: unknown }> = {
	form: UseFormReturn<T>;
	signin?: boolean;
};

export const FormPassword = <T extends FieldValues & { pwd: unknown }>({ form, signin }: FormPasswordProps<T>) => {
	const [isPwdValid, setIsPwdValid] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<section className='pwd w-full'>
			<FormField
				control={form.control}
				name={"pwd" as Path<T>}
				render={({ field }) => (
					<FormItem>
						<FormLabel
							signin
							username={false}
							email={false}
							pwd
							message={form.formState.errors.pwd?.message as string | undefined}
						/>
						<FormControl>
							<div className='relative w-full'>
								<Input
									{...field}
									type={showPassword ? "text" : "password"}
									placeholder={signin ? "Enter password" : "At least 5 characters"}
									autoComplete='off'
									onFocus={() => {
										setIsPwdValid(false);
									}}
									onBlur={() => {
										if (field.value.trim().length > 0) {
											form.trigger("pwd" as Path<T>).then(() => {
												if (!form.formState.errors.pwd) {
													setIsPwdValid(true);
												} else {
													setIsPwdValid(false);
												}
											});
										}
									}}
									className={`bg-transparent border border-neutral-800
                    							w-full focus-visible:ring-0 focus-visible:ring-offset-blue-500
                    							tracking-wide 
                   								 focus-visible:ring-gray-500
                    							placeholder-neutral-600 placeholder:pl-1
                    							p-5
                    							${isPwdValid && "bg-neutral-900"}
                  					`}
								/>

								{field.value.length > 0 && (
									<div
										className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer h-[70%] w-[25px] flex items-center justify-center'
										onClick={() => setShowPassword((prev) => !prev)}
									>
										{showPassword ? (
											<FaRegEye className='text-red-500 text-lg' />
										) : (
											<FaRegEyeSlash className=' text-green-500 text-lg' />
										)}
									</div>
								)}
							</div>
						</FormControl>
					</FormItem>
				)}
			/>
		</section>
	);
};
