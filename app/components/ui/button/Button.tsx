import cn from 'classnames'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const Button: FC<PropsWithChildren<IProps>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button {...rest} className={cn(styles.button, className)}>
			{children}
		</button>
	)
}
export default Button
