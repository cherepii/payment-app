import dotenv from 'dotenv'
import express from 'express'
import next from 'next'

import Card from './card.model.js'
import connectDB from './mongo.config.js'

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

dotenv.config()

connectDB()
const app = next({ dev })

const handle = app.getRequestHandler()

app
	.prepare()
	.then(() => {
		const server = express()

		server.use(express.json())

		server.post('/api/card', async (req, res) => {
			const { card, cvv, amount, date } = req.body

			const newCard = await Card.create({
				card,
				cvv,
				amount,
				date,
			})

			res.json({ transaction_id: newCard._id, amount: newCard.amount })
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(PORT, (err) => {
			if (err) throw err
			console.log(`> Ready on port ${PORT}`)
		})
	})
	.catch((e) => {
		console.log(e)
		process.exit(1)
	})
