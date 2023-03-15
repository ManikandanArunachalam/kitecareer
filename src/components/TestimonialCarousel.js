import React from 'react'
import "./ServiceCarouselCss.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TestimonialCarousel() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      };
    
  return (
    <Slider {...settings}>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed eget risus porta, tincidunt turpis at,
                                interdum tortor. Suspendisse potenti. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.</p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">John
                                    Doe</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed eget risus porta, tincidunt turpis at,
                                interdum tortor. Suspendisse potenti. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.</p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">John
                                    Doe</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed eget risus porta, tincidunt turpis at,
                                interdum tortor. Suspendisse potenti. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.</p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">John
                                    Doe</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed eget risus porta, tincidunt turpis at,
                                interdum tortor. Suspendisse potenti. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.</p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">John
                                    Doe</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed eget risus porta, tincidunt turpis at,
                                interdum tortor. Suspendisse potenti. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.</p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">John
                                    Doe</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div>
            <div className="card custom-border-radius-1">
                <div className="card-body">
                    <div
                        className="custom-testimonial-style-1 testimonial testimonial-style-2 testimonial-with-quotes testimonial-remove-right-quote text-center mb-0">
                        <blockquote>
                            <p
                                className="text-color-dark text-3 font-weight-light px-0 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed eget risus porta, tincidunt turpis at,
                                interdum tortor. Suspendisse potenti. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.</p>
                        </blockquote>
                        <div className="testimonial-author">
                            <p><strong className="font-weight-extra-bold">John
                                    Doe</strong></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>

    </Slider>
  )
}

export default TestimonialCarousel
