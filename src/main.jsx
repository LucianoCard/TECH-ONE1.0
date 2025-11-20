import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
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
    children: [
      {
        index: true,
        element: <Home />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
