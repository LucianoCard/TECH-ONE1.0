import Header from "../Header";
import Footer from "../Footer";
import "./CrearCuenta.css";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function CrearCuenta() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (contraseña !== confirmarContraseña) {
      return;
    }

    if (!usuario || !email || !contraseña) {
      return;
    }
    setUsuario("");
    setEmail("");
    setContraseña("");
    setConfirmarContraseña("");
  };
  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="login-container p-5 rounded">
          <h2 className="login-titulo">Crear Cuenta</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Nombre de Usuario:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu usuario"
                value={usuario}
                onChange={(evento) => setUsuario(evento.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce una contraseña segura"
                value={contraseña}
                onChange={(evento) => setContraseña(evento.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Vuelve a escribir la contraseña"
                value={confirmarContraseña}
                onChange={(evento) =>
                  setConfirmarContraseña(evento.target.value)
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              [Registrarse]
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p className="mt-2">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="small-link">
                Inicia sesión aquí
              </a>
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
