import Header from "../Header";
import Footer from "../Footer";
import "./IniciarSesion.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function IniciarSesion() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!email || !contraseña) {
      setMensajeError("Por favor, completa todos los campos.");
      return;
    }

    const url = `http://localhost:3000/usuarios?email=${email}&password=${contraseña}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setMensajeError("");
          navigate("/");
        } else {
          setMensajeError("Email o contraseña incorrectos.");
        }
      })
      .catch((error) => {
        console.error("Error de solicitud:", error);
        setMensajeError(
          "No se pudo conectar con el servidor. Intente más tarde."
        );
      });
  };
  return (
    <>
      <Header />

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="login-container p-5 rounded">
          <h2 className="login-titulo">Iniciar Sesión</h2>
          <p className="login-subtitulo">Autentícate para continuar</p>

          {mensajeError && (
            <Alert variant="danger" className="mt-3">
              {mensajeError}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
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

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Introduce tu contraseña"
                value={contraseña}
                onChange={(evento) => {
                  setContraseña(evento.target.value);
                  setMensajeError("");
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              [Acceder]
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/recuperar-contraseña" className="small-link">
              ¿Olvidaste tu contraseña?
            </Link>
            <p className="mt-2">
              ¿No tienes cuenta?{" "}
              <Link to="/registro" className="small-link">
                ¡Regístrate!
              </Link>
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
