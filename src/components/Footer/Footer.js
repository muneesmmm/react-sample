import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
function Footer() {
    return (
      <footer id="footer" class="footer" data-aos="fade-up">
      <div class="footer-top">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt="" />
                <span>Lorem</span>
              </a>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div class="social-links mt-3">
                <a href="https://twitter.com" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="https://facebook.com" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com" class="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></a>
                <a href="https://linkedin.com" class="linkedin"><i class="bi bi-linkedin bx bxl-linkedin"></i></a>
              </div>
            </div>
  
            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i> <Link to={'/'}>Home</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={'/aboutus'}>About us</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={'/service'}>Services</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={'/portfolio'}>Portfolio</Link></li>
              </ul>
            </div>
  
            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i>Web Design</li>
                <li><i class="bi bi-chevron-right"></i>Web Development</li>
                <li><i class="bi bi-chevron-right"></i>Product Management</li>
              </ul>
            </div>
  
            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
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
  
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>Lorem</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <Link to={'/'}>Lorem</Link>
        </div>
      </div>
    </footer>
    )
}

export default Footer
