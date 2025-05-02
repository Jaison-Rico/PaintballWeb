import { getConnection } from "../config/Connection.js";

const getAllEquipos = async ()=>{
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM Equipos')
    return result.recordset
}

export { getAllEquipos }