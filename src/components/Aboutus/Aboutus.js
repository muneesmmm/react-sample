import React from 'react'

function Aboutus() {
    return (
        <div class="container">
            <div class="row pt-5">
                
                <div class="section-header" style={{ fontFamily: 'cursive' }}>
                        <p>Who We Are</p>
                    </div>
            </div>
            <div class="row justify-content-center ">
                    <div class="col-md-6 order-1 p-3 mt-5" data-aos="zoom-out-right" data-aos-duration="1000"  >
                        
                        <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="col-md-6 order-2" data-aos="zoom-out-left" data-aos-duration="3000"  >
                        <img class="p-2" src={'https://web-peppers.com/wp-content/uploads/2020/02/How-to-Hire-the-Best-Dedicated-Development-Team-768x469.jpg'} alt='web' style={{ width: "100%" }}></img>
                    </div>
                </div>
        </div>
    )
}

export default Aboutus
