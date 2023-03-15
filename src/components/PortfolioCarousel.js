import React from 'react'
import "../components/ServiceCarouselCss.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../pages/Data"
import Slider from "react-slick";

function PortfolioCarousel() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const data = Data;
    return (
        <Slider key={data.id} {...settings}>
                {data.map((item, id) => (
                    <div key={id}>
                      <h1>{item.title}</h1>
                      {item.sliderimages.map((c, i) => (
                        <div key={i}>
                          <img src={c.carouselslideone} alt="Carousel Slider" />
                          <hr />
                        </div>
                      ))}
                    </div>
                  ))}
        </Slider>
    )
}

export default PortfolioCarousel;
