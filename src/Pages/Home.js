import React from 'react';
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Landing from '../components/LandingPage/Landingpage'
import Footer from '../components/Footer/Footer'
import Bnnr from '../components/Banner/bnnr.png'

function Home() {
    const data = 'Welcome To Lorem ipsum '
    const item = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <div>
            <Header />
            <Banner data={data} item={item} img={Bnnr}/>
            <Landing />
            <Footer />
        </div>
    )
}
export default Home;