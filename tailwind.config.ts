import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {},
			borderRadius: {},
			keyframes: {
				flash: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" },
				},

				borderFlash: {
					"0%, 100%": { borderColor: "#525252" }, // neutral-600 is #525252
					"50%": { borderColor: "#ffffff" }, // white
				},
			},

			animation: {
				flash: "flash 1s infinite",
				borderFlash: "borderFlash 1s infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
