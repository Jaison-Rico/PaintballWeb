import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { findUserByEmail } from '../model/UserModel.js' 
import { addUser } from '../model/UserModel.js'

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
        rol: user.rol
      },
    }

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err
        res.json({ token, user: {id:user.id_usuario, nombre: user.nombre, rol: user.rol} })
      }
    )
  } catch (error) {
    console.error(error)
    res.status(500).send('Hubo un error en el servidor')
  }
}

export const registerUser = async (req, res) => {
  const { nombre, documento_identidad, correo_electronico, telefono, direccion, contrasena, rol='usuario' } = req.body

    console.log('Datos recibidos en el controlador:', req.body);
  try {
    if (!nombre || !documento_identidad || !correo_electronico || !telefono || !direccion || !contrasena) {
      return res.status(400).json({ msg: 'Todos los campos son obligatorios' })
    }

    // Verificar si el correo ya está registrado
    const existingUser = await findUserByEmail(correo_electronico);
    if (existingUser) {
    return res.status(400).json({ message: 'El correo ya está siendo utilizado' });
   }

    const userAdded = await addUser({ nombre, documento_identidad, correo_electronico, telefono, direccion, contrasena, rol})
    if (userAdded){
      res.status(201).json({ message: 'Usuario registrado exitosamente'})
    }else {
      res.status(500).json({ message: 'Error al realizar el registro'})
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Hubo un error en el servidor')
  }



}
