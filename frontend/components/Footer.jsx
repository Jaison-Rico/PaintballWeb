import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="container mt-3">
        <footer>
          <div
            className="container-fluid "
            style={{ backgroundColor: "#EFF2D8" }}
          >
            <div className="row p-5 pe-1 ">
              <div className="col-md-6 col-xs-12 col-lg-4 ">
                <p className="h5 pb-3">Paintball Medellin</p>
                <div>
                  <p className="text-secondary pb-2">
                    Paintball Medellín ofrece experiencias de paintball llenas
                    de adrenalina en escenarios estratégicos. Diversión segura
                    para amigos, empresas y eventos.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 col-lg-4">
                <p className="h5 pb-3 ">Explora</p>
                <div>
                  <p>
                    <Link
                      to="/"
                      className="text-secondary text-decoration-none"
                    >
                      Inicio
                    </Link>
                  </p>
                </div>
                <div>
                  <p>
                    <Link
                      to="/Products"
                      className="text-secondary text-decoration-none"
                    >
                      Reservar
                    </Link>
                  </p>
                </div>
                <div>
                  <p>
                    <Link
                      to="/Login"
                      className="text-secondary text-decoration-none"
                    >
                      Login
                    </Link>
                  </p>
                </div>
                <div>
                  <p>
                    <Link
                      to="/Register"
                      className="text-secondary text-decoration-none"
                    >
                      Registrarse
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 col-lg-4  ">
                <p className="h5 pb-3">Contactos</p>
                <div className="d-flex ">
                  <img
                    src="/telefono.png"
                    alt=""
                    className="me-2 "
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p className="text-secondary ">+57 3008867588</p>
                </div>
                <img
                  src="/facebook.png"
                  alt=""
                  className="me-3 "
                  style={{ width: "30px", height: "30px" }}
                />
                <img
                  src="/instagram.png"
                  alt=""
                  className="me-3 "
                  style={{ width: "30px", height: "30px" }}
                />
                <img
                  src="/github.png"
                  alt=""
                  className="me-3 "
                  style={{ width: "30px", height: "30px" }}
                />
                <img
                  src="/whatsapp.png"
                  alt=""
                  className="me-2 "
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
            </div>
            <div>
              <p className="text-white text-center pb-4">
                &copy; 2025 Paintball Medellin - Todos los derechos reservados
              </p>
            </div>
          </div>
        </footer>
      </div>
         
    </div>
  );
}
