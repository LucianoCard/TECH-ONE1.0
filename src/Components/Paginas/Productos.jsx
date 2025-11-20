import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { añadirProducto } from "../../app/slices/carritoSlice";
import { useLocation } from "react-router-dom";

export function Productos() {
  const dispatch = useDispatch();
  const location = useLocation();
  let [filtro, Setfiltro] = useState("");
  let [guardarProductos, SetguardarProductos] = useState([]);
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  const categoriaAMapear = {
    "Sillas": 10,
    "Monitores": 5,
    "Tarjetas Gráficas": 4,
    "Teclados": 11,
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoriaDesdeURL = params.get("categoria");

    if (categoriaDesdeURL && categoriaAMapear[categoriaDesdeURL]) {
      Setfiltro(`categoriaId=${categoriaAMapear[categoriaDesdeURL]}`);
    } else {
      Setfiltro("productos?");
    }

    fetch(`http://localhost:3000/productos?${filtro}`)
      .then((datosDelServidor) => datosDelServidor.json())
      .then((producto) => SetguardarProductos(producto));
  }, [filtro, location.search]);

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
            <Navbar.Brand href="#" onClick={() => Setfiltro("productos?")}>
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
                    onClick={() => Setfiltro("categoriaId=1")}
                  >
                    Coolers
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=2")}
                  >
                    Escritorios
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=3")}
                  >
                    Fuentes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=12")}
                  >
                    Gabinetes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=4")}
                  >
                    Graficas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=5")}
                  >
                    Monitores
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=6")}
                  >
                    Motherboards
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=7")}
                  >
                    Mouses
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=8")}
                  >
                    Procesadores
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=9")}
                  >
                    Rams
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=10")}
                  >
                    Sillas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href=""
                    onClick={() => Setfiltro("categoriaId=11")}
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
              className=" navbar-fuente border-0 "
            >
              <Card.Img src={item.imagen} />
              <Card.Body>
                <Card.Title className="d-flex justify-content-center logo-brillo ">
                  {`${item.nombre} ${item.modelo}`}
                </Card.Title>
                <Card.Text className="d-flex justify-content-center text-center  ">
                  {item.descripcion}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    className=" botonesActivar logo-brillo botones    "
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
