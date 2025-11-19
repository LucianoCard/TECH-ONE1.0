import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

import { logout } from "../app/slices/authSlice";
import { toggleCarrito } from "../app/slices/carritoSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleShowCart = () => {
    dispatch(toggleCarrito());
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary border-top-0 p-4"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-fuente logo-brillo">
          Tech-One
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/Productos"
              className={({ isActive }) =>
                `nav-link navbar-fuente ${isActive ? "active tech-one" : ""}`
              }
            >
              <i className="bi bi-box-seam"></i> [Productos]
            </NavLink>
            <NavLink
              to="/Ofertas"
              className={({ isActive }) =>
                `nav-link navbar-fuente ${isActive ? "active tech-one" : ""}`
              }
            >
              <i className="bi bi-percent"></i> [Ofertas]
            </NavLink>
            <NavLink
              to="/Sobre-nosotros"
              className={({ isActive }) =>
                `nav-link navbar-fuente ${isActive ? "active tech-one" : ""}`
              }
            >
              <i className="bi bi-info-circle"></i> [Sobre nosotros]
            </NavLink>
            <NavLink
              to="/Sobre-Este-Proyecto"
              className={({ isActive }) =>
                `nav-link navbar-fuente ${isActive ? "active tech-one" : ""}`
              }
            >
              <i className="bi bi-info-circle"></i> [Sobre este proyecto]
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Navbar.Text className="navbar-fuente me-3">
                  Bienvenido, {user?.nombre}
                </Navbar.Text>
                <Nav.Link onClick={handleLogout} className="navbar-fuente">
                  [Cerrar Sesión]
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login" className="navbar-fuente">
                  <i className="bi bi-person"></i> [Iniciar Sesión]
                </Nav.Link>
                <Nav.Link as={NavLink} to="/registro" className="navbar-fuente">
                  <i className="bi bi-person-plus"></i> [Registrarse]
                </Nav.Link>
              </>
            )}
            <Nav.Link
              onClick={handleShowCart}
              className="navbar-fuente puntero"
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
