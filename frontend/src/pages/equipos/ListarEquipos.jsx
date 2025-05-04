import { useState, useEffect } from "react"; //useState nos permite definir una varibale que puede ir cambiando de valor y useEffect cada que pase eso nos renderiza la pagina
import { obtenerEquipo } from "../../services/equipoService"; //importamos la funcion que nos permite enlazarnos con el backend
import { Container } from "react-bootstrap";

export default function ListarEquipos() {
  const [equipos, setEquipos] = useState([]); //definimos la variable equipos y la inicializamos en un arreglo vacio (porque vamos a traer una conexion a la base de datos y no sabemos cuantas filas va a traer)
  const [error, setError] = useState(""); //definimos la variable error y la inicializamos en un string vacio (porque no sabemos si va a haber error o no)

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

  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
}
