import "./RecuperarContraseña.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export function RecuperarContraseña() {
  const [email, setEmail] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (!email) {
      setMensajeError("Por favor, introduce tu email.");
      setMensajeExito("");
      return;
    }

    setMensajeExito(`Se ha enviado un correo de recuperación a ${email}`);
    setMensajeError("");
    setEmail("");
  };

  return (
    <main>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="login-container p-5 rounded">
          <h2 className="login-titulo">Recuperar Contraseña</h2>
          <p className="login-subtitulo">
            Si olvidaste tu contraseña, puedes recuperarla. Te enviaremos las
            instrucciones a tu correo electrónico.
          </p>

          {mensajeError && (
            <Alert variant="danger" className="mt-3">
              {mensajeError}
            </Alert>
          )}

          {mensajeExito && (
            <Alert variant="success" className="mt-3">
              {mensajeExito}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(evento) => {
                  setEmail(evento.target.value);
                  setMensajeError("");
                  setMensajeExito("");
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              [Enviar]
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/login" className="small-link">
              Volver a Iniciar Sesión
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
