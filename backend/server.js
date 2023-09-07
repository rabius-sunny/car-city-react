import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connection from './configs/db.js'

const app = express()

// Middlewares
dotenv.config()
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 6060
// Database Connetion
connection()

// Routes

// Listen the app
app.listen(PORT, () => console.log(`server is running on port= ${PORT}`))
