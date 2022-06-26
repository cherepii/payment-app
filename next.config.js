/** @type {import('next').NextConfig} */
export const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_NODE: process.env.REACT_APP_NODE,
	},
}
