import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

export function SobreEsteProyecto() {
  return (
    <main className="glow-border pb-4 pt-4 my-4">
      <Container>
        <h1 className="text-center col-12 logo-brillo mb-4">Integrantes:</h1>
        <Row className="justify-content-center g-4 mb-5">
          <Col md={6} lg={4}>
            <Card className="h-100">
              <Card.Img
                className="fotoIntegrante"
                src="/imagenes/usuarios/d776f77e-b0c3-43a6-8518-4cc626107ce4.jfif"
              />
              <Card.Body>
                <Card.Title className="logo-brillo botones d-flex justify-content-center">
                  Luciano Cardoso
                </Card.Title>
                <Card.Text>
                  Mi nombre es Luciano Cardoso, soy un apasionado por la
                  programación; intento cada día mejorar mis habilidades
                  técnicas para profesionalizar mi perfil. Este proyecto,
                  realizado junto a mi compañera, demuestra mi pasión por la
                  tecnología.
                </Card.Text>
                <h5>Encargado del frontend</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100">
              <Card.Img
                className="fotoIntegrante"
                variant="top"
                src="/imagenes/usuarios/imagen-nadia.png"
              />
              <Card.Body>
                <Card.Title className="logo-brillo botones d-flex justify-content-center">
                  Nadia Badaraco
                </Card.Title>
                <Card.Text>
                  Mi nombre es Nadia Badaraco, apasionada por la
                  ciberseguridad y con amplio conocimiento en la disciplina.
                  Este proyecto, realizado junto a mi compañero, demuestra mis
                  capacidades para el desarrollo web.
                </Card.Text>
                <h5>Encargada del backend</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="text-center">
          <Card.Header>Proyecto</Card.Header>
          <Card.Body>
            <Card.Title>¿Sobre qué se trata?</Card.Title>
            <Card.Text>
              Este proyecto consiste en realizar un E-commerce ficticio, donde
              ponemos a prueba todos nuestros conocimientos abordados durante
              todo el año. <br />
              En este E-commerce se pondrán en venta artículos de PC, PC
              armadas, piezas, periféricos, etc. Si quieres ver más detalles
              sobre este trabajo, <br /> ¡entra al siguiente enlace!
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
  );
}

