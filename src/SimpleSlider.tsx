import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

const SimpleSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time in ms between slides
    pauseOnHover: true, // Pause autoplay on hover
    arrows: false,
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="https://loremflickr.com/900/900/pepsi" alt="Slide 1" />
          </div>
          <div>
            <img src="https://loremflickr.com/900/900/lays" alt="Slide 2" />
          </div>
          <div>
            <img src="https://loremflickr.com/900/900/quaker" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
