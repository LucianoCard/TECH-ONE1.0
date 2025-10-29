import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Components/ExampleCarouselImage";

export function CarouselFadeExample() {
  return (
    <Carousel fade className="glow-border m-3 mt-5">
      <Carousel.Item>
        <ExampleCarouselImage text="PC" />
        <Carousel.Caption>
          <h3 className="tech-one">PC Armadas!</h3>
          <p className="tech-one">Las mejores PC armadas!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Piezas" />
        <Carousel.Caption>
          <h3 className="tech-one">Piezas para equipos</h3>
          <p className="tech-one">Las mejores piezas para armar tu equipo!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Perifericos" />
        <Carousel.Caption>
          <h3 className="tech-one">Perifericos favoritos</h3>
          <p className="tech-one">
            Los mejores perifericos para tu comodidad!.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
