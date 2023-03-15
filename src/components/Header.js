import logo from '../images/logo.png';
import '../css/css';
import '../css/bootstrap.min.css';
import '../css/animate.compat.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/magnific-popup.min.css';
import '../css/star-rating.min.css';
import '../css/theme.min.css';
import '../css/theme.css';
import '../css/theme-elements.css';
import '../css/theme-blog.css';
import '../css/demo-auto-services.css';
import '../css/skin-auto-services.css';
import '../css/custom.css';
import '../css/font-awesome.min.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <header id="header" style={{ height: "164px" }}>
        <div className="header-body header-body-bottom-border-fixed box-shadow-none border-top-0" style={{ top: "0px" }}>
          <div className="header-top header-top-small-minheight header-top-simple-border-bottom">
            <div className="container py-2">
              <div className="header-row justify-content-between">
                <div className="header-column col-auto px-0">
                  <div className="header-row">
                    <div className="header-nav-top">
                      <ul className="nav nav-pills position-relative">
                        <li className="nav-item d-none d-sm-block">
                          <span
                            className="d-flex align-items-center font-weight-medium ws-nowrap text-3 ps-0">
                            <a href="mailto:porto@domain.com" className="text-decoration-none text-color-dark text-color-hover-none">
                              <i className="icons fa fa-envelope-o font-weight-bold position-relative text-4 top-1 me-2"></i>
                              kitecareer@gmail.com</a></span>
                        </li>
                        <li
                          className="nav-item nav-item-left-border nav-item-left-border-remove nav-item-left-border-sm-show">
                          <span
                            className="d-flex align-items-center font-weight-medium text-color-dark ws-nowrap text-3">
                            <i className="icons fa fa-clock-o font-weight-bold position-relative text-4 top-1 me-2"
                              style={{ fontSize: '18px important' }}></i> Mon - Sat 9:00am -
                            6:00pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="header-column justify-content-end col-auto px-0 d-none d-md-flex">
                  <div className="header-row">
                    <nav className="header-nav-top">
                      <ul
                        className="header-social-icons social-icons social-icons-clean social-icons-icon-gray social-icons-medium custom-social-icons-divider">
                        <li className="social-icons-facebook">
                          <a href="\" target="_blank" title="Facebook"><i
                            className="fa fa-facebook" aria-hidden="true"></i> </a>
                        </li>
                        <li className="social-icons-twitter">
                          <a href="\" target="_blank" title="Twitter"><i
                            className="fa fa-twitter"></i> </a>
                        </li>
                        <li className="social-icons-linkedin">
                          <a href="\" target="_blank" title="Linkedin"><i
                            className="fa fa-linkedin"></i> </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column w-100">
                <div className="header-row justify-content-between">
                  <div className="header-logo z-index-2 col-lg-2 px-0">
                    <Link to="/">
                      <img src={logo} alt="Logo" style={{ width: "123", height: "48" }} />
                    </Link>
                  </div>
                  <div className="header-nav header-nav-links justify-content-end pe-lg-4 me-lg-3">
                    <div
                      className="header-nav-main header-nav-main-arrows header-nav-main-dropdown-no-borders header-nav-main-effect-3 header-nav-main-sub-effect-1">
                      <nav className="collapse">
                        <ul className="nav nav-pills" id="mainNav">
                          <li><Link to="/" className="nav-link">Home</Link></li>
                          <li><Link to="/about" className="nav-link">About</Link></li>
                          <li><Link to="/services" className="nav-link">Services</Link></li>
                          <li><Link to="/technology" className="nav-link">Technology</Link></li>
                          <li><Link to="/portfolio" className='nav-link'>Portfolio</Link></li>
                          <li><Link to="/contactus" className="nav-link">Contact</Link></li>
                        </ul>
                      </nav>


                    </div>
                  </div>
                  {/*  <ul className="header-extra-info custom-left-border-1 d-none d-xl-block">
                    <li className="d-none d-sm-inline-flex ms-0">
                      <div className="header-extra-info-icon">
                        <i
                          className="icons fa fa-phone text-3 text-color-dark position-relative top-3"></i>
                      </div>
                      <div className="header-extra-info-text line-height-2">
                        <span className="text-1 font-weight-semibold text-color-default">ENQUIRY
                          NOW</span>
                        <strong className="text-4"><a href="tel:+1234567890"
                          className="text-color-hover-primary text-decoration-none">+91 9498478472</a></strong>
                      </div>
                    </li>
                  </ul> */}
                  <div className="d-flex col-auto pe-0 ps-0 ps-xl-3">
                    <div className="header-nav-features ps-0 ms-1">
                      <div
                        className="header-nav-feature header-nav-features-search d-inline-flex position-relative top-3 border border-right-0 border-top-0 border-bottom-0 custom-remove-mobile-border-left px-4 me-2">
                        <a href="\#"
                          className="header-nav-features-toggle text-decoration-none"
                          data-focus="headerSearch">
                          <button type="button" className="btn btn-primary">Apply Job</button>
                        </a>
                        {/* <div className="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed border-radius-0"
                          id="headerTopSearchDropdown">
                          <form role="search"
                            action="https://www.okler.net/previews/porto/9.9.1/page-search-results.html"
                            method="get">
                            <div className="simple-search input-group">
                              <input className="form-control text-1 rounded" id="headerSearch"
                                name="q" type="search" value="" placeholder="Search..." />
                              <button className="btn" type="submit">
                                <i className="icons fa fa-search header-nav-top-icon"></i>
                              </button>
                            </div>
                          </form>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <button className="btn header-btn-collapse-nav ms-4" data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav">
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
