import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner from "../../../assets/banner/01.jpg";
import banner1 from "../../../assets/banner/02.jpg";
import banner2 from "../../../assets/banner/03.png";
import banner3 from "../../../assets/banner/04.jpg";
import banner4 from "../../../assets/banner/05.png";
import banner5 from "../../../assets/banner/06.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>
      <div>
        <img src={banner5} />
      </div>
    </Carousel>
  );
};

export default Banner;
