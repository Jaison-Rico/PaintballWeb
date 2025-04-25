import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../components/css/Style.css";

export default function Header() {
  return (
    <Navbar
      className="custom-navbar"
      style={{ padding: "0.75rem" }}
      expand="lg"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="text-white fs-4 fw-bolder">
          Paintball City
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
            <Nav.Link className="text-grey fw-semibold" href="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="text-grey fw-medium" href="/servicios">
              Servicios
            </Nav.Link>
            <Nav.Link className="text-grey fw-semibold" href="/galeria">
              Galería
            </Nav.Link>
            <Nav.Link className="text-grey fw-semibold" href="/precios">
              Precios
            </Nav.Link>
            <Nav.Link className="text-grey fw-semibold" href="/Register">
              Registrarse
            </Nav.Link>
            <Nav.Link className="text-grey fw-semibold" href="/Login">
              Login
            </Nav.Link>
            <Button href="/reservar-ahora" className="btn-orange   fw-semibold">
              Reserva Ahora
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
