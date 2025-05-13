import {sql, getConnection } from "../config/Connection.js";

const getAllReservas = async ()=>{
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM Reservas')//crear sp para reservas
    return result.recordset
}

const addReserva = async (reserva)=>{
    const {} = reserva
    const con = await getConnection
    await con.request()
    .input()
    .input()
    .intup()
    .execute()
}

export { getAllReservas, addReserva }