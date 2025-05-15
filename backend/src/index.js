import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { getConnection } from './config/Connection.js'
import routerEquipos from './routes/EquiposRoute.js'
import routerReservas from './routes/ReservasRoute.js'
// const router = express.Router()
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/api/equipt', routerEquipos)
app.use('/api/reservs', routerReservas)
app.listen(process.env.PORT, ()=>{
    console.log(`Conectado al puerto: ${process.env.PORT}`)
    getConnection
})
// router.delete('/reservas/:id_reserva', (req, res ) => {
//     const { id_reserva } = req.params
//     try{
//     const con = getConnection
//     con.request()
//     .input('id_reserva', sql.Int, id_reserva)
//     execute('sp_eliminar_reserva')
//     res.status(201).json({message: 'Equipo eliminado.'})
//     }
//     catch (error) {
//         console.error('Error al eliminar reserva:', error);
//         res.status(500).json({message: error.message})
//     }
// })
// export default router