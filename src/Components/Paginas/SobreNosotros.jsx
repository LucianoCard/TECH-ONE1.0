import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
export function SobreNosotros() {
  return (
    <>
      <Header></Header>
      <main className="glow-border">
        <div className="container row p-4 ">
          <div className=" logo-brillo col-12 col-md-6 pt-5 ps-4 ">
            <h1>Tech-one</h1>
            <h2 className=" pt-4  ">
              Somos una empresa que vende variedad de articulos de informatica,
              los mejores para el usuario. Nos enfocamos en la venta online para
              el facil acceso de todo el publico.
              <br />
              Las mejores piezas para tu consumo, gracias por confiar en
              nosotros.
            </h2>
          </div>

          <div className="col-12 col-md-6 ">
            <img
              className="imagendifuminar "
              src="src/Components/imagenLOGO/f35f8dcd-d875-4706-b6db-36c7791c4956.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <h1 className="logo-brillo d-flex justify-content-center glow-border mt-4 p-4">
            Contacto
          </h1>
        </div>
        <div className=" container mt-5 ">
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
  );
}
