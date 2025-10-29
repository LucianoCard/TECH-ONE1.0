import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Components/Home.jsx";
import { Productos } from "./Components/Paginas/Productos.jsx";
import { Ofertas } from "./Components/Paginas/Ofertas.jsx";
import { SobreNosotros } from "./Components/Paginas/SobreNosotros.jsx";
import { IniciarSesion } from "./Components/Paginas/IniciarSesion.jsx";
import { CrearCuenta } from "./Components/Paginas/CrearCuenta.jsx";
import { RecuperarContraseña } from "./Components/Paginas/RecuperarContraseña.jsx";
import { SobreEsteProyecto } from "./Components/Paginas/SobreEsteProyecto.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Sobre-Este-Proyecto",
    element: <SobreEsteProyecto />,
  },
  {
    path: "/Productos",
    element: <Productos />,
  },
  {
    path: "/Ofertas",
    element: <Ofertas />,
  },
  {
    path: "/Sobre-nosotros",
    element: <SobreNosotros />,
  },

  {
    path: "/login",
    element: <IniciarSesion />,
  },

  {
    path: "/registro",
    element: <CrearCuenta />,
  },

  {
    path: "/recuperar-contraseña",
    element: <RecuperarContraseña />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
