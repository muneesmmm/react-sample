import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Bnnr from '../components/Banner/bnnr2.png'
import Arrow from './Arrow'


function Service() {
    const link='/portfolio#top'
    const data='Our Featured Services'
    const item='We thrive in an inspired work environment where design, technology & innovations are the driving forces behind the company. We are fueling success for our clients and happiness.'
    return (
        <div>
            <Header id="top" />
            <Banner  data={data} item={item} img={Bnnr}></Banner>
            <Services/>
            <Arrow next={link}/>
            <Footer/>
        </div>
    )
}

export default Service
