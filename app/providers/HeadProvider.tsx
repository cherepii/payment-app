import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { themeColor } from '@constants/index'

interface IHead {
	children: React.ReactNode
}

const HeadProvider: FC<PropsWithChildren<IHead>> = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<meta name="theme-color" content={themeColor} />
				<meta name="msapplication-navbutton-color" content={themeColor} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={themeColor}
				/>
			</Head>
			{children}
		</>
	)
}
export default HeadProvider
