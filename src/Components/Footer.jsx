import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-contenedor text-center">
      <Container fluid className="p-4">
        <h3 className="footer-marca">Tech-One</h3>

        <Nav className="justify-content-center my-4">
          <Nav.Link as={Link} to="/" className="enlace-footer">
            INICIO
          </Nav.Link>
          <Nav.Link as={Link} to="/productos" className="enlace-footer">
            PRODUCTOS
          </Nav.Link>
          <Nav.Link as={Link} to="/sobre-nosotros" className="enlace-footer">
            SOBRE NOSOTROS
          </Nav.Link>
          <Nav.Link as={Link} to="/Sobre-nosotros" className="enlace-footer">
            CONTACTO
          </Nav.Link>
        </Nav>

        <div className="iconos-redes mb-4">
          <a href="" className="icono-red-social">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="" className="icono-red-social">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="" className="icono-red-social">
            <i className="bi bi-facebook"></i>
          </a>
        </div>

        <p className="copy-footer">© 2025 Tech-One | All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
