import { getAllP, addE, deleteE } from '../controller/EquiposController.js'
import express from 'express'
const routerEquipos = express.Router()

routerEquipos.get('/listarEquipos', getAllP)
routerEquipos.post('/insertarE', addE)
routerEquipos.delete('/:id_equipo', deleteE)


export default routerEquipos