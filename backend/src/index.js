import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { clienteRouter } from './routes/cliente.routes.js'
import { pedidoRouter } from './routes/pedido.routes.js'
const app = express()
const PORT = process.env.PORT || 5000

// Aui van las rutas
app.use(cors())
app.use(json())

app.use('/api', clienteRouter)
app.use('/api', pedidoRouter)
app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL_DEV, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to MongoDB', mongoose.connection.name)
  } catch (error) {
    console.log(error)
  }
  console.log(`Server started on port ${PORT}`)
})
