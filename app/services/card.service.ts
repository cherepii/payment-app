import { instance } from 'api/instance'

import { IFormInputs } from '@components/form/form.interface'

import { ICardResponse } from './cardResponse.interface'

export const CardService = {
	async postCard(data: IFormInputs) {
		return await instance.post<ICardResponse>('/card', data)
	},
}
