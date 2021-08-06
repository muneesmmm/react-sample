import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Testimon from '../components/Portfolios/Testimon'
import Portfolios from '../components/Portfolios/Portfolios'
import Bnnr from '../components/Banner/bnnr3.png'
import Arrow from './Arrow'


function Portfolio() {
    const data = 'Let’s Build Something Great'
    const item = 'Our efforts - designed with skill & quality. Offering you the immense scope of solutions implemented by us with the high-quality standard.'
    const link='/contact#top'
    return (
        <div class="">
            <Header id="top" />
            <Banner  data={data} item={item} img={Bnnr}></Banner>          
            <Portfolios />
            <Testimon/>
            <Arrow next={link}/>
            <Footer/>
        </div>
    )
}

export default Portfolio
