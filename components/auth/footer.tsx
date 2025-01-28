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
		<div className=' flex flex-col gap-2 items-center justify-center text-[16px]'>
			<div>
				<p className=''>{footerContent}</p>
			</div>
			<div className='flex gap-2 items-center justify-center border border-neutral-800 py-1 px-3 rounded-md hover:border-blue-500 font-medium cursor-pointer '>

				<Link href={footerLinkHref}>{footerLinkContent}</Link>
			</div>
		</div>
	);
};
