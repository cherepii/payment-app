import Image from 'next/image'
import { FC } from 'react'

import Form from '@components/form/Form'

import paymentBanner from '@assets/payment_banner.jpg'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
	return (
		<div className={styles.content}>
			<div className={styles.imageBlock}>
				<Image
					src={paymentBanner}
					draggable={false}
					layout="fill"
					priority
					alt="Payment"
				/>
			</div>
			<Form />
		</div>
	)
}
export default HomePage
