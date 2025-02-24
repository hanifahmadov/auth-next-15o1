"use-client";

/* icons */
import { BiErrorCircle } from "react-icons/bi";
import { IoIosFingerPrint } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";

/* types */
import { DocumentNotFoundErrorType } from "@/components/signin/signin_api";

interface FormErrorProps {
	signInErrorInfo: DocumentNotFoundErrorType;
	username: boolean;
	pwd: boolean;
}

export const SignInLabel = ({ signInErrorInfo, pwd, username }: FormErrorProps) => {
	/* retrieve the error properties */
	const { title, message } = signInErrorInfo;

	if (message) {
		return (
			<div className='flex justify-start items-center gap-1 pl-1 translate-y-1'>
				<span className='text-red-500'>
					<BiErrorCircle className='text-base' />
				</span>
				<div>
					<span className='text-sm bg-transparent text-red-600 font-bold mr-1 rounded'>{title}</span>
					<span className='text-sm text-red-500'>{message}</span>
				</div>
			</div>
		);
	}

	return (
		<div className='flex justify-start items-center gap-1 pl-1 text-gray-500 translate-y-1'>
			<span>
				{username && <FiUser className='text-base' />}
				{pwd && <IoIosFingerPrint className='text-base' />}
			</span>
			<span className='text-sm'>
				{username && "Username or Email Address"}
				{pwd && "Password"}
			</span>
		</div>
	);
};
