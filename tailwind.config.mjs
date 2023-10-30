/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ['"america"', ...defaultTheme.fontFamily.serif],
			cond: ['"america-cond"', ...defaultTheme.fontFamily.serif],
			exp: ['"america-exp"', ...defaultTheme.fontFamily.serif],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
