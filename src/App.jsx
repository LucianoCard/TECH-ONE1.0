import { Outlet } from "react-router-dom";
import { Carrito } from "./Components/Carrito/Carrito.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/CarruselSTYLE.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="contenedor-app">
      <Header />
      <Carrito />
      <main className="contenido-principal">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
