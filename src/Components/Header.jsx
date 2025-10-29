import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary border-top-0 p-4 "
    >
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="/" className="navbar-fuente logo-brillo">
          Tech-One
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/Productos"
              className="navbar-fuente tech-one"
            >
              [Productos]
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Ofertas"
              className="navbar-fuente tech-one"
            >
              [Ofertas]
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Sobre-nosotros"
              className="navbar-fuente tech-one"
            >
              [Sobre nosotros]
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Sobre-Este-Proyecto"
              className="navbar-fuente tech-one"
            >
              [Sobre este proyecto]
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/registro"
              className="navbar-fuente tech-one"
            >
              <i className="bi bi-person"></i>[Registrarse]
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#memes"
              className="navbar-fuente tech-one"
            >
              <i className="bi bi-cart"></i>[Carrito]
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
