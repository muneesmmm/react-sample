import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Style.css'
function Footer() {
    return (
      <footer id="footer" class="footer" data-aos="fade-up">
      <div class="footer-top">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <img src={'https://github.com/muneesmmm/react-sample/blob/master/src/STS.png?raw=true'} alt="" />
                <span>STS</span>
              </a>
              <p> Global software solutions provider in software development, mobile application development, web designing, graphic designing and digital marketing.</p>
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
                <li><i class="bi bi-chevron-right"></i> <Link to={'/aboutus#top'}>About us</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={'/services#top'}>Services</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={'/portfolio#top'}>Portfolio</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={'/contact#top'}>Contact Us</Link></li>
              </ul>
            </div>
  
            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i><Link to={'/services#web'}>Web Design</Link></li>
                <li><i class="bi bi-chevron-right"></i><Link to={'/services#mob'}>mobile App Development</Link></li>
                <li><i class="bi bi-chevron-right"></i><Link to={'/services#ecom'}>E-com web development</Link></li>
              </ul>
            </div>
  
            <div class="col-lg-3 col-md-12 footer-contact text-md-start">
              <h4>Contact Us</h4>
              <p>
                Abcd Street <br/>
                Abc abcd, AB 535022<br/>
                Asdf jklm <br/><br/>
                <strong>Phone:</strong><a href="tel:// +91 9696964545">+91 9696964545</a><br/>
                <strong>Email:</strong><a href="mailto:sts@gmail.com"> info@sts.com</a><br/>
              </p>
  
            </div>
  
          </div>
        </div>
      </div>
  
      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong><span>STS</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <Link to={'/'}>STS</Link>
        </div>
      </div>
    </footer>
    )
}

export default Footer
