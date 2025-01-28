import React from "react";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div
			className='sm:w-[25rem] sm:min-h-[25rem]
                        flex flex-col justify-center items-center 
                        border border-neutral-800 rounded-xl p-5 py-10
                        '
		>
			{children}
		</div>
	);
};

export default AuthLayout;
