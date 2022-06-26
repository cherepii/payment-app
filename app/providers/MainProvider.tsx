import { FC, PropsWithChildren } from 'react'

import Layout from '@components/layout/Layout'

import HeadProvider from './HeadProvider'

interface IProp {
	children: React.ReactNode
}

const MainProvider: FC<PropsWithChildren<IProp>> = ({ children }) => {
	return (
		<HeadProvider>
			<Layout>{children}</Layout>
		</HeadProvider>
	)
}
export default MainProvider
