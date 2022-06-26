import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'

interface IProps {
	children: React.ReactNode
}

const Layout: FC<PropsWithChildren<IProps>> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}
export default Layout
