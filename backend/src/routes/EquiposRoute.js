import { getAllP } from '../controller/EquiposController.js'
import express from 'express'
const router = express.Router()

router.get('/listarEquipos', getAllP)


export default router