import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner';
import BannerBottom from '../components/BannerBottom';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />

            <div role="main" className="main">
                <Banner />
                <BannerBottom />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Home
