import React from "react";

/* interface */
interface FormProps {
	children?: React.ReactNode;
	title: string;
	linkText: string;
	linkHref: string;
	footer?: string;
	showSocials: boolean;
}

export const Form = ({ children, title, linkHref, linkText, footer, showSocials }: FormProps) => {
	return <div>{children}</div>;
};
