import React from 'react';
import './css/Footer.css';
import Logo from './assets/Logo.png';
import Facebook from './assets/Facebook.png';
import Twitter from './assets/Twitter.png';
import LinkedIn from './assets/LinkedIn.png';
import YouTube from './assets/YouTube.png';
import Dribbble from './assets/Dribbble.png';
import Behance from './assets/Behance.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src={Logo} alt="Logo" className="logo" />
          <p className="description">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </p>
          <div className="social-icons">
            <a href="#"><img src={Facebook} alt="Facebook" /></a>
            <a href="#"><img src={Twitter} alt="Twitter" /></a>
            <a href="#"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="#"><img src={YouTube} alt="YouTube" /></a>
            <a href="#"><img src={Dribbble} alt="Dribbble" /></a>
            <a href="#"><img src={Behance} alt="Behance" /></a>
          </div>
        </div>

        <div className="links-section">
          <div className="quick-links">
            <h3>Quick link</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Our team</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="service-links">
            <h3>Service</h3>
            <ul>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Elements</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Site map</a></li>
            </ul>
          </div>

          <div className="contact-info">
            <h3>Contact info</h3>
            <ul>
              <li><a href="mailto:ensome@info.co.us">ensome@info.co.us</a></li>
              <li><a href="tel:+16012015580">+1 601-201-5580</a></li>
              <li>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>Ensome© 2022 All Rights Reserved</p>
        </div>
        <div className="legal-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;