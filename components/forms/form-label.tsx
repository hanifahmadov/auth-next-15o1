import { BiErrorCircle } from "react-icons/bi";
import { IoIosFingerPrint } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";

interface FormErrorProps {
	username: boolean;
	email: boolean;
	pwd: boolean;
	signin?: boolean;
	message?: string;
}

export const FormLabel = ({ signin, username, email, pwd, message }: FormErrorProps) => {
	if (message) {
		return (
			<div className='flex justify-start items-center gap-1 pl-1 text-red-500 translate-y-1'>
				<span>
					<BiErrorCircle className='text-base' />
				</span>
				<span className='text-sm'>{message}</span>
			</div>
		);
	}

	return (
		<div className='flex justify-start items-center gap-1 pl-1 text-gray-500 translate-y-1'>
			<span>
				{username && <FiUser className='text-base' />}
				{email && <MdAlternateEmail className='text-base' />}
				{pwd && <IoIosFingerPrint className='text-base' />}
			</span>
			<span className='text-sm'>
				{username ? (signin ? "Username or Email Address" : "Username") : ""}
				{email && "Email Address"}
				{pwd && "Password"}
			</span>
		</div>
	);
};
