import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { añadirProducto } from "../../app/slices/carritoSlice";

const CANTIDAD_OFERTAS = 6;

export function Ofertas() {
  const dispatch = useDispatch();
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((datosDelServidor) => datosDelServidor.json())
      .then((productos) => {
        if (productos && productos.length > 0) {
          const ofertas = obtenerOfertasAleatorias(productos);
          SetofertasAleatorias(ofertas);
        }
      });
  }, []);

  let [ofertasAleatorias, SetofertasAleatorias] = useState([]);
  const obtenerOfertasAleatorias = (productos) => {
    const productosClonados = [...productos];
    const ofertasSeleccionadas = [];
    const limite = Math.min(CANTIDAD_OFERTAS, productosClonados.length);
    for (let i = 0; i < limite; i++) {
      const indiceAleatorio = Math.floor(
        Math.random() * productosClonados.length
      );

      ofertasSeleccionadas.push(productosClonados[indiceAleatorio]);
      productosClonados.splice(indiceAleatorio, 1);
    }
    return ofertasSeleccionadas;
  };

  const handleAgregar = (item) => {
    dispatch(añadirProducto(item));
    setMensajeAlerta("Producto añadido correctamente");
    setTimeout(() => {
      setMensajeAlerta("");
    }, 3000);
  };

  return (
    <main>
      {mensajeAlerta && (
        <Alert
          variant="success"
          className="alerta-flotante alerta-personalizada"
        >
          {mensajeAlerta}
        </Alert>
      )}
      <h1 className=" logo-brillo d-flex justify-content-center glow-border mt-4 p-4">
        Ofertas del dia!
      </h1>
      <div className="row justify-content-center pt-5 g-4">
        {ofertasAleatorias.map((item) => (
          <div
            key={item.id}
            className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"
          >
            <Card
              style={{ width: "18rem" }}
              className="navbar-fuente border-0 producto-card"
            >
              <Card.Img src={item.imagen} className="producto-imagen" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-center logo-brillo text-center">
                  {`${item.nombre} ${item.modelo}`}
                </Card.Title>
                <Card.Text className="text-center mb-3 producto-descripcion">
                  {item.descripcion}
                </Card.Text>
                {item.precio !== undefined && (
                  <div className="text-center precio-novedad mb-3">
                    Precio: ${item.precio}
                  </div>
                )}
                <div className="d-flex justify-content-center mt-auto">
                  <Button
                    className="botonesActivar logo-brillo botones producto-boton fuente-principal"
                    onClick={() => handleAgregar(item)}
                  >
                    Agregar al carrito <i className="bi bi-cart"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}
