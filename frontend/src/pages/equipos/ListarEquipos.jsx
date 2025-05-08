import { useState, useEffect } from "react"; //useState nos permite definir una varibale que puede ir cambiando de valor y useEffect cada que pase eso nos renderiza la pagina
import { obtenerEquipo } from "../../services/equipoService"; //importamos la funcion que nos permite enlazarnos con el backend
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap"; // importador modal de react-bootstrap
import Swal from 'sweetalert2' 
import axios from "axios";

export default function ListarEquipos() {
  const [equipos, setEquipos] = useState([]); //definimos la variable equipos y la inicializamos en un arreglo vacio (porque vamos a traer una conexion a la base de datos y no sabemos cuantas filas va a traer)
  const [error, setError] = useState(""); //definimos la variable error y la inicializamos en un string vacio (porque no sabemos si va a haber error o no)
  const [equipo, setEquipo] = useState({
      nombre_equipo : '', //' ' para varchar, 0 para enteros
      cantidad_disponible : 0,
      precio : 0
  })
  const [showModal, setShowModal] = useState(false) //en false para que este cerrada hasta darle click

  useEffect(() => {
    //useEffect se ejecuta cada vez que la pagina se renderiza
    fetchEquipos(); //llamamos a la funcion fetchEquipos
  }, []); //el segundo argumento es un arreglo vacio, lo que significa que solo se ejecutara una vez cuando la pagina se renderiza por primera vez

  const fetchEquipos = async () => {
    try {
      const data = await obtenerEquipo(); // ya es el array de equipos
    //   console.log("Datos recibidos:", data);
      setEquipos(data);
    } catch (error) {
      console.error("Error al obtener equipos:", error);
      setError(error.message || "Error desconocido");
    }
  };

//   Funcion para editar
   const editar = (id) => {
     alert(`Estas editando el dato ${id}`);
  };

  const handleChanges = (e) => {
    setEquipo({...equipo, [e.target.name] : [e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault() //no se envia por defecto hace que el formulario se ejecute por logica
    axios.post('http://localhost:3001/insertarE', equipo)
    .then(response => {
      Swal.fire('Exitoso', 'Equipo Registrado', 'success')
      setShowModal(false)
      fetchEquipos()
    })

  }
  

  return (
      <Container>
        <br />
        <button className="form form-control btn btn-primary p-3" onClick={() => setShowModal(true)}>Registrar Equipo</button>
        <br />
        <h1 className="text-center mt-5 mb-5">Listado de Equipamientos</h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-primary text-center">
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((e, index) => (
                <tr key={e.id_equipo} className="text-center">
                  <td>{index + 1}</td>
                  <td>{e.nombre_equipo}</td>
                  <td>{e.cantidad_disponible}</td>
                  <td>{e.precio}</td>
                  <td>
                    <button className="text-body border-primary" onClick={() => editar(e.id_equipo)}>Editar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Registro de Equipos </Modal.Title>
            </Modal.Header>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChanges} name="nombre_equipo" placeholder="Equipo" className="form form-control" />
              <input onChange={handleChanges} name="cantidad_disponible" placeholder="Cantidad" className="form form-control" />
              <input onChange={handleChanges} name="precio" placeholder="Precio" className="form form-control" />
            <Modal.Footer>
              <button className="form form-control btn btn-primary" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="form form-control btn btn-primary" type="submit">Registrar</button>
            </Modal.Footer>
            </form>


          
        </Modal>    

      </Container>
  );
}
