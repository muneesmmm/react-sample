import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'
import 'remixicon/fonts/remixicon.css'
import './glightbox.min.css'
import AOS from 'aos';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (

        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-black clean-navbar p-2" >
            <div className="container"><Link className="navbar-brand logo" to={'/'}><span>Lorem</span></Link>
            <ul className="nav">
                <li className="nav-item"> <a href="https://twitter.com" className="twitter"><i className="bi bi-twitter"></i></a></li>
                <li className="nav-item"><a href="https://facebook.com" className="facebook"><i className="bi bi-facebook"></i></a></li>
                <li className="nav-item"><a href="https://instagram.com" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a></li>
                <li className="nav-item"><a href="https://linkedin.com" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></a></li>
                </ul>
        
            <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav ml-auto mb-2">
                        <li className="nav-item"><Link className="nav-link active" to={'/'}>Company</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/services'}>Services</Link>
                        </li>
                        <li className="nav-item"><Link  className="nav-link" to={'/portfolio'}>Portfolio</Link></li>
                        <li className="nav-item"><Link  className="nav-link" to={'/aboutus'}>About Us</Link> </li>
                        <li className="nav-item"><Link  className="nav-link" to={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;