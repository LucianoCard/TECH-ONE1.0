import { Offcanvas, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCarrito,
  eliminarProducto,
  vaciarCarrito,
} from "../../app/slices/carritoSlice";

export function Carrito() {
  const { isOpen, items } = useSelector((state) => state.carrito);
  const dispatch = useDispatch();

  return (
    <Offcanvas
      show={isOpen}
      onHide={() => dispatch(toggleCarrito())}
      placement="end"
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
              <div key={item.id}>
                <p>
                  <strong>{`${item.nombre} ${item.modelo}`}</strong>
                </p>
                <p>Cantidad: {item.cantidad}</p>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => dispatch(eliminarProducto(item.id))}
                >
                  Eliminar
                </Button>
                <hr />
              </div>
            ))}

            <div className="d-grid gap-2">
              <Button variant="primary">
                Comprar
              </Button>
              <Button
                variant="secondary"
                onClick={() => dispatch(vaciarCarrito())}
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}