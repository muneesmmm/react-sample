import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
function Footer() {
    return (
      <footer id="footer" className="footer" data-aos="fade-up">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt="" />
                <span>Lorem</span>
              </a>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div className="social-links mt-3">
                <a href="https://twitter.com" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="https://facebook.com" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://instagram.com" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>
                <a href="https://linkedin.com" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></a>
              </div>
            </div>
  
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to={'/'}>Home</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to={'/aboutus'}>About us</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to={'/service'}>Services</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to={'/portfolio'}>Portfolio</Link></li>
              </ul>
            </div>
  
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i>Web Design</li>
                <li><i className="bi bi-chevron-right"></i>Web Development</li>
                <li><i className="bi bi-chevron-right"></i>Product Management</li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Abcd Street <br/>
                Abc abcd, AB 535022<br/>
                Asdf jklm <br/><br/>
                <strong>Phone:</strong> +91 9696964545<br/>
                <strong>Email:</strong> info@lorem.com<br/>
              </p>
  
            </div>
  
          </div>
        </div>
      </div>
  
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Lorem</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <Link to={'/'}>Lorem</Link>
        </div>
      </div>
    </footer>
    )
}

export default Footer
