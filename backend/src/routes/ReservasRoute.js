import { getAllR, addR } from '../controller/ReservasController.js'
import express from 'express'
const routerReservas = express.Router()

routerReservas.get('/listarReservas', getAllR)
routerReservas.post('/insertarR', addR)


export default routerReservas