import express from 'express'
import { getUsuarios, updateUsuario, deleteUsuario } from '../controller/usuariosController.js'

const router = express.Router()

// Ver todos los usuarios
router.get('/', getUsuarios)

// Editar usuario
router.put('/:id', updateUsuario)

// Eliminar usuario
router.delete('/:id', deleteUsuario)

export default router
