import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { añadirProducto } from "../app/slices/carritoSlice";
import { Button } from "react-bootstrap";

export function ShowProducts() {
  const [productos, setProductos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <div className="catalogo-contenedor">
      <h1>Nuestros Productos</h1>
      <hr />
      <div className="catalogo-grilla">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-tarjeta">
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h5 className="producto-nombre">{producto.nombre}</h5>
            <p className="producto-precio">${producto.precio}</p>
            <Button
              variant="primary"
              onClick={() => dispatch(añadirProducto(producto))}
            >
              Añadir al carrito
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}