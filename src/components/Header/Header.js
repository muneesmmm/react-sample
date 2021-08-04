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

        <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-black clean-navbar p-2" >
            <div class="container"><Link class="navbar-brand logo" to={'/'}><span>Lorem</span></Link>
            <ul class="nav">
                <li class="nav-item"> <a href="https://twitter.com" class="twitter"><i class="bi bi-twitter"></i></a></li>
                <li class="nav-item"><a href="https://facebook.com" class="facebook"><i class="bi bi-facebook"></i></a></li>
                <li class="nav-item"><a href="https://instagram.com" class="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></a></li>
                <li class="nav-item"><a href="https://linkedin.com" class="linkedin"><i class="bi bi-linkedin bx bxl-linkedin"></i></a></li>
                </ul>
        
            <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav ml-auto mb-2">
                        <li class="nav-item"><Link class="nav-link active" to={'/'}>Company</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/services'}>Services</Link>
                        </li>
                        <li class="nav-item"><Link  class="nav-link" to={'/portfolio'}>Portfolio</Link></li>
                        <li class="nav-item"><Link  class="nav-link" to={'/aboutus'}>About Us</Link> </li>
                        <li class="nav-item"><Link  class="nav-link" to={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;