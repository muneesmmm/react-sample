import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import 'remixicon/fonts/remixicon.css'
import './glightbox.min.css'
import AOS from 'aos';
import logo from '../STS.png'
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-black clean-navbar p-2" >
            
            <div className="container-fluid"><Link to={'/'} className="logo d-flex align-items-center">
        <img src={logo} alt=""/>
        <span>STS</span></Link>
                <div class="social-links mt-3">
                    <a href="https://twitter.com" className="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="https://facebook.com" className="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="https://instagram.com" className="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></a>
                    <a href="https://linkedin.com" className="linkedin"><i class="bi bi-linkedin bx bxl-linkedin"></i></a>
                </div>

                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav ml-auto mb-2">
                        <li className="nav-item"><Link className="nav-link active" to={'/'}>&nbsp;&nbsp;Company&nbsp;&nbsp;</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={'/aboutus'}>&nbsp;&nbsp;About Us&nbsp;&nbsp;</Link> </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/services'}>&nbsp;&nbsp;Services&nbsp;&nbsp;</Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to={'/portfolio'}> &nbsp;&nbsp;Portfolio&nbsp;&nbsp;</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={'/contact'}>&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;