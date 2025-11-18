import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Components/ExampleCarouselImage";

export function CarouselFadeExample() {
  return (
    <Carousel fade className="glow-border m-3 mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="/imagenes/gabinetes/corsair/icue-500x-rgb-mid-tower.jpg"
          alt="Gabinete Corsair"
        />
        <Carousel.Caption>
          <h3 className="tech-one">PC Armadas!</h3>
          <p className="tech-one">Las mejores PC armadas!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="public/imagenes/monitores/acer/v277e.jpg"
          alt="Monitor ACER"
        />
        <Carousel.Caption>
          <h3 className="tech-one">Comodidad!</h3>
          <p className="tech-one">
            Las mejores piezas para la comodidad del usuario!.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="public/imagenes/mouses/corsair/m75-wireless.jpg"
          alt="Mouse CORSAIR"
        />
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
