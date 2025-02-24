/* npm packages */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/* interfaces */
interface FooterProps {
	footerContent: string;
	footerLinkContent: string;
	footerLinkHref: string;
}

/* footer  */
export const Footer = ({ footerContent, footerLinkContent, footerLinkHref }: FooterProps) => {
	const handleLinkClick = () => {
		
	};
	return (
		<div className=' flex flex-col gap-2 items-center justify-center'>
			<div>
				<span className='text-base'>{footerContent}</span>
			</div>
			<Link
				href={footerLinkHref}
				onClick={handleLinkClick}
				className='bg-neutral-900 border-0
                            font-semibold w-full rounded-md
							text-sm text-center text-neutral-100
							hover:bg-opacity-80 hover:border-transparent
							leading-[33px] py-[2px]'
			>
				{footerLinkContent}
			</Link>
		</div>
	);
};
