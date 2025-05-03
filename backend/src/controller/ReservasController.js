import { getAllReservas } from "../model/ReservasModel.js"

const getAllR = async ( req, res ) => {
    
    try {
        const Reservas = await getAllReservas()
        res.json(Reservas)
    } catch (error) {
        
        res.status(500).json({message : error.message})
    }
}

export {getAllR}