import { useState, useEffect } from "react"; 
import { obtenerReservas } from "../../services/reservaService"; 
import { Container } from "react-bootstrap";

export default function ListarEquipos() {
  const [reservas, setReservas] = useState([]); 
  const [error, setError] = useState(""); 

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

  return (
    <div>
      <Container>
        <h1 className="text-center mt-5 mb-5">Listado de Reservas</h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-primary text-center">
              <th scope="col">#</th>
              <th scope="col">Campo Reservado</th>
              <th scope="col">Personas</th>
              <th scope="col">Tiempo</th>
              <th scope="col">Estado Reserva</th>

            </tr>
          </thead>
          <tbody>
          {reservas.map((r, index) =>
          <tr key={r.codigo_reserva} className='text-center'>
            <td>{index + 1}</td>
            <td scope="row">{r.campo_reservado}</td>
            <td scope="row">{r.numero_personas}</td>
            <td scope="row">{r.duracion_reserva}</td>
            <td scope="row">{r.estado_reserva}</td>
          </tr>
          )}
          </tbody>
        </table>
      </Container>
    </div>
  );

}