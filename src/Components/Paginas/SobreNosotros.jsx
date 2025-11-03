import Header from "../Header";
import Footer from "../Footer";
import Card from "react-bootstrap/Card";
export function SobreNosotros() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="glow-border row">
          <div className=" d-flex justify-content-center mt-5 mb-5 col-12">
            <Card className="bg-dark text-white w-25  mt-5 ">
              <Card.Img
                src="src\Components\imagenLOGO\f35f8dcd-d875-4706-b6db-36c7791c4956.jpg"
                alt="Card image"
                className="imagen-Logo"
              />
              <Card.ImgOverlay className="text-white glow-border navbar-fuente">
                <Card.Title className="logo-brillo fs-3 text">
                  Tech-One
                </Card.Title>
                <br />
                <Card.Text>
                  Somos una empresa que vende variedad de articulos de
                  informatica, los mejores para el usuario. Nos enfocamos en la
                  venta online para el facil acceso de todo el publico.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="d-flex justify-content-center mb-5 gap-4 navbar-fuente">
            <Card
              border="dark"
              style={{ width: "18rem" }}
              className="text-center glow-border"
            >
              <Card.Header>Direccion</Card.Header>
              <Card.Body>
                <Card.Title>
                  <i class="bi bi-geo-alt-fill"></i>
                </Card.Title>
                <Card.Text>Calle falsa 123</Card.Text>
              </Card.Body>
            </Card>
            <Card
              border="dark"
              style={{ width: "18rem" }}
              className="text-center glow-border"
            >
              <Card.Header>Telefono</Card.Header>
              <Card.Body>
                <Card.Title>
                  <i class="bi bi-telephone"></i>
                </Card.Title>
                <Card.Text>Telefono: 999999999</Card.Text>
              </Card.Body>
            </Card>
            <Card
              border="dark"
              style={{ width: "18rem" }}
              className="text-center glow-border"
            >
              <Card.Header>Mail</Card.Header>
              <Card.Body>
                <Card.Title>
                  <i class="bi bi-envelope"></i>
                </Card.Title>
                <Card.Text>Mailfalso@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
