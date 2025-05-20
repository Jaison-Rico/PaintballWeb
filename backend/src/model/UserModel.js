import { getConnection, sql } from '../config/Connection.js'

export const findUserByEmail = async (correo_electronico) => {
  try {
    const pool = await getConnection
    const result = await pool
      .request()
      .input('correo', sql.VarChar, correo_electronico)
      .query('SELECT * FROM Usuarios WHERE correo_electronico = @correo')

    return result.recordset[0] || null
  } catch (error) {
    console.error('Error al buscar usuario por correo:', error)
    throw error
  }
}