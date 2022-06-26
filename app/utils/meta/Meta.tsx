import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

interface IProps {
	children: React.ReactNode
	title: string
	description?: 'This is simple payment app, that use express backend, mongodb database, and Nextjs UI'
}

const Meta: FC<PropsWithChildren<IProps>> = ({
	children,
	title,
	description,
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headline">Payment | {title}</title>
				{description && (
					<meta
						name="description"
						itemProp="description"
						content={description}
					/>
				)}
				<link rel="canonical" href={currentUrl} />
				<meta property="og:locale" content="en" />
				<meta property="og:title" content={`Payment ${title}`} />
				<meta property="og:url" content={currentUrl} />
			</Head>
			{children}
		</>
	)
}
export default Meta
