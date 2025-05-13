import { sql, getConnection } from "../config/Connection.js";

const getAllEquipos = async ()=>{
    const con = await getConnection
    const result = await con.request().execute('sp_listar_equipamientos')
    return result.recordset
}

const addEquipo = async (equipo) =>{
    const {nombre_equipo, cantidad_disponible, precio} = equipo
    const con = await getConnection
    await con.request()
    .input('nombre_equipo', sql.VarChar, nombre_equipo)
    .input('cantidad_disponible', sql.Int, cantidad_disponible)
    .input('precio', sql.Int, precio)
    .execute('sp_insertar_equipo')
}


const deleteEquipo = async (equipo) =>{
    const {id_equipo} = equipo
    const con = await getConnection
    await con.request()
    .input('id_equipo', sql.Int, id_equipo)
    .execute('sp_eliminar_equipo')
}


// const editEquipo = async (id_equipo, nombre_equipo) =>{
//     const {nombre_equipo, cantidad_disponible, precio} = equipo
//     const con = await getConnection
//     await con.request()
//     .input('id_equipo', sql.Int, id_equipo)
//     .input('nombre_equipo', sql.VarChar, nombre_equipo)
//     .input('cantidad_disponible', sql.Int, cantidad_disponible)
//     .input('precio', sql.Int, precio)
//     .execute('sp_editar_equipo')
// }

export { getAllEquipos, addEquipo, deleteEquipo }