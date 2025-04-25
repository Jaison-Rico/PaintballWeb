import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import "../components/css/Style.css";

export default function Home() {
  return (
    <div>
      {/* home*/}
      <div id="fullscreen-image">
        <Container fluid>
          <Row className="justify-content-center align-items-center pt-3 text-center h-100 ">
            <Col className="justify-content-center align-content-center">
              <p className="fs-4 fw-bold mb-0" style={{ color: "#ff7f24" }}>
                BIENVENIDOS A
              </p>
              <p className="display-1 fw-bold mb-0">Paintball City </p>
              <h1
                className="display-1 fw-bold mb-4"
                style={{ color: "#ff7f24" }}
              >
                Medellin
              </h1>
              <p className="fw-medium fs-5">
                ¡Vive la adrenalina en el mejor campo de paintball de la ciudad!
              </p>
              <div className="d-flex justify-content-center">
                <Button
                  href=""
                  className="btn-orange mb-5 px-4 py-2 fs-5 fw-medium me-2"
                >
                  Reserva tu campo <FaArrowRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="py-3">
          <Row className="justify-content-center row-cols-1 row-cols-md-3 g-3">
            <Col className="text-center mb-4 mb-md-0">
              <div>
                <p className="fs-2 fw-bold mb-0">5+</p>
                <p className="fw-medium text-grey mb-0">Campos Temáticos</p>
              </div>
            </Col>
            <Col className="text-center mb-4 mb-md-0">
              <div>
                <p className="fs-2 fw-bold mb-0">15k+</p>
                <p className="fw-medium text-grey mb-0">Clientes Satisfechos</p>
              </div>
            </Col>
            <Col className="text-center">
              <div>
                <p className="fs-2 fw-bold mb-0">100+</p>
                <p className="fw-medium text-grey mb-0">
                  Equipos Profesionales
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* El footer estará después de este componente en tu App.js */}
      </div>
      <div className="container">
        {/* Sección de imágenes y botón */}
        <div className="row mt-4 d-flex justify-content-center text-center">
          <div className="col-12 mb-3">
            <button
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "#2C3E50",
                color: "#fff",
                border: "none",
              }}
            >
              Reservar Ahora
            </button>
          </div>

          {/*imagenes */}
          <div className="col-md-3 col-6 mb-4">
            <img
              src="/paintball2.png"
              alt="Paintball Match"
              className="img-fluid rounded shadow"
              style={{ height: "310px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-3 col-6 ">
            <img
              src="/paintball3.png"
              alt="Paintball Team"
              className="img-fluid rounded shadow"
              style={{ height: "310px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-3 col-6 mt-md-0 mt-3">
            <img
              src="/paintball4.png"
              alt="Paintball Players"
              className="img-fluid rounded shadow"
              style={{ height: "310px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
