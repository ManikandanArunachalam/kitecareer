import React from 'react'
import { Link } from 'react-router-dom';
import square1 from '../images/generic-square-1.jpg';
import square2 from '../images/generic-square-2.jpg';
import square3 from '../images/generic-square-3.jpg';
import square4 from '../images/generic-square-4.jpg';
import client1 from '../images/thedallogo.png';
import client2 from '../images/bjmmlogo.png';
import client3 from '../images/dsrlogo.png';
import client4 from '../images/steellogo.png';
import client5 from '../images/nithishlogo.png';
import client6 from '../images/nulogo.png';
import ServiceCarousel from '../components/ServiceCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Services() {
    return (
        <div>
			<Header />
            <div role="main" className="main">
                <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                                <h1 className="text-color-dark font-weight-bold">Services</h1>
                            </div>
                            <div className="col-md-4 order-1 order-md-2 align-self-center">
                                <ul className="breadcrumb d-flex justify-content-md-end text-3-5">
                                    <li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
                                    <li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container py-5 my-5">
                    <div className="row mb-4 pb-2">
                        <div className="col">
                            <p className="text-4 font-weight-semibold mb-4 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300" style={{ animationDelay: "300ms" }}>KiteCareer will support to grow the business with the latest tools & technologies. we have continous learning strategy and to understand the business market needs and services.</p>
                            <p className="pb-1 mb-3 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500" style={{ animationDelay: "500ms" }}>Services include consulting, software development, systems integration, as well as hardware deployment and education. </p>
                            <p className="mb-1 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="700" style={{ animationDelay: "700ms" }}>As a whole, the broader market for IT services is made up of several segments, including outsourcing, managed services, security services, data management, and cloud computing.</p>
                        </div>
                    </div>
                    <div className="row row-gutter-sm mb-5 appear-animation animated fadeInUpShorter appear-animation-visible"
                        data-appear-animation="fadeInUpShorter" data-appear-animation-delay="750"
                        style={{ animationDelay: '750ms' }}>
                        <ServiceCarousel />
                    </div>
                </div>

                <section className="section border-0 m-0">
                    <div className="container pb-5 my-5">
                        <div className="row justify-content-center">
                            <div className="col text-center">
                                <h2 className="font-weight-bold text-color-dark line-height-1 mb-0">See What Clients Are Saying
                                </h2>
                                <div className="d-inline-block custom-divider divider divider-primary divider-small my-3">
                                    <hr className="my-0" />
                                </div>
                                <p className="font-weight-bold text-3-5 mb-1">We are very proud of the service we provide and
                                    stand by every product we carry.</p>
                                <p className="font-weight-light text-3-5 mb-0">Read our testimonials from our happy customers.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <TestimonialCarousel />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-height-3 bg-primary border-0 m-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xl-7 text-center text-lg-start mb-4 mb-lg-0">
                                {/* <h2
								className="text-color-light font-weight-medium text-3-5 line-height-2 line-height-sm-1 ls-0 mb-2 mb-lg-2">
								LOOKING FOR HONEST AND RELIABLE SERVICES?</h2> */}
                                <h3
                                    className="font-weight-bold text-color-light text-transform-none text-8 line-height-2 line-height-lg-1 mb-1">
                                    Talented individual with in-depth knowledge of designing and development.</h3>
                                <p className="font-weight-bold text-color-light text-4 opacity-7 mb-0">Make An Enquiry Today
                                    With Our Online Form</p>
                            </div>
                            <div className="col-lg-6 col-xl-5">
                                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                                    <div className="feature-box align-items-center mb-3 mb-lg-0">
                                        <div className="feature-box-icon bg-transparent">
                                            <i className="icons fa fa-phone text-6 text-color-light"></i>
                                        </div>
                                        <div className="feature-box-info line-height-2 ps-1">
                                            <span className="d-block text-1 font-weight-semibold text-color-light mb-1">CALL US
                                                NOW</span>
                                            <strong className="text-4-5"><a href="tel:+1234567890"
                                                className="text-color-light text-decoration-none">+91 9498478472</a></strong>
                                        </div>
                                    </div>
                                    <Link to="/"
                                        className="btn btn-light btn-outline custom-btn-border-radius font-weight-bold text-color-light text-color-hover-dark bg-color-hover-light btn-px-5 btn-py-3" target="_blank">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="lightbox"
                    data-plugin-options="{&#39;delegate&#39;: &#39;a&#39;, &#39;type&#39;: &#39;image&#39;, &#39;gallery&#39;: {&#39;enabled&#39;: true}, &#39;mainClass&#39;: &#39;mfp-with-zoom&#39;, &#39;zoom&#39;: {&#39;enabled&#39;: true, &#39;duration&#39;: 300}}">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-1.jpg">
                                    <img className="img-fluid rounded-0" src={square1} alt="" />
                                </a>
                            </div>
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-2.jpg">
                                    <img className="img-fluid rounded-0" src={square2} alt="" />
                                </a>
                            </div>
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-3.jpg">
                                    <img className="img-fluid rounded-0" src={square3} alt="" />
                                </a>
                            </div>
                            <div className="col-6 col-md-3 px-0">
                                <a className="d-inline-block zoom-image rounded-0"
                                    href="images/generic-square-4.jpg">
                                    <img className="img-fluid rounded-0" src={square4} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="shop section section-height-1 border-0 m-0">
                    <div className="container py-4">
                        <div className="row align-items-center text-center py-5">
                            <div className="col-sm-4 col-lg-2 mb-5 mb-lg-0">
                                <img src={client1} alt="" className="img-fluid" />
                            </div>
                            <div className="col-sm-4 col-lg-2 mb-5 mb-lg-0">
                                <img src={client2} alt="" className="img-fluid" style={{ maxWidth: '140px' }} />
                            </div>
                            <div className="col-sm-4 col-lg-2 mb-5 mb-lg-0">
                                <img src={client3} alt="" className="img-fluid" style={{ maxWidth: '140px' }} />
                            </div>
                            <div className="col-sm-4 col-lg-2 mb-5 mb-sm-0">
                                <img src={client4} alt="" className="img-fluid" style={{ maxWidth: '140px' }} />
                            </div>
                            <div className="col-sm-4 col-lg-2 mb-5 mb-sm-0">
                                <img src={client5} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
                            </div>
                            <div className="col-sm-4 col-lg-2">
                                <img src={client6} alt="" className="img-fluid" style={{ maxWidth: '100px' }} />
                            </div>
                        </div>
                        {/* <div className="products row row-gutter-sm mb-4 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="750" style="animation-delay: 750ms;">
							<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-1.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-2.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3 mb-4 mb-sm-0">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-3.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6">
								<div className="product mb-0">
									<div className="product-thumb-info border-0 mb-3">
										<div className="product-thumb-info-badges-wrapper">
											<span className="badge badge-ecommerce badge-danger">27% OFF</span>
										</div>
										<div className="addtocart-btn-wrapper">
											<a href="https://www.okler.net/previews/porto/9.9.1/shop-cart.html" className="text-decoration-none addtocart-btn" title="Add to Cart">
												<i className="icons icon-bag"></i>
											</a>
										</div>
										<a href="https://www.okler.net/previews/porto/9.9.1/ajax/demo-auto-services-product-quick-view.html" className="quick-view text-uppercase font-weight-semibold text-2">
											QUICK VIEW
										</a>
										<a href="https://www.okler.net/previews/porto/9.9.1/shop-product-sidebar-left.html">
											<div className="product-thumb-info-image bg-light">
												<img alt="" className="img-fluid" src="./Demo Auto Services _ Porto - Multipurpose Website Template_files/product-4.jpg">
											</div>
										</a>
									</div>
									<div className="d-flex justify-content-between">
										<div>
											<a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html#" className="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">CATEGORY</a>
											<h3 className="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="https://www.okler.net/previews/porto/9.9.1/demo-auto-services.html" className="text-color-dark text-color-hover-primary">Product Short Name</a></h3>
										</div>
									</div>
									<div title="Rated 5 out of 5">
										<input type="text" className="d-none" value="5" title="" data-plugin-star-rating="" data-plugin-options="{&#39;displayOnly&#39;: true, &#39;color&#39;: &#39;default&#39;, &#39;size&#39;:&#39;xs&#39;}">
									</div>
									<p className="price text-5 mb-3">
										<span className="sale text-color-dark font-weight-medium">49,00</span>
										<span className="amount">59,00</span>
									</p>
								</div>
							</div>
						</div> 
						<div className="row">
							<div className="col text-center">
								<a href="\" className="btn btn-primary custom-btn-border-radius font-weight-bold text-3 btn-px-5 btn-py-3 appear-animation animated fadeInUpShorterPlus appear-animation-visible" data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="800" style={{ animationDelay: '800ms' }}>VIEW ALL PRODUCTS</a>
							</div>
						</div> */}
                    </div>
                </section>
				<Footer />
            </div>
        </div>
    )
}

export default Services
