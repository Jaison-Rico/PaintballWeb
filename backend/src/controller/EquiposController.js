//tabla equipos
import { getAllEquipos } from "../model/EquiposModel.js"

const getAllP = async ( req, res ) => {
    
    try {
        const Equipos = await getAllEquipos()
        res.json(Equipos)
    } catch (error) {
        
        res.status(500).json({message : error.message})
    }
}

export {getAllP}