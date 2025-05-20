import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routerEquipos from './routes/EquiposRoute.js'
import routerReservas from './routes/ReservasRoute.js'
import authRoutes from './routes/AuthRoute.js'
import { getConnection } from './config/Connection.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/api/equipt', routerEquipos)
app.use('/api/reservs', routerReservas)
app.use('/api/auth', authRoutes)
app.listen(process.env.PORT, ()=>{
    console.log(`Conectado al puerto: ${process.env.PORT}`)
    getConnection
})
