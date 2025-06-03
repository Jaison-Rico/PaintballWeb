import React from "react";
import backgroundImage from "/bg.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Register() {

const navigate = useNavigate();
const [error, setError] = useState("") //definimos la variable error y la inicializamos en un string vacío (porque no sabemos si va a haber error o no)
const [usuario, setUsuario] = useState({
  nombre: '', // ' ' para varchar, 0 para enteros
  documento_identidad: '',
  correo_electronico: '',
  telefono: '',
  direccion: '',
  contrasena: ''
})


const handleChanges = (e) => {
  setUsuario({...usuario, [e.target.name] : e.target.value })
}

const handleSubmit = async (e) => {
  e.preventDefault()

  console.log('Datos enviados al backend:', usuario); 

  try {
    const response = await axios.post('http://localhost:3001/api/auth/register', usuario)
    console.log('Usuario registrado', response.data)
    setError("") // Si el registro es exitoso, limpiamos el error
    setUsuario({
      nombre: '',
      documento_identidad: '',
      correo_electronico: '',
      telefono: '',
      direccion: '',
      contrasena: ''
    }) // Limpiamos el formulario después del registro exitoso

    setTimeout(() => {
      navigate('/login'); // Cambia '/login' por la ruta deseada
    }, 2000);
    
  } catch (error) {
    setError(error.response?.data?.message || "Error al registrar el usuario");
    console.error('Error al registrar el usuario:', error);
  }

}



  return (
    <div className="d-flex justify-content-center align-items-center bg-light  mt-5 mb-5" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}>
      
      <div
        className="card p-4 shadow-lg "
        style={{
          maxWidth: "400px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <div className="card-body">
          <h2 className="text-center mb-4">Registro</h2>

            {/* Mostrar mensaje de error si existe */}
            {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}> 
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                name="nombre"
                value={usuario.nombre}
                onChange={handleChanges}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Documento de Identidad</label>
              <input
                type="text"
                className="form-control"
                name="documento_identidad"
                placeholder="Ingrese su documento de Identidad"
                value={usuario.documento_identidad}
                onChange={handleChanges}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo Electronico</label>
              <input
                type="email"
                className="form-control"
                name="correo_electronico"
                placeholder="Ingrese su correo electronico"
                value={usuario.correo_electronico}
                onChange={handleChanges}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input
                type="text"
                className="form-control"
                name="telefono"
                placeholder="Ingrese su telefono"
                value={usuario.telefono}
                onChange={handleChanges}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                name="direccion"
                placeholder="Ingrese su dirección"
                value={usuario.direccion}
                onChange={handleChanges}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="contrasena"
                placeholder="Ingrese su contraseña"
                value={usuario.contrasena}
                onChange={handleChanges}
                required
              />
            </div>

            

            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#2C3E50",
                color: "#fff",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Registrarse
            </button>
              <div className="text-center mt-3">
                <a style={{ color: "#2C3E50", border: "none", textDecoration: "none" }} href="/Login">¿Ya tienes una cuenta? Iniciar sesión</a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
