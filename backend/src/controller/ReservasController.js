import { getAllReservas, addReserva, deleteReserva } from "../model/ReservasModel.js"

const getAllR = async ( req, res ) => {
    
    try {
        const Reservas = await getAllReservas()
        res.json(Reservas)
    } catch (error) {
        
        res.status(500).json({message : error.message})
    }
}

const addR = async (req, res) =>{
    try{
        await addReserva(req.body)
        res.status(201).json({message: 'Reserva registrada'})
    }catch(error){
        console.error('Error al registrar reserva:', error);
        res.status(500).json({message: error.message})
    }
}

const deleteR = async (req, res) =>{
    try {
        await deleteReserva(req.params)
        res.status(201).json({message: 'Reserva eliminada.'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {getAllR, addR, deleteR}