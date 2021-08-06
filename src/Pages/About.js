import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Bnnr from '../components/Banner/bnnr.png'
import Aboutus from '../components/Aboutus/Aboutus'
import Team from '../components/Aboutus/Team'
import Footer from '../components/Footer/Footer'
import Arrow from './Arrow'


function About() {
    const data = 'Welcome To STS '
    const item = 'STS is a global software solutions provider in software development, mobile application development, web designing, graphic designing and digital marketing.'
    const link='/services'

    return (
        <div>
            <Header/>
            <Banner data={data} item={item} img={Bnnr}/>
            <Aboutus/>
            <Team/>
            <Arrow next={link}/>
            <Footer/>
        </div>
    )
}

export default About
