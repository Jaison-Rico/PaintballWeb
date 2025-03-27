import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="card-body">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="Ingrese su email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
              />
            </div>

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
