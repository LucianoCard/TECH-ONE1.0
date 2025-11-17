import { Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCarrito,
  eliminarProducto,
  vaciarCarrito,
} from "../../app/slices/carritoSlice";
import "./Carrito.css";

export function Carrito() {
  const { isOpen, items } = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  return (
    <Offcanvas
      show={isOpen}
      onHide={() => dispatch(toggleCarrito())}
      placement="end"
      className="carrito-panel"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div>
            {items.map((item) => (
              <div className="carrito-item" key={item.id}>
                <p className="carrito-item-nombre">
                  {`[ ${item.nombre} ${item.modelo} ]`}
                </p>
                <p className="carrito-item-cantidad">Cantidad: {item.cantidad}</p>
                <button
                  className="carrito-boton-eliminar"
                  onClick={() => dispatch(eliminarProducto(item.id))}
                >
                  Eliminar
                </button>
              </div>
            ))}

            <div className="carrito-acciones">
              <button className="carrito-boton">
                Comprar
              </button>
              <button
                className="carrito-boton carrito-boton-secundario"
                onClick={() => dispatch(vaciarCarrito())}
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}