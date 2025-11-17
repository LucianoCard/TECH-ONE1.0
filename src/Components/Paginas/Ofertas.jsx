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

export function Ofertas() {
  let [oferta, Setoferta] = useState("");
  let [guardarProductos, SetguardarProductos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/productos?" + oferta)
      .then((datosDelServidor) => datosDelServidor.json())
      .then((producto) => SetguardarProductos(producto));
  }, [oferta]);
  return (
    <div>
      <Header></Header>
      <main>
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
      <Footer></Footer>
    </div>
  );
}
