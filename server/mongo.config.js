import mongoose from 'mongoose'

const connectDB = async function () {
	try {
		const conn = await mongoose.connect(process.env.DB_URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})

		console.log(`MongoDB connected at ${conn.connection.host}`)
	} catch (error) {
		console.log(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDB
