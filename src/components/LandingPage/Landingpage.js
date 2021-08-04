import React, { useEffect } from 'react'
import AOS from 'aos';
function Landingpage() {
        useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);
    return (
        <div class="container">
            
    
                <div class="section-header">
                        <p>Who We Are ....</p>
                    </div>
            
            <div class="row">
                <div class="col p-4" data-aos="fade-up">
                    <p style={{ textAlign: "justify", fontSize: "18px", color: 'GrayText' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p style={{ textAlign: "justify", fontSize: "18px", color: 'GrayText' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div class="row  justify-content-center" >
                <div class="col-md-4  p-3 bg-light" data-aos="fade-up" data-aos-duration="1000">
                    <img class="mt-3 mb-5" src={'https://www.websoullabs.com/assets/homesm.png'} alt="solutin" style={{ width: "150px", marginLeft: "100px" }}></img>

                    <h3>Why Lorem ipsum</h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum..</p>
                </div>
                <div class="col-md-4 p-3  " data-aos="fade-down" data-aos-duration="2000">
                    <img class="mt-3 mb-5" src={'https://www.websoullabs.com/assets/homeag.png'} alt='agail' style={{ width: "150px", marginLeft: "100px" }}></img>
                    <h3>Our Work Style</h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum..</p>
                </div>
                <div class="col-md-4 p-3  bg-light" data-aos="fade-up" data-aos-duration="3000">
                    <img class="mt-3 mb-5" src={'https://www.websoullabs.com/assets/homesc.png'} alt='agail' style={{ width: "200px", marginLeft: "100px" }}></img>
                    <h3>What we offer</h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum..</p>
                </div>
            </div>
        </div>

    )
}

export default Landingpage
