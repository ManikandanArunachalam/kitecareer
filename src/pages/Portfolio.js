import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Tabs from "./Tab";
import Items from "./Item";
import Data from "./Data";
import Header from '../components/Header'
import Footer from '../components/Footer'


function Portfolio() {
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value) => {
        return value.category
    });
    const tabsData = ["all", ...new Set(categoryData)];

    const filterCategory = (category) => {
        if (category === "all") {
            setData(Data);
            return;
        }
        const filteredData = Data.filter((value) => {
            return value.category === category;
        })
        setData(filteredData);
    }

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
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Test */}

                <div className="container">
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                            <Items data={data} />
                        </div>
                        <div className="col-sm-1">

                        </div>
                    </div>

                </div>

                {/* <div className="container py-2">

                    <ul className="nav nav-pills sort-source sort-source-style-3 justify-content-center" data-sort-id="portfolio" data-option-key="filter" data-plugin-options="{'layoutMode': 'fitRows', 'filter': '*'}">
                        <li className="nav-item active" data-filter="*"><Link to="#" className="nav-link text-2-5 text-uppercase active" href="#">Show All</Link></li>
                        <li className="nav-item" data-filter=".websites"><Link to="#" className="nav-link text-2-5 text-uppercase" href="#">Websites</Link></li>
                        <li className="nav-item" data-filter=".logos"><Link to="#" className="nav-link text-2-5 text-uppercase" href="#">Logos</Link></li>
                        <li className="nav-item" data-filter=".brands"><Link to="#" className="nav-link text-2-5 text-uppercase" href="#">Brands</Link></li>
                        <li className="nav-item" data-filter=".medias"><Link to="#" className="nav-link text-2-5 text-uppercase" href="#">Medias</Link></li>
                    </ul>

                </div>

                <div className="ms-4 me-4 mt-4 pt-2">

                    <div className="sort-destination-loader sort-destination-loader-loaded">
                        <div className="row portfolio-list sort-destination" data-sort-id="portfolio" data-filter="*" style={{ position: 'relative', height: '540px' }}>

                            <div className="col-md-6 col-lg-1-5 isotope-item brands" style={{ position: 'absolute', left: '0px', top: '0px' }}>
                                <div className="portfolio-item">
                                    <Link to='#'>
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
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
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-1-5 isotope-item medias" style={{ position: 'absolute', left: '265px', top: '0px' }}>
                                <div className="portfolio-item">
                                    <a href="#">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={portfolio2} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">Bjmm</span>
                                                    <span className="thumb-info-type">Mobile App</span>
                                                </span>
                                                <span className="thumb-info-action">
                                                    <span className="thumb-info-action-icon bg-dark opacity-8"><i className="fa fa-plus"></i></span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-1-5 isotope-item logos" style={{ position: 'absolute', left: '530px', top: '0px' }}>
                                <div className="portfolio-item">
                                    <a href="#">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={portfolio3} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">DSR Construction</span>
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
                            <div className="col-md-6 col-lg-1-5 isotope-item websites" style={{ position: 'absolute', left: '795px', top: '0px' }}>
                                <div className="portfolio-item">
                                    <a href="#">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={portfolio4} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">Akil Consultancy</span>
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
                            <div className="col-md-6 col-lg-1-5 isotope-item logos" style={{ position: 'absolute', left: '1060px', top: '0px' }} >
                                <div className="portfolio-item">
                                    <a href="#">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={portfolio5} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">WonderArt</span>
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
                            <div className="col-md-6 col-lg-1-5 isotope-item brands" style={{ position: 'absolute', left: '0px', top: '270px' }}>
                                <div className="portfolio-item">
                                    <a href="#">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={portfolio6} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">BestVijay</span>
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
                            <div className="col-md-6 col-lg-1-5 isotope-item websites" style={{ position: 'absolute', left: '265px', top: '270px' }}>
                                <div className="portfolio-item">
                                    <a href="#">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={portfolio7} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">EERA Technology</span>
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
                            <div className="col-md-6 col-lg-1-5 isotope-item medias" style={{ position: 'absolute', left: '530px', top: '270px' }}>
                                <div className="portfolio-item">
                                    <a href="#">
                                        <span className="thumb-info thumb-info-lighten border-radius-0">
                                            <span className="thumb-info-wrapper border-radius-0">
                                                <img src={portfolio8} className="img-fluid border-radius-0" alt="" />

                                                <span className="thumb-info-title">
                                                    <span className="thumb-info-inner">TRANSCLOUD</span>
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
                        <div className="bounce-loader"><div className="bounce1"></div><div className="bounce2"></div><div className="bounce3"></div></div></div>
                </div> */}
                <Footer />
            </div>
        </div>
    )
}

export default Portfolio
