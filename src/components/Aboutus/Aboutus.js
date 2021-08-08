import React from 'react'

function Aboutus() {
    return (
        <div className="container">
            <div className="row pt-5">
                
                <div className="section-header">
                        <p>Who We Are</p>
                    </div>
            </div>
            <div className="row justify-content-center ">
                    <div className="col-md-6 order-1 p-3 mt-5" data-aos="zoom-out-top" data-aos-duration="1000"  >
                        
                        <p style={{ textAlign: "justify",fontSize:"18px",color:"GrayText" }}>
                        We work with you to design your future. To make it better. To let you wield the power to tame technology disruptions. Our application development service gives your applications the 
                        power of new technologies to make it future proof. Our technical expertise, domain insights and design-centric approach help us to create applications that enhance your business 
                        value. Our applications set the quality standard a notch higher with proven development methodologies under low-cost overheads.</p>
                    </div>
                    <div className="col-md-6 order-2" data-aos="zoom-out-bottom" data-aos-duration="3000"  >
                        <img className="p-2" src={'https://web-peppers.com/wp-content/uploads/2020/02/How-to-Hire-the-Best-Dedicated-Development-Team-768x469.jpg'} alt='web' style={{ width: "100%" }}></img>
                    </div>
                </div>
        </div>
    )
}

export default Aboutus
