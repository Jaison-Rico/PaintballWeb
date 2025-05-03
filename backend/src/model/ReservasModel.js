import { getConnection } from "../config/Connection.js";

const getAllReservas = async ()=>{
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM Reservas')
    return result.recordset
}

export { getAllReservas }