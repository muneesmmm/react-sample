import React from 'react';
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Landing from '../components/LandingPage/Landingpage'
import Footer from '../components/Footer/Footer'
import Bnnr from '../components/Banner/bnnr.png'
import Arrow from './Arrow';
import Service from '../components/LandingPage/Service';

function Home() {
    const data = 'Welcome To STS '
    const item = 'STS is a global software solutions provider in software development, mobile application development, web designing, graphic designing and digital marketing.'
    const link='/services'
    return (
        <div>
            <Header />
            <Banner data={data} item={item} img={Bnnr}/>
            <Landing />
            <Service></Service>
            <Arrow next={link}/>

            <Footer />
        </div>
    )
}
export default Home;