import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CardService } from 'services/card.service'

import Button from '@components/ui/button/Button'
import Field from '@components/ui/field/Field'
import Heading from '@components/ui/heading/Heading'

import styles from './Form.module.scss'
import FormFields from './FormFields'
import { IFormInputs } from './form.interface'

const Form: FC = () => {
	const { formState, handleSubmit, register, resetField } =
		useForm<IFormInputs>({
			mode: 'onChange',
		})
	const { errors, isDirty, isValid } = formState

	const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
		const res = await CardService.postCard(data)

		const { transaction_id, amount } = res.data

		if (transaction_id && amount)
			alert(
				`Current transaction id: ${transaction_id}\nYour entered amount is: ${amount}`
			)

		resetField('amount')
		resetField('card')
		resetField('cvv')
		resetField('date')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Heading
				title="Welcome to payment app"
				subTitle="Come on and send your card data"
			/>
			<div className={styles.formElements}>
				<FormFields formState={formState} register={register} />
				<div className={styles.formButton}>
					<Button disabled={errors && (!isDirty || !isValid)} type="submit">
						Send
					</Button>
				</div>
			</div>
		</form>
	)
}
export default Form
