import { getAllR, addR, deleteR, updateReservs } from '../controller/ReservasController.js'
import express from 'express'
const router = express.Router()

router.get('/listarReservas', getAllR)
router.post('/insertarR', addR)
router.delete('/:id_reserva', deleteR)
router.put('/:id_reserva', updateReservs)


export default router