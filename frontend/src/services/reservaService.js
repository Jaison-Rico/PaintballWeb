import axios from 'axios'; 

const api = 'http://localhost:3001/listarReservas' 

export const obtenerReservas = async () => { 
    const listadoReservas = await axios.get(api)  
    return listadoReservas.data 
} 