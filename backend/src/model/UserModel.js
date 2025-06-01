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
export const addUser = async (usuario) => {
  try {
    const { nombre, documento_identidad, correo_electronico, telefono, direccion, contrasena, rol='usuario' } = usuario
    const pool = await getConnection
    const result = await pool
      .request()
      .input('nombre', sql.VarChar, nombre)
      .input('documento_identidad', sql.VarChar, documento_identidad)
      .input('correo_electronico', sql.VarChar, correo_electronico)
      .input('telefono', sql.VarChar, telefono)
      .input('direccion', sql.VarChar, direccion)
      .input('contrasena', sql.VarChar, contrasena)
      //.input('rol', sql.VarChar, rol)
      .execute('AgregarUsuarios')
      if (result.rowsAffected && result.rowsAffected[0] > 0) {
        return true; // Indica que el usuario fue añadido exitosamente
      } else {
        // Esto podría indicar que el SP se ejecutó pero no insertó filas,
        // lo cual podría ser un problema lógico en el SP o una condición no esperada.
        console.warn('El procedimiento AgregarUsuarios no afectó ninguna fila.');
        return false;
      }
    } catch (error) {
      console.error('Error al agregar usuario en la base de datos:', error);
      throw error; // Propaga el error para que el controlador lo capture y lo maneje
    }

}


