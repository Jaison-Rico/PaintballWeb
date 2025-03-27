import React from "react";

export default function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-lg"
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

          <form>
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
              />
            </div>

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
          </form>
        </div>
      </div>
    </div>
  );
}
