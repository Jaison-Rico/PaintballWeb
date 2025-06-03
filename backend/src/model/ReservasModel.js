import {sql, getConnection } from "../config/Connection.js";

const getAllReservas = async ()=>{
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM Reservas')//crear sp para reservas
    return result.recordset
}

const addReserva = async (reserva)=>{
    console.log("este es el log", reserva)
    const {id_usuario, fecha_reserva, hora_inicio, hora_fin ,campo_reservado, numero_personas, duracion_reserva, estado_reserva} = reserva
    const con = await getConnection
    await con.request()
    .input('id_usuario', sql.Int, id_usuario)
    .input('fecha_reserva', sql.Date, fecha_reserva)
    .input('hora_inicio', sql.Int, hora_inicio)
    .input('hora_fin', sql.Int, hora_fin)
    .input('campo_reservado', sql.VarChar, campo_reservado)
    .input('numero_personas', sql.Int, numero_personas)
    .input('duracion_reserva', sql.Int, duracion_reserva)
    .input('estado_reserva', sql.VarChar, estado_reserva)
    .execute('sp_insertar_reserva');
}

const deleteReserva = async (reserva) =>{
    const {id_reserva} = reserva
    const con = await getConnection
    await con.request()
    .input('id_reserva', sql.Int, id_reserva)
    .execute('sp_eliminar_reserva')
}

const updateReserva = async (reserva) =>{
    console.log("Datos recibidos en modelo:", reserva)
    const {id_reserva, id_usuario, fecha_reserva, hora_inicio, hora_fin ,campo_reservado, numero_personas, duracion_reserva, estado_reserva} = reserva
    const con = await getConnection
    await con.request()
    .input('id_reserva', sql.Int, id_reserva)
    .input('id_usuario', sql.Int, id_usuario)
    .input('fecha_reserva', sql.Date, fecha_reserva)
    .input('hora_inicio', sql.Int, hora_inicio)
    .input('hora_fin', sql.Int, hora_fin)
    .input('campo_reservado', sql.VarChar, campo_reservado)
    .input('numero_personas', sql.Int, numero_personas)
    .input('duracion_reserva', sql.Int, duracion_reserva)
    .input('estado_reserva', sql.VarChar, estado_reserva)
    .execute('sp_actualizar_reserva')
}

export { getAllReservas, addReserva, deleteReserva, updateReserva}