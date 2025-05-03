import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from './config/Connection.js'
import routerEquipos from './routes/EquiposRoute.js'
import routerReservas from './routes/ReservasRoute.js'
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/', routerEquipos)
app.use('/', routerReservas)
app.listen(process.env.PORT, ()=>{
    console.log(`Conectado al puerto: ${process.env.PORT}`)
    getConnection
}) 