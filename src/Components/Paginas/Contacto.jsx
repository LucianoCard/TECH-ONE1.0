import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import "./IniciarSesion.css";
import "./Contacto.css";

export function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeEstado, setMensajeEstado] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("success");

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!nombre || !email || !mensaje) {
      setTipoAlerta("danger");
      setMensajeEstado("Por favor, completa todos los campos.");
      return;
    }

    setTipoAlerta("success");
    setMensajeEstado("Mensaje enviado. Te contactaremos pronto.");
    setNombre("");
    setEmail("");
    setMensaje("");

    setTimeout(() => {
      setMensajeEstado("");
    }, 3000);
  };

  return (
    <main>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="login-container p-5 rounded">
          <h2 className="login-titulo">Contacto</h2>
          <p className="login-subtitulo">Déjanos tu consulta</p>

          {mensajeEstado && (
            <Alert
              variant={tipoAlerta}
              className="alerta-flotante alerta-personalizada mt-3"
              style={{ position: "relative", bottom: "auto", right: "auto" }}
            >
              {mensajeEstado}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contactoNombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu nombre"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                  setMensajeEstado("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactoEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMensajeEstado("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="contactoMensaje">
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribe tu mensaje"
                value={mensaje}
                onChange={(e) => {
                  setMensaje(e.target.value);
                  setMensajeEstado("");
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              [Enviar]
            </Button>
          </Form>
        </div>
      </Container>
    </main>
  );
}
