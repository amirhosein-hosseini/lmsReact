import React from "react";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

const Slider5 = ({children}) => {

  const slider = React.useRef(null);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
      return (
        <div className="slick-wrapper slider-5">
          <div className="slick-buttons-wrapper">
            <button className="prev" onClick={() => slider?.current?.slickPrev()}>
              <img src={"../../Images/left-black-arrow.png"} alt="icon"/>
            </button>
            <button className="next" onClick={() => slider?.current?.slickNext()}>
              <img src={"../../Images/right-black-arrow.png"} alt="icon"/>
            </button>
          </div>
          <Slider ref={slider} {...settings}>
            {children}
          </Slider>

        </div>
      );
}

export default Slider5;