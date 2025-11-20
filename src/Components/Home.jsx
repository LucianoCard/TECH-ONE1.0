import { CarouselFadeExample } from "./Carrusel";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Home() {
  const categoriasDestacadas = [
    {
      id: 30,
      nombre: "Tarjetas Gráficas",
      imagen: "/imagenes/destacados/producto-destacado-uno.jpg",
    },
    {
      id: 88,
      nombre: "Sillas",
      imagen: "/imagenes/destacados/producto-destacado-dos.jpg",
    },
    {
      id: 40,
      nombre: "Monitores",
      imagen: "/imagenes/destacados/producto-destacado-tres.jpg",
    },
    {
      id: 100,
      nombre: "Teclados",
      imagen: "/imagenes/destacados/producto-destacado-cuatro.jpg",
    },
  ];

  return (
    <>
      <CarouselFadeExample />

      <Container className="my-5">
        <h2 className="titulo-seccion">Categorías Destacadas</h2>

        <Row className="g-4">
          {categoriasDestacadas.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <NavLink to={`/Productos?categoria=${item.nombre}`} className="enlace-tarjeta">
                <Card
                  className="navbar-fuente h-100 border-0"
                >
                  <Card.Img variant="top" src={item.imagen} />
                  <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Title className="d-flex justify-content-center text-center fw-normal titulo-categoria-tarjeta">
                      {item.nombre}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
