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
            <div className="row  justify-content-center" >
                <div className="col-md-4  p-3 bg-light " data-aos="fade-up" data-aos-duration="1000">
                    <div className="d-flex justify-content-center">
                    <img className="mt-3 mb-5" src={'https://www.pngitem.com/pimgs/m/112-1127600_custom-software-development-company-mobile-web-app-development.png'} alt="solutin" style={{ height: "150px" }}></img>
                    </div>
                    <h3>Why Lorem ipsum</h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum..</p>
                </div>
                <div className="col-md-4 p-3  " data-aos="fade-down" data-aos-duration="2000">
                <div className="d-flex justify-content-center">

                    <img className="mt-3 mb-5" src={'https://github.com/muneesmmm/College-Works/blob/master/HTML/aglie.png?raw=true'} alt='agail' style={{ height: "150px"}}></img>
                    </div>
                    <h3>Our Work Style</h3>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum..</p>
                </div>
                <div className="col-md-4 p-3  bg-light" data-aos="fade-up" data-aos-duration="3000">
                <div className="d-flex justify-content-center">
                    <img className="mt-3 mb-5" src={'https://github.com/muneesmmm/College-Works/blob/master/HTML/wts.png?raw=true'} alt='agail' style={{ height: "150px" }}></img>
                    </div>
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
