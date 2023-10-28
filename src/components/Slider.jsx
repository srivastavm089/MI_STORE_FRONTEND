import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { data } from "../data";
function Slider({ start }) {
  console.log(start);
  return (
    <Carousel>
      {start.map((item) => {
        console.log(item);
        return (
          <Carousel.Item>
            <img src={item} alt="logo" className="d-block w-100" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
