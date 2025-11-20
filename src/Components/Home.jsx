import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { añadirProducto } from "../app/slices/carritoSlice";
import { CarouselFadeExample } from "./Carrusel";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export function Home() {
  const [productos, setProductos] = useState([]);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/productos?_limit=4")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  const handleAgregar = (item) => {
    dispatch(añadirProducto(item));
    setMensajeAlerta("Producto añadido correctamente");
    setTimeout(() => {
      setMensajeAlerta("");
    }, 3000);
  };

  return (
    <>
      <CarouselFadeExample />

      <Container className="my-5">
        <h2 className="text-center mb-4 logo-brillo">Productos Destacados</h2>
        
        {mensajeAlerta && (
          <Alert
            variant="success"
            className="alerta-flotante alerta-personalizada"
          >
            {mensajeAlerta}
          </Alert>
        )}

        <Row className="g-4">
          {productos.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <Card
                style={{ width: "18rem" }}
                className="glow-border navbar-fuente h-100"
              >
                <Card.Img variant="top" src={item.imagen} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="d-flex justify-content-center logo-brillo text-center">
                    {`${item.nombre} ${item.modelo}`}
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center text-center">
                    ${item.precio}
                  </Card.Text>
                  <div className="d-flex justify-content-center mt-auto">
                    <Button
                      className="botonesActivar logo-brillo botones"
                      onClick={() => handleAgregar(item)}
                    >
                      Agregar al carrito <i className="bi bi-cart"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
