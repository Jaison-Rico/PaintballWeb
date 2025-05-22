import { useState, useEffect } from "react"; //useState nos permite definir una variable que puede ir cambiando de valor y useEffect cada que pase eso nos renderiza la página
import { obtenerEquipo } from "../../services/equipoService"; //importamos la función que nos permite enlazarnos con el backend
import { Container, Modal } from "react-bootstrap"; // importador modal de react-bootstrap
import Swal from 'sweetalert2' 
import axios from "axios";

export default function ListarEquipos() {
  const [equipos, setEquipos] = useState([]); //definimos la variable equipos y la inicializamos en un arreglo vacío (porque vamos a traer una conexión a la base de datos y no sabemos cuántas filas va a traer)
  const [error, setError] = useState(""); //definimos la variable error y la inicializamos en un string vacío (porque no sabemos si va a haber error o no)
  const [equipo, setEquipo] = useState({
      nombre_equipo : '', //' ' para varchar, 0 para enteros
      cantidad_disponible : 0,
      precio : 0
  })
  const [showModal, setShowModal] = useState(false) //en false para que esté cerrado hasta darle click
  const [modoEdicion, setModoEdicion] = useState(false) //en false para que no se pueda editar hasta darle click

  // VARIABLES DE PAGINACIÓN
  const [paginaActual, setPaginaActual] = useState(1); // Página actual, inicia en 1
  const equiposPorPagina = 5; // Número de elementos que se mostrarán por página

  useEffect(() => {
    //useEffect se ejecuta cada vez que la página se renderiza
    fetchEquipos(); //llamamos a la función fetchEquipos
  }, []); //el segundo argumento es un arreglo vacío, lo que significa que solo se ejecutará una vez cuando la página se renderiza por primera vez

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

// //   Funcion para editar
//    const editar = (id) => {
//      alert(`Estas editando el dato ${id}`);
//   };

  const handleChanges = (e) => {
    //actualiza los campos del formulario a medida que se escriben
    setEquipo({...equipo, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    //no se envía por defecto hace que el formulario se ejecute por lógica
    e.preventDefault()
    axios.post('http://localhost:3001/api/equipt/insertarE', equipo)
    .then(response => {
      Swal.fire('Exitoso', 'Equipo Registrado', 'success')
      setShowModal(false)
      fetchEquipos()
    })
  }



  const handleEliminar = (id_equipo) =>{
    //lógica para eliminar un equipo con confirmación
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/api/equipt/${id_equipo}`)
        .then(()=>{
          Swal.fire("¡Eliminado!", "El equipo ha sido eliminado.", "success");
          fetchEquipos()
        })
        .catch(error => console.log (error))
      }
    });
  }

  // Abrir modal con datos del equipo a editar
  const abrirModalEditar = (equipoSeleccionado) => {
    setEquipo(equipoSeleccionado)
    setModoEdicion(true)
    setShowModal(true)
  };

  const handleEditar = (id_equipo) => {
    // lógica para editar
    if (!equipo.nombre_equipo) {
        Swal.fire("Error", "El nombre del equipo no puede estar vacío", "error");
        return
    }
    axios.put(`http://localhost:3001/api/equipt/${id_equipo}`, equipo)
    .then(response => {
      Swal.fire('Exitoso', 'Equipo Editado', 'success')
      setShowModal(false)
      fetchEquipos()
    })
    .catch(error => {
      console.error("Error al editar el equipo:", error);
      setError(error.message || "Error desconocido");
    })
  }

  // LÓGICA PARA PAGINACIÓN
  const indiceUltimoEquipo = paginaActual * equiposPorPagina; // ejemplo: 1 * 5 = 5
  const indicePrimerEquipo = indiceUltimoEquipo - equiposPorPagina; // ejemplo: 5 - 5 = 0
  const equiposActuales = equipos.slice(indicePrimerEquipo, indiceUltimoEquipo); //corta el array de equipos
  const totalPaginas = Math.ceil(equipos.length / equiposPorPagina); // redondea hacia arriba para saber cuántas páginas mostrar

  const cambiarPagina = (nuevaPagina) => {
    //cambia la página actual si está en el rango válido
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
      <Container>
        <br />
        <button className="form form-control btn btn-primary p-3" onClick={() => {
          setEquipo({ nombre_equipo: '', cantidad_disponible: 0, precio: 0 })
          setModoEdicion(false)
          setShowModal(true)
        }}>Registrar Equipo</button>
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
            {equiposActuales.map((e) => (
                <tr key={e.id_equipo} className="text-center">
                  <td>{e.id_equipo}</td>
                  <td>{e.nombre_equipo}</td>
                  <td>{e.cantidad_disponible}</td>
                  <td>{e.precio}</td>
                  <td scope="row">
                    <button onClick={() => abrirModalEditar(e)} className="text-body btn btn-warning m-1">Editar</button>
                    <button onClick={() => handleEliminar(e.id_equipo)} className="text-body btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        {/* Controles de paginación */}
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-secondary mx-1" onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
            Anterior
          </button>
          {[...Array(totalPaginas)].map((_, index) => (
            <button key={index} className={`btn mx-1 ${paginaActual === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => cambiarPagina(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button className="btn btn-secondary mx-1" onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
            Siguiente
          </button>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{modoEdicion ? 'Editar Equipo' : 'Registrar Equipo'}</Modal.Title>
            </Modal.Header>
            <form onSubmit={(e) => {
              e.preventDefault()
              if (modoEdicion) {
                handleEditar(equipo.id_equipo)
              }else {
                handleSubmit(e)
              }
            }}>
              <input onChange={handleChanges} name="nombre_equipo" placeholder="Equipo" className="form form-control" value={equipo.nombre_equipo} />
              <input onChange={handleChanges} name="cantidad_disponible" placeholder="Cantidad" className="form form-control" value={equipo.cantidad_disponible}/>
              <input onChange={handleChanges} name="precio" placeholder="Precio" className="form form-control" value={equipo.precio}/>
            <Modal.Footer>
              <button className="form form-control btn btn-secondary" type="button" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="form form-control btn btn-primary" type="submit">{modoEdicion ? "Guardar Cambios" : "Registrar"}</button>
            </Modal.Footer>
            </form>
        </Modal>    

      </Container>
  );
}
