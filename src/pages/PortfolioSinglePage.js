import React from 'react'
import PortfolioCarousel from '../components/PortfolioCarousel'
import portfolio1 from '../images/portfolio/portfolio1.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PortfolioSinglePage() {
  return (
    <div>
		<Header />
      <div role="main" className="main">
                <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 order-2 order-md-1 align-self-center p-static">
                                <h1 className="text-color-dark font-weight-bold">Portfolio</h1>
                            </div>
                            <div className="col-md-4 order-1 order-md-2 align-self-center">
                                <ul className="breadcrumb d-flex justify-content-md-end text-3-5">
                                    <li><a href="#\" className="text-color-default text-color-hover-primary text-decoration-none">HOME</a></li>
                                    <li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; Portfolio</li>
                                    <li className="active"> &nbsp; &nbsp; <i className='fa fa-chevron-right'></i> &nbsp; Single Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
					<div className="row featured-boxes-full featured-boxes-full-scale">
						<PortfolioCarousel />
					</div>
                    <div className="row pt-4 mt-2 mb-5">
						<div className="col-md-7 mb-4 mb-md-0">

							<h2 className="text-color-dark font-weight-normal text-5 mb-2">Project <strong className="font-weight-extra-bold">Description</strong></h2>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>

							<p>Donec volutpat nibh sit amet libero ornare non laoreet arcu luctus. Donec id arcu quis mauris euismod placerat sit amet ut metus. Sed imperdiet fringilla sem eget euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

							<hr className="solid my-5" />

							<strong className="text-uppercase text-1 me-3 text-dark float-start position-relative top-2">Share</strong>
							<ul className="social-icons">
								<li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook-f"></i></a></li>
								<li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
								<li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
							</ul>

						</div>
						<div className="col-md-5">
							<h2 className="text-color-dark font-weight-normal text-5 mb-2">Project <strong className="font-weight-extra-bold">Details</strong></h2>
							<ul className="list list-icons list-primary list-borders text-2">
								<li><i className="fa fa-caret-right left-10"></i> <strong className="text-color-primary">Client:</strong> Thedal</li>
								<li><i className="fa fa-caret-right left-10"></i> <strong className="text-color-primary">Date:</strong> January 2023</li>
								<li><i className="fa fa-caret-right left-10"></i> <strong className="text-color-primary">Skills:</strong> <a href="#" className="badge badge-dark badge-sm rounded-pill px-2 py-1 ms-1">HTML5</a><a href="#" className="badge badge-dark badge-sm rounded-pill px-2 py-1 ms-1">CSS3</a><a href="#" className="badge badge-dark badge-sm rounded-pill px-2 py-1 ms-1">Bootstrap</a><a href="#" className="badge badge-dark badge-sm rounded-pill px-2 py-1 ms-1">PHP</a></li>
								<li><i className="fa fa-caret-right left-10"></i> <strong className="text-color-primary">Project URL:</strong> <a href="https://www.thedal.co.in/" target="_blank" className="text-dark">https://www.thedal.co.in/</a></li>
							</ul>
						</div>
					</div>
				</div>
        </div>

        <section className="section section-height-3 bg-color-grey m-0 border-0">
				<div className="container py-4">
					<h4 className="mb-3 text-4 text-uppercase">Related <strong className="font-weight-extra-bold">Projects</strong></h4>
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-3 mb-4">
							<div className="portfolio-item">
								<a href="https://thedal.co.in/" target="_blank">
									<span className="thumb-info thumb-info-lighten thumb-info-no-borders border-radius-0">
										<span className="thumb-info-wrapper border-radius-0">
											<img src={portfolio1} className="img-fluid border-radius-0" alt="" />
											<span className="thumb-info-title">
												<span className="thumb-info-inner">Thedal</span>
												<span className="thumb-info-type">Website</span>
											</span>
											<span className="thumb-info-action">
												<span className="thumb-info-action-icon bg-dark opacity-8"><i className="fa fa-plus"></i></span>
											</span>
										</span>
									</span>
								</a>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 mb-4">
							<div className="portfolio-item">
								<a href="https://thedal.co.in/" target="_blank">
									<span className="thumb-info thumb-info-lighten thumb-info-no-borders border-radius-0">
										<span className="thumb-info-wrapper border-radius-0">
											<img src={portfolio1} className="img-fluid border-radius-0" alt="" />
											<span className="thumb-info-title">
												<span className="thumb-info-inner">Thedal</span>
												<span className="thumb-info-type">Website</span>
											</span>
											<span className="thumb-info-action">
												<span className="thumb-info-action-icon bg-dark opacity-8"><i className="fa fa-plus"></i></span>
											</span>
										</span>
									</span>
								</a>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 mb-4">
							<div className="portfolio-item">
								<a href="https://thedal.co.in/" target="_blank">
									<span className="thumb-info thumb-info-lighten thumb-info-no-borders border-radius-0">
										<span className="thumb-info-wrapper border-radius-0">
											<img src={portfolio1} className="img-fluid border-radius-0" alt="" />
											<span className="thumb-info-title">
												<span className="thumb-info-inner">Thedal</span>
												<span className="thumb-info-type">Website</span>
											</span>
											<span className="thumb-info-action">
												<span className="thumb-info-action-icon bg-dark opacity-8"><i className="fa fa-plus"></i></span>
											</span>
										</span>
									</span>
								</a>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 mb-4">
							<div className="portfolio-item">
								<a href="https://thedal.co.in/" target="_blank">
									<span className="thumb-info thumb-info-lighten thumb-info-no-borders border-radius-0">
										<span className="thumb-info-wrapper border-radius-0">
											<img src={portfolio1} className="img-fluid border-radius-0" alt="" />
											<span className="thumb-info-title">
												<span className="thumb-info-inner">Thedal</span>
												<span className="thumb-info-type">Website</span>
											</span>
											<span className="thumb-info-action">
												<span className="thumb-info-action-icon bg-dark opacity-8"><i className="fa fa-plus"></i></span>
											</span>
										</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
    </div>
  )
}

export default PortfolioSinglePage
