import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGamepad,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 mt-5 custom-footer">
      <Container>
        <Row className="gy-4 text-center text-md-start">
          <Col md={4}>
            <h5 className="fw-bold text-white">Paintball Medellín</h5>
            <p className="text-white-50">
              Paintball Medellín ofrece experiencias llenas de adrenalina en
              escenarios estratégicos. Diversión segura para amigos, empresas y
              eventos.
            </p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold text-white">Explora</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Products"
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Reservar
                </Link>
              </li>
              <li>
                <Link
                  to="/Login"
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/Register"
                  className="text-white-50 text-decoration-none footer-link"
                >
                  Registrarse
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold text-white">Contactos</h5>
            <p className="d-flex text-white-50 align-items-center">
              <FaPhone className="me-2 text-white" /> +57 3008867588
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white fs-4 footer-icon">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-4 footer-icon">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-4 footer-icon">
                <FaGithub />
              </a>
              <a href="#" className="text-white fs-4 footer-icon">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-white fs-4 footer-icon">
                <FaGamepad />
              </a>
            </div>
          </Col>
        </Row>

        <div className="text-center text-white mt-4 pt-3 border-top border-light">
          &copy; 2025 Paintball Medellín - Todos los derechos reservados
        </div>
      </Container>

      {/* Estilos adicionales */}
      <style>
        {`
          .footer-link:hover {
            color: #f39c12;
            transition: 0.3s;
          }

          .footer-icon:hover {
            color: #f39c12;
            transition: 0.3s;
          }
        `}
      </style>
    </footer>
  );
}
