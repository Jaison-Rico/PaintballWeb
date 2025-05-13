//tabla equipos
import { getAllEquipos, addEquipo, deleteEquipo } from "../model/EquiposModel.js"

const getAllP = async ( req, res ) => {
    
    try {
        const Equipos = await getAllEquipos()
        res.json(Equipos)
    } catch (error) {
        
        res.status(500).json({message : error.message})
    }
}

const addE = async (req, res) =>{
    try {
        await addEquipo(req.body)//Sirve para llamar el componente de React
        res.status(201).json({message: 'Equipo registrado.'})
    } catch (error) {

        res.status(500),json({message: error.message})
    }

}


const deleteE = async (req, res) =>{
    try {
        await deleteEquipo(req.params)//Sirve para llamar el componente de React
        res.status(201).json({message: 'Equipo eliminado.'})
    } catch (error) {

        res.status(500),json({message: error.message})
    }

}
export {getAllP, addE, deleteE}