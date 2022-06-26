import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IProps {
	placeholder: string
	error?: FieldError | null
}

type TypeField = InputHTMLAttributes<HTMLInputElement> & IProps

export interface IField extends TypeField {}
