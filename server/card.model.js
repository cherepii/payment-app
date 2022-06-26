import mongoose from 'mongoose'

const cardModel = mongoose.Schema(
	{
		card: { type: Number, required: true },
		cvv: { type: Number, required: true },
		amount: { type: Number, required: true },
		date: { type: String, required: true },
	},
	{
		minimize: false,
		timestamps: true,
	}
)

const Card = mongoose.model('Card', cardModel)

export default Card
