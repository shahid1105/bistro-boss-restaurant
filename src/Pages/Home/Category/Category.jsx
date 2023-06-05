import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mb-8 mt-24">
      <SectionTitle
        subHeading={"From 11 AM to 10 PM"}
        heading={"Order Online"}></SectionTitle>
      <div className="mt-16">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className="text-4xl mb-8 text-white font-bold uppercase -mt-16 ms-14">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className="text-4xl mb-8 text-white font-bold uppercase -mt-16 ms-14">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className="text-4xl mb-8 text-white font-bold uppercase -mt-16 ms-14">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className="text-4xl mb-8 text-white font-bold uppercase -mt-16 ms-14">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
            <h3 className="text-4xl mb-8 text-white font-bold uppercase -mt-16 ms-14">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
