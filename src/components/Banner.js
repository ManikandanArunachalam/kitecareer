import background from '../images/bg.jpg';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className="section custom-section-background position-relative border-0 overflow-hidden m-0 p-0">
            <div className="position-absolute top-0 left-0 right-0 bottom-0 animated fadeIn"
                style={{ animationDelay: "600ms" }}>
                <div className="background-image-wrapper custom-background-style-1 position-absolute top-0 left-0 right-0 bottom-0 animated kenBurnsToRight"
        style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center right', animationDuration: '20s' }}>
                </div>
            </div>
            <div className="container position-relative py-sm-5 my-5">
                <svg className="custom-svg-1 d-none d-sm-block" version="1.1"
                 x="0px" y="0px" viewBox="0 0 649 578">
                    <path fill="#FFF" d="M-225.5,154.7l358.45,456.96c7.71,9.83,21.92,11.54,31.75,3.84l456.96-358.45c9.83-7.71,11.54-21.92,3.84-31.75
                    L267.05-231.66c-7.71-9.83-21.92-11.54-31.75-3.84l-456.96,358.45C-231.49,130.66-233.2,144.87-225.5,154.7z">
                    </path>
                    <path className="animated customLineAnim" fill="none" stroke="#1C5FA8" strokeWidth="1.5"
                        strokeMiterlimit="10" d="M416-21l202.27,292.91c5.42,7.85,3.63,18.59-4.05,24.25L198,603"
                        style={{ animationDelay: '300ms', animationDuration: '5s' }}></path>
                </svg>
                <div className="row mb-5 p-relative z-index-1">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="overflow-hidden mb-1">
                            <h2 className="font-weight-bold text-color-grey text-4-5 line-height-2 line-height-sm-7 mb-0 appear-animation animated maskUp appear-animation-visible"
                                data-appear-animation="maskUp" data-appear-animation-delay="800"
                                style={{ animationDelay: '800ms' }}>Kind of work is so Best & Good</h2>
                        </div>
                        <h1 className="text-color-dark font-weight-bold text-8 pb-2 mb-4 appear-animation animated fadeInUpShorter appear-animation-visible"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1100"
                            style={{ animationDelay: '1100ms' }}>Simplicity is the soul of efficiency</h1>
                        <Link to="/about"
                            className="btn btn-primary custom-btn-border-radius custom-btn-arrow-effect-1 font-weight-bold text-3 px-5 btn-py-3 appear-animation animated fadeInUpShorter appear-animation-visible"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1300"
                            style={{ animationDelay: '1300ms' }}>
                            GET STARTED
                            <svg className="ms-2" version="1.1" viewBox="0 0 15.698 8.706" width="17">
                                <polygon stroke="#FFF" strokeWidth="0.1" fill="#FFF"
                                    points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 ">
                                </polygon>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Banner;