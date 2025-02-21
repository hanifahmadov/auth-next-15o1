/* npm packages */
import React from "react";
import Link from "next/link";

/* interfaces */
interface FooterProps {
	footerContent: string;
	footerLinkContent: string;
	footerLinkHref: string;
}

/* footer  */
export const Footer = ({ footerContent, footerLinkContent, footerLinkHref }: FooterProps) => {
	return (
		<div className=' flex flex-col gap-2 items-center justify-center'>
			<div>
				<p className='text-[12px]'>{footerContent}</p>
			</div>
			<Link
				href={footerLinkHref}
				className='flex gap-2 items-center justify-center 
							border border-neutral-800 rounded-md  py-1 px-3
							hover:border-blue-500 cursor-pointer text-[12px]
							'
			>
				{footerLinkContent}
			</Link>
		</div>
	);
};
