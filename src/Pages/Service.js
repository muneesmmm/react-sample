import React from 'react'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Bnnr from '../components/Banner/bnnr2.png'


function Service() {
    const data='Our Featured Services'
    const item='We thrive in an inspired work environment where design, technology & innovations are the driving forces behind the company. We are fueling success for our clients and happiness.'
    return (
        <div>
            <Header />
            <Banner  data={data} item={item} img={Bnnr}></Banner>
            <Services/>
            <Footer/>
        </div>
    )
}

export default Service
