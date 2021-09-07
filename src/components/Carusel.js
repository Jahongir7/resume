import { Swiper, SwiperSlide } from "swiper/react";
import uzbekdevs from "../images/Screenshot_3.png";
import ecourse from "../images/Screenshot_1.png";
import showhouse from "../images/Screenshot_4.png";
import ussdmb from "../images/Screenshot_5.png";
import "./Carusel.css";
import SwiperCore, { Scrollbar, Autoplay } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

SwiperCore.use([Scrollbar, Autoplay]);

const Carusel = () => {
  return (
    <div className="container-port margin">
      <h1>MY PORTFOLIO</h1>
      <Swiper
        data-swiper-autoplay="3000"
        spaceBetween={50}
        slidesPerView={2.3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          hide: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="SlideItem">
            <img src={uzbekdevs} alt="" />
            <div className="middle">
              <div className="text">
                <a href="https://uzbekdevs.herokuapp.com" target="blank">
                  Open <i className="fas fa-link "></i>
                </a>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <div className="SlideItem">
            <img src={ecourse} alt="" />
            <div className="middle">
              <div className="text">
                <a href="https://ecourseuz.000webhostapp.com" target="blank">
                  Open <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <div className="SlideItem">
            <img src={showhouse} alt="" />
            <div className="middle">
              <div className="text">
                <a href="https://showhouse.netlify.app" target="blank">
                  Open <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <div className="SlideItem">
            <img src={ussdmb} alt="" />
            <div className="middle">
              <div className="text">
                <a href="https://ussdmb.netlify.app" target="blank">
                  Open <i className="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carusel;
