import { getAllR } from '../controller/ReservasController.js'
import express from 'express'
const routerReservas = express.Router()

routerReservas.get('/listarReservas', getAllR)


export default routerReservas