import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import "../components/css/Style.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f3f4f6"}}>
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

      {/* Sección de servicios */}
      <div className="pb-5">
        <div className="pt-5 mt-5 text-center ">
          <h1 className="fw-bold">Nuestros Servicios</h1>
        </div>
        <Row className="justify-content-center ms-5 me-5 mt-2 mb-5 row-cols-1 row-cols-md-3">
          <Col className="pt-5">
            <Card className="shadow service-card border-0">
              <Link
                to="/Campos"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card.Img
                  variant="top"
                  src="paintball field1.jpg"
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold">
                    Campos de Paintball
                  </Card.Title>
                  <Card.Text>
                    Amplios campos temáticos con diferentes escenarios.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="pt-5">
            <Card className="shadow service-card border-0">
              <Link
                to="/listarEquipos"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Card.Img
                  variant="top"
                  src="/equipamiento-home.jpg"
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold">
                    Equipamiento Completo
                  </Card.Title>
                  <Card.Text>
                    Cascos, armas y trajes protectores de alta calidad para una
                    experiencia segura y divertida.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="pt-5">
            <Card className="shadow service-card border-0">
              <Link
                to="/campos"
                className="card-link"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Card.Img
                  variant="top"
                  src="card3.jpg"
                  style={{ height: "250px" }}
                />
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold">
                    Eventos Grupales
                  </Card.Title>
                  <Card.Text>
                    Organizamos eventos para cualquier celebración especial.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Sección de precios */}
      <div className="pb-2 " style={{ backgroundColor: "#f3f4f6",  marginBottom: "100px" }}>
        <Row className="pt-5 ms-5 me-5 ">
          <h1 className="mt-4 text-center  fw-bold">Precios</h1>
          <Col className="pt-5">
            <Card
              className="shadow-sm card-precio text-center text-black   border-0 p-4"
              style={{ minHeight: "400px" }}
            >
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">Básico</Card.Title>
                <Card.Text className="d-flex justify-content-center mt-0 align-items-end fw-bold fs-1">
                  $ 45.000
                  <span className="fs-6 text-secondary fw-lighter mb-2">
                    /persona
                  </span>
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />2 horas de
                  juego
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  100 paintballs
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Equipo básico
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Instructor
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="pt-5">
            <Card
              className="shadow-sm card-precio text-center text-black pb-0 border-0 p-4"
              style={{ minHeight: "400px" }}
            >
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">Premium</Card.Title>
                <Card.Text className="d-flex justify-content-center align-items-end fw-bold fs-1">
                  $ 75.000
                  <span className="fs-6 text-secondary fw-lighter mb-2">
                    /persona
                  </span>
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />3 horas de
                  juego
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  200 paintballs
                </Card.Text>
                <Card.Text className="d-flex justify-content-start align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Equipo completo
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Instructor
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Hidratación
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="pt-5">
            <Card
              className="shadow-sm card-precio text-center text-black pb-0 border-0 p-4"
              style={{ minHeight: "400px" }}
            >
              <Card.Body>
                <Card.Title className="fs-4 fw-bold">Pro</Card.Title>
                <Card.Text className="d-flex justify-content-center align-items-end fw-bold fs-1">
                  $ 120.000
                  <span className="fs-6 text-secondary fw-lighter mb-2">
                    /persona
                  </span>
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />4 horas de
                  juego
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  300 paintballs
                </Card.Text>
                <Card.Text className="d-flex justify-content-start align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Equipo premium
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Instructor personal
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Hidratación
                </Card.Text>
                <Card.Text className="d-flex justify-content-start  align-items-center gap-2 mb-2">
                  <IoCheckmarkOutline className="text-success" />
                  Snacks
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Container>
        <Row>
          <Col className="pb-5 mb-5 me-3">
          <img src="/logo-black.png" className="align-content-start" style={{height : "200px"}}/>
          <h1 className="fw-bold mb-4 ">Hazlo tuyo con Paintball Medellín</h1>
          <span className="fst-italic fs-5 ">Vive la adrenalina al máximo con nuestras experiencias diseñadas para grupos, empresas y aventureros. En Paintball Medellín, combinamos escenarios estratégicos, equipos de alta calidad e instructores expertos para brindarte diversión segura e inolvidable.
          Descubre nuestros planes personalizados, reserva en línea y prepárate para una batalla épica en medio de la naturaleza.
          </span>

          </Col> 
          <Col className="align-self-center mt-5 ms-5">
          <Carousel className="shadow">
        <Carousel.Item>
          <Card className="border-0 shadow mx-auto" >
            <Card.Body className="text-center p-4 mb-3">
              <img 
                src="person1.jpg"
                className="rounded-5 d-flex align-items-center justify-content-center mx-auto mb-3" 
                style={{ width: '120px', height: '140px' }}
              />
              <Card.Text className="fst-italic mb-3">
                "¡El mejor evento de paintball que hemos organizado! La adrenalina, el equipo y la atención al cliente fueron increíbles. ¡Repetiremos sin duda!"
              </Card.Text>
              <Card.Title className="fw-bold mb-1">Carlos Pérez</Card.Title>
              <Card.Subtitle className="text-muted ">CEO, Aventuras Extremas</Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>

        {/* Testimonio 2 */}
        <Carousel.Item>
          <Card className="border-0 shadow mx-auto" >
            <Card.Body className="text-center p-4 mb-3">
              <img 
                src="person2.jpg"
                className="rounded-5 d-flex align-items-center justify-content-center mx-auto mb-3" 
                style={{ width: '130px', height: '120px' }}
              />
              <Card.Text className="fst-italic mb-3">
                "Nos ayudaron a organizar el cumpleaños perfecto para mi hijo y sus amigos. Todos salieron encantados y llenos de anécdotas divertidas."
              </Card.Text>
              <Card.Title className="fw-bold mb-1">Laura García</Card.Title>
              <Card.Subtitle className="text-muted ">Madre de cliente</Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>

        {/* Testimonio 3 */}
        <Carousel.Item>
          <Card className="border-0 shadow mx-auto" >
            <Card.Body className="text-center p-4 mb-3">
              <img 
                src="person3.jpg"
                className="rounded-5 d-flex align-items-center justify-content-center mx-auto mb-3" 
                style={{ width: '130px', height: '90%' }}
              />
              <Card.Text className="fst-italic mb-3">
                "Organizamos un evento corporativo para nuestro equipo y fue un éxito total. Excelente opción para fortalecer el trabajo en equipo."
              </Card.Text>
              <Card.Title className="fw-bold mb-1">Ricardo López</Card.Title>
              <Card.Subtitle className="text-muted ">Gerente de Recursos Humanos, Empresa XYZ</Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>

        {/* Testimonio 4 */}
        <Carousel.Item>
          <Card className="border-0 shadow mx-auto" >
            <Card.Body className="text-center p-4 mb-3">
              <img 
                src="person4.jpg"
                className="rounded-5 d-flex align-items-center justify-content-center mx-auto mb-3" 
                style={{ width: '130px', height: '90%' }}
              />
              <Card.Text className="fst-italic mb-3">
                "La mejor experiencia de paintball que hemos tenido. La atención al detalle y la seguridad fueron impecables. ¡Muy recomendable!"
              </Card.Text>
              <Card.Title className="fw-bold mb-1">Daniela Torres</Card.Title>
              <Card.Subtitle className="text-muted ">Cliente frecuente</Card.Subtitle>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>

        </Col>
      </Row>
      </Container>
    </div>

    </div>
  );
}
