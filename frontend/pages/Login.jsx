import { useState } from "react"
import { useNavigate } from "react-router-dom"
import backgroundImage from "/bg.png";

export default function Login() {

  const navigate = useNavigate()
  const [correo_electronico, setCorreo] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log("Enviando login con:", { correo_electronico, contrasena });
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          correo_electronico, contrasena }),
      })

      const data = await res.json()

      if (!res.ok) {
        return setError(data.msg || "Error al iniciar sesión")
      }

      // Guardar token en localStorage
      localStorage.setItem("token", data.token)

      // Redirigir al usuario al home o dashboard
      navigate("/")
    } catch (err) {
      setError("Error del servidor")
      console.error(err)
    }
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light img-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}>
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          {/* Formulario de inicio de sesión */}    
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="Ingrese su email"
                value={correo_electronico}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#2C3E50", color: "#fff", border: "none", }}>
              Ingresar
            </button>

            <div className="text-center mt-3" >
              <a style={{ color: "#2C3E50", border: "none", textDecoration: "none" }} href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
