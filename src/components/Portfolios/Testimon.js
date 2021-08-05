import React from 'react'
import image from './user.png'
function testimon() {
    return (
        <div>
            <section id="testimonials" className="testimonials">
                <div className="container ">
                    <div className="col d-flex justify-content-center mt-5" style={{ fontFamily: 'cursive' }}>
                        <h1 style={{ textAlign: "center", fontWeight: "900" }}>What  they  are  saying  about  us</h1>
                    </div>
                    <div className="testimonials-slider swiper-container " >
                        <div className="row swiper-wrapper justify-content-center ">

                            <div className="col-md-4 swiper-slide " style={{ width: "400px" }} data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                <div className="testimonial-item">
                                    <p>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                    <div className="profile mt-auto">
                                        <img src={image} className="testimonial-img" alt="" />
                                        <h3>Saul Good</h3>
                                        {/* <h4>Ceo &amp; Founder</h4> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 swiper-slide" style={{ width: "400px" }} data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                <div className="testimonial-item">

                                    <p>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                    <div className="profile mt-auto">
                                        <img src={image} className="testimonial-img" alt="" />
                                        <h3>Goodman Saul  </h3>
                                        {/* <h4>Ceo &amp; Founder</h4> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 swiper-slide " style={{ width: "400px" }} data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                <div className="testimonial-item">
                                    <p>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                    <div className="profile mt-auto">
                                        <img src={image} className="testimonial-img" alt="" />
                                        <h3> Goodman</h3>
                                        {/* <h4>Ceo &amp; Founder</h4> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 swiper-slide" style={{ width: "400px" }} data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                <div className="testimonial-item">

                                    <p>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                    <div className="profile mt-auto">
                                        <img src={image} className="testimonial-img" alt="" />
                                        <h3>Saul</h3>
                                        {/* <h4>Ceo &amp; Founder</h4> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 swiper-slide " style={{ width: "400px" }} data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">
                                <div className="testimonial-item">
                                    <p>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                    <div className="profile mt-auto">
                                        <img src={image} className="testimonial-img" alt="" />
                                        <h3>Saul Goodman</h3>
                                        {/* <h4>Ceo &amp; Founder</h4> */}
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default testimon
