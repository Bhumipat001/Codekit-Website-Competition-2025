import React from 'react';
import './css/FooterSection.css';
import Logo from './assets/Logo.png';
import Facebook from './assets/Facebook.png';
import Twitter from './assets/Twitter.png';
import LinkedIn from './assets/LinkedIn.png';
import YouTube from './assets/YouTube.png';
import Dribbble from './assets/Dribbble.png';
import Behance from './assets/Behance.png';

interface FooterSectionProps {
  style?: React.CSSProperties;
}

const FooterSection: React.FC<FooterSectionProps> = ({ style }) => {
  return (
    <div className="footer-section" style={style}>
      <div className="footer-content">
        <div className="logo-section">
          <img src={Logo} alt="Logo" className="logo" />
          <p className="description">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi.
          </p>
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" className="social-icon" />
            <img src={Twitter} alt="Twitter" className="social-icon" />
            <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
            <img src={YouTube} alt="YouTube" className="social-icon" />
            <img src={Dribbble} alt="Dribbble" className="social-icon" />
            <img src={Behance} alt="Behance" className="social-icon" />
          </div>
        </div>

        <div className="links-section">
          <div className="quick-links">
            <h3>Quick link</h3>
            <a href="#">Home</a>
            <a href="#">Solutions</a>
            <a href="#">Blog</a>
            <a href="#">Contacts</a>
            <a href="#">Our team</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">FAQ</a>
          </div>

          <div className="service-links">
            <h3>Service</h3>
            <a href="#">Pages</a>
            <a href="#">Elements</a>
            <a href="#">FAQ</a>
            <a href="#">Pricing</a>
            <a href="#">Site map</a>
          </div>

          <div className="contact-info">
            <h3>Contact info</h3>
            <p>ensome@info.co.us</p>
            <p>+1 601-201-5580</p>
            <p>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="separator" />
        <div className="copyright-section">
          <p>Ensome© 2022 All Rights Reserved</p>
          <div className="legal-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

