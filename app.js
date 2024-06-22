import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/dB/connect.js'
import appRoutes from './src/routes/index.js'
import notFound from './src/middleware/not-found.js'
import errorHandler from './src/middleware/error-handler.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.static('./public'))
app.use(cors())
app.use(express.json())

// Routes
app.use(appRoutes)
app.use(notFound)
app.use(errorHandler)

// Spin the server
const start = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables')
        }
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.error('Failed to start the server:', error)
    }
}

start()
