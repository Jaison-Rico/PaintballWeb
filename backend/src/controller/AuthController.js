import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { findUserByEmail } from '../model/UserModel.js' 

export const loginUser = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { correo_electronico, contrasena } = req.body

  try {
    const user = await findUserByEmail(correo_electronico)

    if (!user) {
      return res.status(400).json({ msg: 'El usuario no existe' })
    }

    const isMatch = contrasena === user.contrasena; 
      if (!isMatch) {
        return res.status(400).json({ msg: 'Contraseña incorrecta' })
      }

    const payload = {
      user: {
        id: user.id_usuario,
      },
    }

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err
        res.json({ token })
      }
    )
  } catch (error) {
    console.error(error)
    res.status(500).send('Hubo un error en el servidor')
  }
}
