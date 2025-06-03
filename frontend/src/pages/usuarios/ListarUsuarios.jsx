import { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";
import Swal from 'sweetalert2';
import axios from "axios";

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({
    nombre: '',
    documento_identidad: '',
    correo_electronico: '',
    telefono: '',
    direccion: '',
    rol: 'usuario'
  });
  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const handleChanges = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/usuarios', usuario);
      Swal.fire('Exitoso', 'Usuario Registrado', 'success');
      setShowModal(false);
      fetchUsuarios();
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  const handleEliminar = (id_usuario) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/api/usuarios/${id_usuario}`)
          .then(() => {
            Swal.fire("Eliminado!", "El usuario ha sido eliminado.", "success");
            fetchUsuarios();
          });
      }
    });
  };

  const abrirModalEditar = (usuarioSeleccionado) => {
    setUsuario(usuarioSeleccionado);
    setModoEdicion(true);
    setShowModal(true);
  };

  const handleEditar = async (id_usuario) => {
    try {
      await axios.put(`http://localhost:3001/api/usuarios/${id_usuario}`, usuario);
      Swal.fire('Exitoso', 'Usuario Editado', 'success');
      setShowModal(false);
      fetchUsuarios();
    } catch (error) {
      console.error("Error al editar usuario:", error);
    }
  };

  return (
    <div>
      <Container>
        <br />
        
        <br />
        <h1 className="text-center mt-5 mb-5">Listado de Usuarios</h1>

        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-primary text-center">
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id_usuario} className='text-center'>
                <td>{u.id_usuario}</td>
                <td>{u.nombre}</td>
                <td>{u.correo_electronico}</td>
                <td>{u.rol}</td>
                <td>
                  <button onClick={() => abrirModalEditar(u)} className="btn btn-warning me-2">Editar</button>
                  <button onClick={() => handleEliminar(u.id_usuario)} className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{modoEdicion ? 'Editar Usuario' : 'Registrar Usuario'}</Modal.Title>
          </Modal.Header>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (modoEdicion) {
              handleEditar(usuario.id_usuario);
            } else {
              handleSubmit(e);
            }
          }}>
            <div className="m-3">
              <label>Nombre</label>
              <input name="nombre" className="form-control" value={usuario.nombre} onChange={handleChanges} required />
            </div>
            <div className="m-3">
              <label>Documento</label>
              <input name="documento_identidad" className="form-control" value={usuario.documento_identidad} onChange={handleChanges} required />
            </div>
            <div className="m-3">
              <label>Correo</label>
              <input name="correo_electronico" type="email" className="form-control" value={usuario.correo_electronico} onChange={handleChanges} required />
            </div>
            <div className="m-3">
              <label>Teléfono</label>
              <input name="telefono" className="form-control" value={usuario.telefono} onChange={handleChanges} required />
            </div>
            <div className="m-3">
              <label>Dirección</label>
              <input name="direccion" className="form-control" value={usuario.direccion} onChange={handleChanges} required />
            </div>
            <div className="m-3">
              <label>Rol</label>
              <select name="rol" className="form-control" value={usuario.rol} onChange={handleChanges}>
                <option value="usuario">Usuario</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={() => setShowModal(false)} type="button">Cancelar</button>
              <button className="btn btn-primary" type="submit">{modoEdicion ? 'Guardar Cambios' : 'Registrar'}</button>
            </Modal.Footer>
          </form>
        </Modal>
      </Container>
    </div>
  );
}
