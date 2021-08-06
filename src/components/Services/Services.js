import React from 'react'

function Services() {
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                <div className="section-header">
                        <p>Our Services</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-4">
                    <p style={{ textAlign: "justify", fontSize: "18px", color: 'GrayText' }}>
                    Our web application development services build the finest web apps that are visually pleasing and feature-rich at the same time. We offer a wide range of services including web development, mobile development, SEO & digital marketing, graphic designing and complete E-Commerce services. Our developers, graphic designers and digital marketing executives collaborate with you to tell your stories in a surprising, fresh & interesting way that tickles the eye, mind & heart of your audience.
                    </p>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-6 order-1 p-3 bg-light" data-aos="fade-right">
                        <h3 style={{fontWeight:"700",color:"#012970"}}>Web Application Development</h3><hr/>
                        <p style={{ textAlign: "justify" }}>
                        We follow robust industry processes in order to deliver best services to our clients for their software Development needs. We make sure our processes are strictly followed and at same time are flexible enough to accommodate each of our client’s application requirements. Your website is the face of your business. Our professional web designers can make the unique and creative website which shows the credibility of your business and narrates your brand story</p>
                    </div>
                    <div className="col-md-6 order-2  bg-light">
                        <img className="p-2" src={'https://www.websoullabs.com/assets/service2.jpg'} alt='web' style={{ width: "100%" }}></img>
                    </div>
                </div>
                <div className="row justify-content-center ">
                <div className="col-md-6 order-3  bg-light">
                        <img className="p-2" src={'https://www.websoullabs.com/assets/service4.jpeg'} alt='web' style={{ width: "100%" }}></img>
                    </div>
                    <div className="col-md-6 order-4 p-3 bg-light" data-aos="fade-right" >
                        <h3 style={{fontWeight:"700",color:"#012970"}}>Android Application Development</h3><hr/>
                        <p style={{ textAlign: "justify" }}>
                        Apps are now a conventional, trusted way to deliver content and services. But in a crowded market, how does a mobile app become useful, relevant, and valued so it enchant and retains users? Apps provide opportunities to build around user needs and grow long-term and healthy relationships with loyal customers. Our inclusive range of custom Android app development services boosts your business with advanced technology and affordable cost and helps you to accomplish your goals.</p>
                    </div>
                    
                </div>
                <div className="row justify-content-center " >
                    <div className="col-md-6 order-1 p-3 bg-light" data-aos="fade-right" >
                        <h3 style={{fontWeight:"700",color:"#012970"}}>E-commerce Web Development</h3><hr/>
                        <p style={{ textAlign: "justify" }}>
                        We develop and design scalable websites with personalized and user-friendly features. These websites can give you a wide exposure for your business. By aligning to your business objectives, we aspire to deliver a solution that is dynamic, functional and tailored to your needs. Bring to us your most intricate business challenges, and we will turn them into real digital commerce breakthroughs.</p>
                    </div>
                    <div className="col-md-6 order-2  bg-light">
                        <img className="p-2" src={'https://www.websoullabs.com/assets/service5.jpg'} alt='web' style={{ width: "100%" }}></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Services
