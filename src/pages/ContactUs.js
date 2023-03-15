import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Helmet} from "react-helmet";

function ContactUs() {
    return (
        <div>
            <Header />
            <div role="main" className="main">
                <div className='container-fluid'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0822961908734!2d77.30337651410468!3d8.964564392464787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429e12818cabb%3A0xca727402b1545c78!2s472%2C%20126%2C%20Railway%20Feeder%20Rd%2C%20Tenkasi%2C%20Tamil%20Nadu%20627811!5e0!3m2!1sen!2sin!4v1676730315217!5m2!1sen!2sin" title='contactUsMap' style={{ border: '0', width: '100%', height: '350px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
                <div className="container">

                    <div className="row py-4">
                        <div className="col-lg-6 contact_from">
                        <Helmet>
              <script src="../ajax-mail.js" type="text/javascript" />
            </Helmet>
                            <h2 className="font-weight-bold text-8 mt-2 mb-0">Contact Us</h2>
                            <form action="sendMail.php" method="POST" id="dreamit-form">
										<input className="form-control" type="hidden" name="email_for" placeholder="" value="contact" />
										<div className="row">
											<div className="col-lg-6">
												<div className="form_box mb-3">
                                                <label className="form-label mb-1 text-2">Full Name</label>
													<input className="form-control" type="text" name="name"
														placeholder="Your Name" required />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form_box mb-3">
                                                <label className="form-label mb-1 text-2">Email Address</label>
                                                <input className="form-control" type="email" name="email"
														placeholder="Your Email" required />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form_box mb-3">
                                                <label className="form-label mb-1 text-2">Phone Number</label>
                                                <input className="form-control" type="text" name="phone"
														placeholder="Phone Number" pattern="^[0-9]*$" required maxlength="10" minlength="1" />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form_box">
                                                <label className="form-label mb-1 text-2">Subject</label>
                                                    <input className="form-control" type="text" name="web"
														placeholder="Subject" required />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form_box">
                                                <label className="form-label mb-1 text-2">Message</label>
                                                <textarea className="form-control" name="message" id="message" cols="30"
														rows="5" placeholder="Your Message" required></textarea>
												</div>
												<div className="wow fadeInUp" data-wow-delay="1.5s" data-wow-duration="1s">
													<div className="quote_btn text_center pt-3">
														<button className="btn btn-primary btn-modern" type="submit">Send Message</button>
													</div>
												</div>
											</div>
										</div>
									</form>
									<div id="status"></div>

                        </div>
                        <div className="col-lg-6">

                            <div className="appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="800" style={{ animationDelay: '800ms' }}>
                                <h4 className="mt-2 mb-1">Our <strong>Office</strong></h4>
                                <ul className="list list-icons list-icons-style-2 mt-2">
                                    <li><i className="fa fa-map-marker top-6"></i>
                                        <strong className="text-dark">Address:</strong>
                                        <br /><strong className='text-dark'> Head Office: <br />
                                        </strong> 472/126J, Railway Feeder Road, Tenkasi 627811.
                                        <br /><strong className='text-dark'> Branch Office:<br />
                                        </strong> VKR complex, Behind bus stand, Surandai 627859.
                                        <br /> No.1, kuppuswamy Nayakkar Street, GST Main Road, Guduvanchery, Chennai 603202.</li>
                                    <li><i className="fa fa-phone top-6"></i> <strong className="text-dark">Phone:</strong> +91 9498478472</li>
                                    <li><i className="fa fa-envelope top-6"></i> <strong className="text-dark">Email:</strong> <a href="mailto:kitecareer@gmail.com">kitecareer@gmail.com</a></li>
                                </ul>
                            </div>

                            <div className="appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="950" style={{ animationDelay: '950ms' }}>
                                <h4 className="pt-5">Business <strong>Hours</strong></h4>
                                <ul className="list list-icons list-dark mt-2">
                                    <li><i className="fa fa-clock-o top-6"></i> Monday - Friday - 9am to 5pm</li>
                                    <li><i className="fa fa-clock-o top-6"></i> Saturday - 9am to 2pm</li>
                                    <li><i className="fa fa-clock-o top-6"></i> Sunday - Closed</li>
                                </ul>
                            </div>

                            {/* <h4 className="pt-5">Get in <strong>Touch</strong></h4>
                            <p className="lead mb-0 text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ContactUs
