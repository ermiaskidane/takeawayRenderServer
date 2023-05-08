import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'

import { menus } from './data/menus.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import menuRoutes from './routes/menuRoutes.js'
import shopRoutes from './routes/shopRoutes.js'
import featureRoutes from './routes/featureRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/homeScreen', menuRoutes)

app.use('/api/shop', shopRoutes)

app.use('/api/feature', featureRoutes)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

// // Custom Error Handler for Routes does not exist
// app.use(notFound);

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
})

// // Custom Error handler
// app.use(errorHandler);

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

const PORT = process.env.PORT || 5001
app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}`)
)
