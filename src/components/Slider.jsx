import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "../style/slider.css";
import { data } from "../data";
function Slider({ start }) {
  
  return (
    <Carousel  className="width-full-slider">
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
