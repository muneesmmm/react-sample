import React, { useEffect } from 'react'
import AOS from 'aos';
import './Style.css'
function Landingpage() {
        useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);
    return (
        <div className="container">
            
    
                <div className="section-header" style={{fontFamily:"monospace"}}>
                <p class="loading">Who We Are</p>
                    </div>
            
            <div className="row">
                <div className="col p-4" data-aos="fade-up">
                    <p style={{ textAlign: "justify", fontSize: "18px", color: 'GrayText' }}>
                    We work with you to design your future. To make it better. To let you wield the power to tame 
                    technology disruptions. Our application development service gives your applications the power 
                    of new technologies to make it future proof. Our technical expertise, domain insights and 
                    design-centric approach help us to create applications that enhance your business value. 
                    Our applications set the quality standard a notch higher with proven development methodologies 
                    under low-cost overheads.
                    </p>
                </div>
            </div>
            <div className="row  justify-content-center" >
                <div className="col-md-4  p-3 bg-light " data-aos="fade-up" data-aos-duration="1000">
                    <div className="d-flex justify-content-center">
                    <img className="mt-3 mb-5" src={'https://www.pngitem.com/pimgs/m/112-1127600_custom-software-development-company-mobile-web-app-development.png'} alt="solutin" style={{ height: "150px" }}></img>
                    </div>
                    <h3>Why STS </h3>
                    <p style={{ textAlign: "justify" }}>
                    We are a team of prominent website design company. We bring in the right mix of technology and 
                    industry expertise to achieve your business needs to support your business to improve performance 
                    and productivity by solving problems.</p>
                </div>
                <div className="col-md-4 p-3  " data-aos="fade-down" data-aos-duration="2000">
                <div className="d-flex justify-content-center">

                    <img className="mt-3 mb-5" src={'https://github.com/muneesmmm/College-Works/blob/master/HTML/aglie.png?raw=true'} alt='agail' style={{ height: "150px"}}></img>
                    </div>
                    <h3>Our Work Style</h3>
                    <p style={{ textAlign: "justify" }}>
                    We help you innovate quickly with our agile methodologies and procedures more on finding the best way 
                    to solve a problem rather than applying the same procedural approach to every situation. Trust forms 
                    the basis of any relationship.</p>
                </div>
                <div className="col-md-4 p-3  bg-light" data-aos="fade-up" data-aos-duration="3000">
                <div className="d-flex justify-content-center">
                    <img className="mt-3 mb-5" src={'https://github.com/muneesmmm/College-Works/blob/master/HTML/wts.png?raw=true'} alt='agail' style={{ height: "150px" }}></img>
                    </div>
                    <h3>What we offer</h3>
                    <p style={{ textAlign: "justify" }}>
                    We are the group of employees for your business through cutting-edge applications. Our team can 
                    easily slip into disorder or simply resentment for you as you break promises, forget what 
                    matters to.</p>
                </div>
            </div>
        </div>

    )
}

export default Landingpage
