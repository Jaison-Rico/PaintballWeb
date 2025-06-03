import axios from 'axios'; //me permite enlazarme con el backend

const api = 'http://localhost:3001/api/equipt/listarEquipos' //enlazando la ruta al servidor del backend y se almacena en la variable api

export const obtenerEquipo = async () => { //funcion asincrona que se encarga de listar los equipamentos
    const listadoEquipo = await axios.get(api) //se hace la peticion al servidor y se almacena en la variable listadoEquipo  
    return listadoEquipo.data //se retorna el listado de equipos
} 