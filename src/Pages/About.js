import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Bnnr from '../components/Banner/bnnr.png'
import Aboutus from '../components/Aboutus/Aboutus'
import Team from '../components/Aboutus/Team'
import Footer from '../components/Footer/Footer'


function About() {
    const data = 'Welcome To Lorem ipsum '
    const item = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return (
        <div>
            <Header/>
            <Banner data={data} item={item} img={Bnnr}/>
            <Aboutus/>
            <Team/>
            <Footer/>
        </div>
    )
}

export default About
