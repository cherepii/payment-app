import { forwardRef } from 'react'

import styles from './Field.module.scss'
import { IField } from './field.types'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type = 'number', error, ...rest }, ref) => {
		return (
			<div className={styles.field}>
				<label>
					<div className={styles.flexItems}>
						<span>{placeholder}</span>
						{error && <span className={styles.error}>{error.message}</span>}
					</div>
					<input type={type} ref={ref} {...rest} />
				</label>
			</div>
		)
	}
)
export default Field
