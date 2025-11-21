import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { CarouselFadeExample } from "./Carrusel";
import { añadirProducto } from "../app/slices/carritoSlice";

export function Home() {
  const dispatch = useDispatch();

  const categoriasDestacadas = [
    { id: 30, nombre: "Tarjetas Gráficas", imagen: "/imagenes/destacados/producto-destacado-uno.jpg" },
    { id: 88, nombre: "Sillas", imagen: "/imagenes/destacados/producto-destacado-dos.jpg" },
    { id: 40, nombre: "Monitores", imagen: "/imagenes/destacados/producto-destacado-tres.jpg" },
    { id: 100, nombre: "Teclados", imagen: "/imagenes/destacados/producto-destacado-cuatro.jpg" },
  ];

  const novedadesConfig = [
    { id: 4, imagen: "/imagenes/novedades/producto-novedades-uno.png" },
    { id: 56, imagen: "/imagenes/novedades/producto-novedades-dos.png" },
    { id: 25, imagen: "/imagenes/novedades/producto-novedades-tres.png" },
    { id: 77, imagen: "/imagenes/novedades/producto-novedades-cuatro.png" },
  ];

  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const query = novedadesConfig.map((item) => `id=${item.id}`).join("&");
    fetch(`http://localhost:3000/productos?${query}`)
      .then((res) => res.json())
      .then((data) => {
        const productos = novedadesConfig.map((item) => {
          const detalle = data.find((prod) => Number(prod.id) === Number(item.id)) || {};
          return { ...detalle, id: item.id, imagen: item.imagen };
        });
        setNovedades(productos);
      })
      .catch(() => setNovedades([]));
  }, []);

  const handleAgregar = (item) => {
    dispatch(añadirProducto(item));
  };

  return (
    <>
      <CarouselFadeExample />

      <Container className="my-5">
        <h2 className="titulo-seccion">Categorías Destacadas</h2>
        <Row className="g-4">
          {categoriasDestacadas.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <NavLink to={`/Productos?categoria=${item.nombre}`} className="enlace-tarjeta">
                <Card className="navbar-fuente h-100 border-0">
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

      <Container className="my-5">
        <img
          src="/imagenes/home/banner-armar-pc.png"
          alt="Banner arma tu PC"
          className="img-fluid home-banner"
        />
      </Container>

      <Container className="my-5">
        <h2 className="titulo-seccion">Novedades</h2>
        <Row className="g-4">
          {novedades.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={3} className="d-flex justify-content-center">
              <Card className="navbar-fuente h-100 border-0 producto-card">
                <Card.Img variant="top" src={item.imagen} className="producto-imagen" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="d-flex justify-content-center text-center fw-bold titulo-categoria-tarjeta">
                    {`${item.nombre ?? ""} ${item.modelo ?? ""}`.trim()}
                  </Card.Title>
                  <div className="d-flex flex-column align-items-center gap-2 mt-auto">
                    {item.precio !== undefined && (
                      <span className="precio-novedad">Precio: ${item.precio}</span>
                    )}
                    <Button
                      className="botonesActivar botones producto-boton fuente-principal"
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

