/** @type {import('next').NextConfig} */
export const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		NODE_ENV: process.env.REACT_APP_NODE,
	},
}
