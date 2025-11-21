import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Components/ExampleCarouselImage";

export function CarouselFadeExample() {
  return (
    <Carousel fade className="glow-border m-3 mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public\imagenes\carrusel\carrusel-imagen-uno.jpg"
          alt="Gabinete Corsair"
        />
        <Carousel.Caption>
          <h3 className="tech-one"></h3>
          <p className="tech-one"></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public\imagenes\carrusel\carrusel-imagen-dos.jpg"
          alt="Monitor ACER"
        />
        <Carousel.Caption>
          <h3 className="tech-one"></h3>
          <p className="tech-one">
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public\imagenes\carrusel\carrusel-imagen-tres.jpg"
          alt="Mouse CORSAIR"
        />
        <Carousel.Caption>
          <h3 className="tech-one"></h3>
          <p className="tech-one">
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
