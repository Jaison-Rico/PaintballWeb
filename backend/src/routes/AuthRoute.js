import { Router } from 'express'
import { loginUser } from '../controller/AuthController.js'
import { check } from 'express-validator'

const router = Router()

router.post(
  '/login',
  [
    check('correo_electronico', 'El correo es obligatorio').isEmail(),
    check('contrasena', 'La contraseña es obligatoria').not().isEmpty(),
  ],
  loginUser
)

export default router