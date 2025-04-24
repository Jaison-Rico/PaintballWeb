//tabla producto
import { getAllUsuarios } from "../model/UsuariosModel"

const getAllP = async ( req, res ) => {
    
    try {
        const Usuarios = await getAllUsuarios
        res.json(Usuarios)
    } catch (error) {
        
        res.status(500).json({message : error.message})
    }
}

export {getAllP}