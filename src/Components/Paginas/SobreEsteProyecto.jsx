import Header from "../Header";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { Carrito } from "../Carrito/Carrito";

export function SobreEsteProyecto() {
  return (
    <>
      <Header></Header>
      <Carrito />
      <main className="glow-border pb-4 pt-4 my-4">
        <Container>
          <h1 className="text-center col-12 logo-brillo mb-4">Integrantes:</h1>
          <Row className="justify-content-center g-4 mb-5">
            <Col md={6} lg={4}>
              <Card className="h-100">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title className="logo-brillo botones d-flex justify-content-center">
                    Luciano Cardoso
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content. Some quick example text to build
                    on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title className="logo-brillo botones d-flex justify-content-center">
                    Nadia Badaraco
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content. Some quick example text to build
                    on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="text-center">
            <Card.Header>Proyecto</Card.Header>
            <Card.Body>
              <Card.Title>¿Sobre qué se trata?</Card.Title>
              <Card.Text>
                Este proyecto se trata de realizar un E-commerce falso, donde
                ponemos a prueba todos nuestros conocimientos abordados durante
                todo el año. <br />
                En este E-commerce se pondrán en venta artículos de PC, PC
                armadas, piezas, periféricos, etc. Si quieres ver más detalles
                sobre este trabajo, <br /> ¡Entra al siguiente link!
              </Card.Text>
              <a
                href="https://github.com/LucianoCard/Tech-ONE"
                className="botones botonesActivar text-dark p-2"
              >
                Github
              </a>
            </Card.Body>
          </Card>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}
