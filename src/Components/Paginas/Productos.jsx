import Header from "../Header";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";

export function Productos() {
  let [filtro, Setfiltro] = useState("");
  let [guardarProductos, SetguardarProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos?" + filtro)
      .then((datosDelServidor) => datosDelServidor.json())
      .then((producto) => SetguardarProductos(producto));
  }, [filtro]);

  return (
    <>
      <Header></Header>
      <main>
        <div className="mt-4 ">
          <Navbar expand="lg " className="bg-body-tertiary border-top">
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
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=1")}
                    >
                      Coolers
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=2")}
                    >
                      Escritorios
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=3")}
                    >
                      Fuentes
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=12")}
                    >
                      Gabinetes
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=4")}
                    >
                      Graficas
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=5")}
                    >
                      Monitores
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=6")}
                    >
                      Motherboards
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action3"
                      onClick={() => Setfiltro("categoriaId=7")}
                    >
                      Mouses
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action4"
                      onClick={() => Setfiltro("categoriaId=8")}
                    >
                      Procesadores
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action5"
                      onClick={() => Setfiltro("categoriaId=9")}
                    >
                      Rams
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action4"
                      onClick={() => Setfiltro("categoriaId=10")}
                    >
                      Sillas
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#action4"
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

        <div className="row justify-content-center pt-5  ">
          {guardarProductos.map((item) => (
            <div key={item.id} className="col-3 ms-5 mb-4 ">
              <Card
                style={{ width: "18rem" }}
                className=" glow-border navbar-fuente "
              >
                <Card.Img src={item.imagen} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center logo-brillo ">
                    {" "}
                    {item.nombre}{" "}
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center text-center  ">
                    {item.descripcion}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button
                      className=" botonesActivar logo-brillo botones    "
                      href=""
                    >
                      Agregar al carrito <i class="bi bi-cart"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </main>
      <Footer></Footer>;
    </>
  );
}
