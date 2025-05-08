import { getAllP, addE } from '../controller/EquiposController.js'
import express from 'express'
const routerEquipos = express.Router()

routerEquipos.get('/listarEquipos', getAllP)
routerEquipos.post('/insertarE', addE)



export default routerEquipos