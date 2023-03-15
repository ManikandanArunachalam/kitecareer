import React from 'react'
import { Link } from "react-router-dom"
import "./ServiceCarouselCss.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import service1 from '../images/service-small-1.jpg';
import service2 from '../images/service-small-2.jpg';
import service3 from '../images/service-small-3.jpg';
import service4 from '../images/service-small-4.jpg';
import service5 from '../images/service-small-1.jpg';
import service6 from '../images/service-small-2.jpg';

function ServiceCarousel() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      };
    
  return (
    <Slider {...settings}>
      <div>
      <Link to="/services"
                className="text-decoration-none">
                <div
                    className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
                    <div className="thumb-info-wrapper">
                        <img src={service1} className="img-fluid" alt="" />
                    </div>
                    <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">Web Development</h3>
                </div>
            </Link>
      </div>
      <div>
            <Link to="/services"
                className="text-decoration-none">
                <div
                    className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
                    <div className="thumb-info-wrapper">
                        <img src={service2} className="img-fluid" alt="" />
                    </div>
                    <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">Digital Marketing</h3>
                </div>
            </Link>
      </div>
      <div>
      <Link to="/services"
                className="text-decoration-none">
                <div
                    className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
                    <div className="thumb-info-wrapper">
                        <img src={service3} className="img-fluid" alt="" />
                    </div>
                    <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">Mobile APP Development</h3>
                </div>
            </Link>
      </div>
      <div>
      <Link to="/services"
                className="text-decoration-none">
                <div
                    className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
                    <div className="thumb-info-wrapper">
                        <img src={service4} className="img-fluid" alt="" />
                    </div>
                    <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">Data Analytics
                    </h3>
                </div>
            </Link>
      </div>
      <div>
      <Link to="/services"
                className="text-decoration-none">
                <div
                    className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
                    <div className="thumb-info-wrapper">
                        <img src={service5} className="img-fluid" alt="" />
                    </div>
                    <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">UI / UX Design
                    </h3>
                </div>
            </Link>
      </div>
      <div>
      <Link to="/services"
                className="text-decoration-none">
                <div
                    className="custom-thumb-info-style-1 thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-lighten">
                    <div className="thumb-info-wrapper">
                        <img src={service6} className="img-fluid" alt="" />
                    </div>
                    <h3 className="text-transform-none font-weight-bold text-5 mt-2 mb-0">Artificial Intelligence
                    </h3>
                </div>
            </Link>
      </div>
    </Slider>
  )
}

export default ServiceCarousel
