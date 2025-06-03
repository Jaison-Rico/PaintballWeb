import { Router } from 'express'
import { loginUser, registerUser } from '../controller/AuthController.js'
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

router.post('/register', 
  [
    check('nombre', 'Campo nombre es obligatorio').not().isEmpty(),
    check('documento_identidad', 'Campo documento es obligatorio').not().isEmpty(),
    check('correo_electronico', 'Campo correo es obligatorio').isEmail(),
    check('telefono', 'Campo telefono es obligatorio').not().isEmpty(),
    check('direccion', 'Campo direccion es obligatorio').not().isEmpty(),
    check('contrasena', 'Campo contraseña es obligatorio').not().isEmpty(),
  ],
  registerUser)

export default router