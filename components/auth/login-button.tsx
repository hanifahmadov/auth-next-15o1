"use client";
/* NPM */
import React from "react";
import { useRouter } from "next/navigation";

/* interface  */
interface LoginButtonProps {
	children: React.ReactNode;
	mode?: "modal" | "redirect";
	asChild?: boolean;
}

/* LoginButton Component */
export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
	/* router */
	const router = useRouter();

	/* handle click */
	const handleClick = () => {
		router.push("/sign-in");
	};

	return mode == "modal" ? "modal" : <span onClick={handleClick}>{children}</span>;
};
