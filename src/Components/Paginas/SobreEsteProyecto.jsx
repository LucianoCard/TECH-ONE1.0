import Header from "../Header";
import Footer from "../Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function SobreEsteProyecto() {
  return (
    <>
      <Header></Header>
      <main className="mt-5 mb-5 glow-border pb-4 pt-4">
        <div className="d-flex justify-content-center row navbar-fuente gap-4">
          <h1 className="d-flex justify-content-center col-12 logo-brillo">
            Integrantes:
          </h1>
          <Card className="col-3">
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
          <Card className="col-3">
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
          <Card className="text-center">
            <Card.Header>Proyecto</Card.Header>
            <Card.Body>
              <Card.Title>Sobre que se trata?</Card.Title>
              <Card.Text>
                Este proyecto se trata de realizar un E-commerce falso, donde
                ponemos a prueba todos nuestros conocimientos abordados durante
                todo el año. <br />
                En este E-commerce se pondran en venta articulos de PC, PC
                armadas, piezas, perifericos, etc. Si quieres ver mas detalles
                sobre este trabajo, <br /> Entra al siguiente link!
              </Card.Text>
              <a
                href="https://github.com/LucianoCard/Tech-ONE"
                className="botones botonesActivar text-dark p-2"
              >
                Github
              </a>
            </Card.Body>
          </Card>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
