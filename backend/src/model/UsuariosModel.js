import { getConnection } from "../config/Connection.js";

const getAllUsuarios = async ()=>{
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM Usuarios')
    return result.recordset
}

export { getAllUsuarios }