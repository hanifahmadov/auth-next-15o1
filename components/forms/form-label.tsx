import { BiErrorCircle } from "react-icons/bi";
import { IoIosFingerPrint } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";

interface FormErrorProps {
	username: Boolean;
	email: Boolean;
	pwd: Boolean;
	signin?: Boolean;
	message?: string;
}

export const FormLabel = ({ signin, username, email, pwd, message }: FormErrorProps) => {
	if (message) {
		return (
			<div className='flex justify-start items-center gap-1 pl-1 text-red-500 translate-y-1'>
				<span>
					<BiErrorCircle className='text-[14px]' />
				</span>
				<span className='text-[12px]'>{message}</span>
			</div>
		);
	}

	return (
		<div className='flex justify-start items-center gap-1 pl-1 text-gray-500 translate-y-1'>
			<span>
				{username && <FiUser className='text-[14px]' />}
				{email && <MdAlternateEmail className='text-[14px]' />}
				{pwd && <IoIosFingerPrint className='text-[14px]' />}
			</span>
			<span className='text-[12px]'>
				{username ? (signin ? "Username or Email Address" : "Username") : ""}
				{email && "Email Address"}
				{pwd && "Password"}
			</span>
		</div>
	);
};
