import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { CarouselFadeExample } from "./Components/Carrusel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/CarruselSTYLE.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <div id="carrusel" className="border">
          <CarouselFadeExample></CarouselFadeExample>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
