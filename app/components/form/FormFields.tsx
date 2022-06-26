import React, { ChangeEvent, FC, FormEvent } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@components/ui/field/Field'

interface IFormFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}

const FormFields: FC<IFormFields> = ({ formState: { errors }, register }) => {
	//forbid to enter no more than sat characters (limit)
	const handleInput = (e: FormEvent<HTMLInputElement>, limit: number) => {
		const currentValue = e.currentTarget.value
		if (currentValue.length > limit) {
			e.currentTarget.value = currentValue.slice(0, limit)
		}
	}

	return (
		<>
			<Field
				{...register('card', {
					required: 'is required',
					minLength: {
						value: 16,
						message: 'Must be 16 numbers',
					},
				})}
				defaultValue={1234567876543210}
				onInput={(e) => handleInput(e, 16)}
				error={errors.card}
				placeholder="Card number"
			/>

			<Field
				{...register('date', {
					required: 'is required',
					minLength: 7,
					pattern: {
						value: /([0-9]){2}\/([0-9]){4}/,
						message: 'Date must be MM/YYYY format',
					},
				})}
				defaultValue="11/2022"
				type="text"
				onInput={(e) => handleInput(e, 7)}
				placeholder="Expiration date (MM/YYYY)"
				error={errors.date}
			/>

			<Field
				{...register('cvv', {
					required: 'is required',
					minLength: {
						value: 3,
						message: 'Must be 3 numbers',
					},
				})}
				defaultValue={123}
				onInput={(e) => handleInput(e, 3)}
				placeholder="CVV"
				error={errors.cvv}
			/>

			<Field
				{...register('amount', {
					required: 'is required',
				})}
				placeholder="Amount"
				error={errors.amount}
			/>
		</>
	)
}
export default FormFields
