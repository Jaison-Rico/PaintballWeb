import { getAllP } from '../controller/EquiposController.js'
import express from 'express'
const routerEquipos = express.Router()

routerEquipos.get('/listarEquipos', getAllP)


export default routerEquipos