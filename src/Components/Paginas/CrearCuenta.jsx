import "./CrearCuenta.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export function CrearCuenta() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!usuario || !email || !contraseña || !confirmarContraseña) {
      setMensajeError("Por favor, completa todos los campos.");
      return;
    }

    if (contraseña !== confirmarContraseña) {
      setMensajeError("Las contraseñas no coinciden.");
      return;
    }

    const usuarioNuevo = {
      nombre: usuario,
      email: email,
      password: contraseña,
      foto: "/imagenes/usuarios/avatar-default.png",
    };

    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioNuevo),
    })
      .then((response) => {
        if (response.ok) {
          setUsuario("");
          setEmail("");
          setContraseña("");
          setConfirmarContraseña("");

          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        setMensajeError(
          "No se pudo conectar con el servidor. Intente más tarde."
        );
      });
  };

  return (
    <main>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="login-container p-5 rounded">
          <h2 className="login-titulo">Crear Cuenta</h2>

          {mensajeError && (
            <Alert variant="danger" className="mt-3">
              {mensajeError}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Nombre de Usuario:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu usuario"
                value={usuario}
                onChange={(evento) => {
                  setUsuario(evento.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(evento) => {
                  setEmail(evento.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce una contraseña segura"
                value={contraseña}
                onChange={(evento) => {
                  setContraseña(evento.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
              <Form.Label>Confirmar Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Vuelve a escribir la contraseña"
                value={confirmarContraseña}
                onChange={(evento) => {
                  setConfirmarContraseña(evento.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              [Registrarse]
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p className="mt-2">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="small-link">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
