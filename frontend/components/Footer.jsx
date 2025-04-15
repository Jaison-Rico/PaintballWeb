import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-5 " style={{ backgroundColor: "#2C3E50", color: "#fff" }}>
      <Container>
        <Row className="gy-4 text-center text-md-start">
          <Col md={4}>
            <h5 className="fw-bold">Paintball Medellín</h5>
            <p>
              Paintball Medellín ofrece experiencias llenas de adrenalina en escenarios estratégicos.
              Diversión segura para amigos, empresas y eventos.
            </p>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Explora</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none footer-link">Inicio</Link></li>
              <li><Link to="/Products" className="text-white text-decoration-none footer-link">Reservar</Link></li>
              <li><Link to="/Login" className="text-white text-decoration-none footer-link">Login</Link></li>
              <li><Link to="/Register" className="text-white text-decoration-none footer-link">Registrarse</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Contactos</h5>
            <p className="align-items-center">
              <FaPhone className="me-2" /> +57 3008867588
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white fs-4 footer-icon"><FaFacebook /></a>
              <a href="#" className="text-white fs-4 footer-icon"><FaInstagram /></a>
              <a href="#" className="text-white fs-4 footer-icon"><FaGithub /></a>
              <a href="#" className="text-white fs-4 footer-icon"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>

        <div className="text-center mt-4 pt-3 border-top border-light">
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
