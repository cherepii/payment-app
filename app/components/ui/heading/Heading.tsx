import { FC } from 'react'

import styles from './Heading.module.scss'

type HeadingProps = React.ComponentPropsWithoutRef<'h1'>

interface IHeading extends HeadingProps {
	title: string
	subTitle?: string
}

const Heading: FC<IHeading> = ({ title, subTitle, ...rest }) => {
	return (
		<>
			<h1 className={styles.heading} {...rest}>
				{title}
			</h1>
			{subTitle && <span className={styles.subHeading}>{subTitle}</span>}
		</>
	)
}
export default Heading
