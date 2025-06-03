import { useState, useEffect } from "react"; 
import { obtenerReservas } from "../../services/reservaService"; 
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap"; 
import Swal from 'sweetalert2' 
import axios from "axios";

export default function ListarEquipos() {
  const [reservas, setReservas] = useState([]); 
  const [error, setError] = useState(""); 
  const [reserva, setReserva] = useState({                
    fecha_reserva: '',             
    hora_inicio: 0,
    hora_fin: 0,              
    campo_reservado: '',           // 'Campo Envigado', 'Campo Bello', 'Campo Sabaneta'
    numero_personas: 0,            
    duracion_reserva: 0,           
    estado_reserva: '' 
  })
const [showModal, setShowModal] = useState(false)
const [modoEdicion, setModoEdicion] = useState(false)

  useEffect(() => {
   
    fetchReservas(); 
  }, []); 

  const fetchReservas = async () => {
    try {
      const data = await obtenerReservas(); 
      setReservas(data);
    } catch (error) {
      console.error("Error al obtener Reservas:", error);
      setError(error.message || "Error desconocido");
    }
  };

  const handleChanges = (e) => {
    setReserva({...reserva, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post('http://localhost:3001/api/reservs/insertarR', reserva)
    .then(response => {
      Swal.fire('Exitoso', 'Reserva Registrada', 'success')
      setShowModal(false)
      fetchReservas()
    })
    
  }

  const handleEliminar = (id_reserva) =>{
    console.log("loog de id",id_reserva)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/api/reservs/${id_reserva}`)
        .then(()=>{
        })
        .catch(error, console.log (error))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
      }
    })
  }

// Abrir modal con datos de la reserva a editar
const abrirModalEditar = (reservaSeleccionado) => {
  setReserva(reservaSeleccionado)
  setModoEdicion(true)
  setShowModal(true)
}

const handleEditar = (id_reserva) => {
  console.log("Editando Reserva:", reserva)
  if (!reserva.fecha_reserva) {
      Swal.fire("Error", "La fecha no puede estar vacia", "error");
      return
    }
  axios.put(`http://localhost:3001/api/reservs/${id_reserva}`, reserva)
  .then(response => {
    Swal.fire('Exitoso', 'Reserva Editada', 'success')
    setShowModal(false)
    fetchReservas()
  })
  .catch(error => {
    console.error("Error al editar la reserva:", error);
    setError(error.message || "Error desconocido");
  })
}

  return (
    <div>
      <Container>
        <br />
        <button className="form form-control btn btn-primary p-3" onClick={() => setShowModal(true)}>Registrar Reserva</button>
        <br />
        <h1 className="text-center mt-5 mb-5">Listado de Reservas</h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-primary text-center">
              <th scope="col">#</th>
              <th scope="col">Campo Reservado</th>
              <th scope="col">Personas</th>
              <th scope="col">Duración</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
          {reservas.map((r) =>
          <tr key={r.id_reserva} className='text-center'>
            <td scope="row">{r.id_reserva}</td>
            <td>{r.campo_reservado}</td>
            <td>{r.numero_personas}</td>
            <td>{r.duracion_reserva} h</td>
            <td>{r.estado_reserva}</td>
            <td scope="row">
              <button onClick={() => abrirModalEditar(r)} className="btn btn-warning me-2">Editar</button>
              <button onClick={() => handleEliminar(r.id_reserva)} className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
          )}
          </tbody>
        </table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{modoEdicion ? 'Editar Reserva' : 'Registrar Reserva'}</Modal.Title>
          </Modal.Header>

          <form onSubmit={(r) => {r.preventDefault()
            if (modoEdicion) {
              handleEditar(reserva.id_reserva)
            }
            else {
              handleSubmit(r)
            }
          }}>
            <div className="mb-2">
              <label>Fecha de Reserva</label>
              <input type="date"name="fecha_reserva"onChange={handleChanges}className="form form-control"required/>
            </div>

            <div className="mb-2">
              <label>Hora de Inicio Reserva</label>
              <input type="number"name="hora_inicio"onChange={handleChanges}className="form form-control"required value={reserva.hora_inicio}/>
            </div>
            <div className="mb-2">
              <label>Hora de Fin Reserva</label>
              <input type="number"name="hora_fin"onChange={handleChanges}className="form form-control"required value={reserva.hora_fin}/>
            </div>

            <div className="mb-2">
              <label>Campo Reservado</label>
              <select name="campo_reservado"onChange={handleChanges}className="form form-control"required value={reserva.campo_reservado}>
                <option value="">Seleccione un campo</option>
                <option value="Campo Envigado">Campo Envigado</option>
                <option value="Campo Bello">Campo Bello</option>
                <option value="Campo Sabaneta">Campo Sabaneta</option>
              </select>
            </div>

            <div className="mb-2">
              <label>Número de Personas</label>
              <input type="number"name="numero_personas"min="1"onChange={handleChanges}className="form form-control"required value={reserva.numero_personas}/>
            </div>

            {/* <div className="mb-2">
              <label>Duración (horas)</label>
              <input type="number"name="duracion_reserva"min="1"onChange={handleChanges}className="form form-control"required/>
            </div> */}

            <Modal.Footer>
              <button className="form form-control btn btn-secondary"onClick={() => setShowModal(false)}type="button">Cancelar</button>
              <button className="form form-control btn btn-primary" type="submit">{modoEdicion ? "Guardar Cambios" : "Registrar"}</button>
            </Modal.Footer>
          </form>
        </Modal>
      </Container>
    </div>
  );

}