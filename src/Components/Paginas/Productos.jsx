import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { añadirProducto } from "../../app/slices/carritoSlice";
import { useLocation } from "react-router-dom";

export function Productos() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [filtroManual, setFiltroManual] = useState(null);
  const [guardarProductos, setGuardarProductos] = useState([]);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const ultimaBusqueda = useRef(location.search);

  const categoriaAMapear = {
    sillas: 10,
    monitores: 5,
    "tarjetas graficas": 4,
    teclados: 11,
  };

  const normalizarTexto = (texto) =>
    texto
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .trim();

  useEffect(() => {
    const cambioBusqueda = ultimaBusqueda.current !== location.search;
    if (cambioBusqueda) {
      ultimaBusqueda.current = location.search;
      if (filtroManual !== null) {
        setFiltroManual(null);
        return;
      }
    }

    const params = new URLSearchParams(location.search);
    const categoriaDesdeURL = params.get("categoria");
    const categoriaNormalizada = categoriaDesdeURL
      ? normalizarTexto(categoriaDesdeURL)
      : "";

    const filtroDesdeURL =
      categoriaNormalizada && categoriaAMapear[categoriaNormalizada]
        ? `categoriaId=${categoriaAMapear[categoriaNormalizada]}`
        : "";

    const filtroParaBuscar =
      filtroManual !== null ? filtroManual : filtroDesdeURL;

    window.scrollTo(0, 0);

    const endpoint = filtroParaBuscar
      ? `http://localhost:3000/productos?${filtroParaBuscar}`
      : "http://localhost:3000/productos";

    fetch(endpoint)
      .then((datosDelServidor) => datosDelServidor.json())
      .then((producto) => setGuardarProductos(producto));
  }, [location.search, filtroManual]);

  const handleAgregar = (item) => {
    dispatch(añadirProducto(item));
    setMensajeAlerta("Producto añadido correctamente");
    setTimeout(() => {
      setMensajeAlerta("");
    }, 3000);
  };

  return (
    <main>
      {mensajeAlerta && (
        <Alert
          variant="success"
          className="alerta-flotante alerta-personalizada"
        >
          {mensajeAlerta}
        </Alert>
      )}
      <div className="mt-4 ">
        <Navbar expand="md" className="bg-body-tertiary border-top">
          <Container>
            <Navbar.Brand href="#" onClick={() => setFiltroManual("")}>
              Productos:
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Filtro" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=1")}
                  >
                    Coolers
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=2")}
                  >
                    Escritorios
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=3")}
                  >
                    Fuentes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=12")}
                  >
                    Gabinetes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=4")}
                  >
                    Graficas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=5")}
                  >
                    Monitores
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=6")}
                  >
                    Motherboards
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=7")}
                  >
                    Mouses
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=8")}
                  >
                    Procesadores
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=9")}
                  >
                    Rams
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=10")}
                  >
                    Sillas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => setFiltroManual("categoriaId=11")}
                  >
                    Teclados
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="row justify-content-center pt-5 g-4">
        {guardarProductos.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
            <Card
              style={{ width: "18rem" }}
              className="navbar-fuente border-0 producto-card"
            >
              <Card.Img src={item.imagen} className="producto-imagen" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-center logo-brillo text-center">
                  {`${item.nombre} ${item.modelo}`}
                </Card.Title>
                <Card.Text className="text-center mb-3 producto-descripcion">
                  {item.descripcion}
                </Card.Text>
                {item.precio !== undefined && (
                  <div className="text-center precio-novedad mb-3">Precio: ${item.precio}</div>
                )}
                <div className="d-flex justify-content-center mt-auto">
                  <Button
                    className="botonesActivar logo-brillo botones producto-boton fuente-principal"
                    onClick={() => handleAgregar(item)}
                  >
                    Agregar al carrito <i className="bi bi-cart"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

