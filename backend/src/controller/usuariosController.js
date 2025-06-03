import sql from 'mssql'
import config from '../db/config.js'

import { findUserByEmail, addUser, deleteUser, updateUser} from "../model/UserModel.js"

// Listar usuarios
export const getUsuarios = async (req, res) => {
  try {
    const pool = await sql.connect(config)
    const result = await pool.request().query('SELECT * FROM Usuarios')
    res.json(result.recordset)
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.status(500).send('Error al obtener usuarios')
  }
}

// Editar usuario
export const updateUsuario = async (req, res) => {
  const { id } = req.params
  const { nombre, documento_identidad, correo_electronico, telefono, direccion, rol } = req.body

  try {
    const pool = await sql.connect(config)
    await pool.request()
      .input('id_usuario', sql.Int, id)
      .input('nombre', sql.VarChar, nombre)
      .input('documento_identidad', sql.VarChar, documento_identidad)
      .input('correo_electronico', sql.VarChar, correo_electronico)
      .input('telefono', sql.VarChar, telefono)
      .input('direccion', sql.VarChar, direccion)
      .input('rol', sql.VarChar, rol)
      .query(`UPDATE Usuarios SET 
        nombre = @nombre,
        documento_identidad = @documento_identidad,
        correo_electronico = @correo_electronico,
        telefono = @telefono,
        direccion = @direccion,
        rol = @rol
        WHERE id_usuario = @id_usuario`)
    res.send('Usuario actualizado')
  } catch (error) {
    console.error('Error al actualizar usuario:', error)
    res.status(500).send('Error al actualizar usuario')
  }
}

// Eliminar usuario
export const deleteUsuario = async (req, res) => {
  const { id } = req.params

  try {
    const pool = await sql.connect(config)
    await pool.request()
      .input('id_usuario', sql.Int, id)
      .query('DELETE FROM Usuarios WHERE id_usuario = @id_usuario')
    res.send('Usuario eliminado')
  } catch (error) {
    console.error('Error al eliminar usuario:', error)
    res.status(500).send('Error al eliminar usuario')
  }
}
