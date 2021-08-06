import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Serve.css'
function Service() {
    return (
        <section id="team" className="team">

            <div className="container">

                <header className="section-header">
                    <p>Our Main Core Services</p>
                </header>
                <div className="col p-4" data-aos="fade-up">
                    <p style={{ textAlign: "center", fontSize: "18px", color: 'GrayText' }}>
                        STS provides digital conversion services to drive their traditional applications to advanced technologies, thereby increasing productivity. We offer a broad collection of technology services to accelerate your business growth.
                    </p>
                </div>
                
                <div className="row gy-4 d-flex justify-content-center">
                
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-out-right" data-aos-duration="1000">
                        <div className="member">
                            <div className="member-img1 p-3">
                                <img data-aos="zoom-out-left" data-aos-duration="3000" src={'https://www.websoullabs.com/assets/homemob.png'} className="img-fluid" alt="" style={{ height: "100px" }} />

                            </div>
                            <div className="member-info">
                            <Link to='/services#mobile'> <h4>Mobile App Development</h4></Link>
                                <p>STS is the most trusted app developers in Kerala. We design and build high quality, custom mobile apps with
                                    attractive and functional user interfaces with maximum working efficiency guaranteed by our team.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-out-right" data-aos-duration="2000">
                        <div className="member">
                            <div className="member-img1 p-3">
                                <img data-aos="zoom-out-left" data-aos-duration="3000" src={'https://www.websoullabs.com/assets/images.png'} className="img-fluid" alt="" style={{ height: "100px" }} />

                            </div>
                            <div className="member-info">
                            <Link to='/services#web'> <h4>Web App Development service</h4></Link>
                                <p>STS have a team of well experienced and skilled developers with latest website building technologies to provide you the best service. 
                                    We work on your company’s goals and objectives for website development.</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-out-right" data-aos-duration="3000">
                        <div className="member">
                            <div className="member-img1 p-3">
                                <img data-aos="zoom-out-left" data-aos-duration="3000" src={'https://www.websoullabs.com/assets/imagecart.png'} className="img-fluid" alt="" style={{ height: "100px" }} />

                            </div>
                            <div className="member-info">
                            <Link to='/services#ecom'> <h4>E-commerce App Development</h4></Link>
                                <p>Delivering ideas into pleasing customer experiences through digital services. We let your products to reach a wider circle. With our Ecommerce development solution,
                                     you can explore limitless Innovate and Grow your business.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Service
