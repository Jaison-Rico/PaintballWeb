import { getAllP, addE, deleteE, updateEquipt } from '../controller/EquiposController.js'
import express from 'express'
const routerEquipos = express.Router()

routerEquipos.get('/listarEquipos', getAllP)
routerEquipos.post('/insertarE', addE)
routerEquipos.delete('/:id_equipo', deleteE)
routerEquipos.put('/:id_equipo', updateEquipt)


export default routerEquipos