import React from 'react';
import './css/FooterSection.css';
import Ensome from './assets/Ensome.png';
import ArrowRight from './assets/ArrowRight.png';
import ArrowRight2 from './assets/ArrowRight2.png';
import FacebookIcon from './assets/Facebook.png';
import TwitterIcon from './assets/Twitter.png';
import LinkedInIcon from './assets/LinkedIn.png';
import YouTubeIcon from './assets/YouTube.png';
import DribbbleIcon from './assets/Dribbble.png';
import BehanceIcon from './assets/Behance.png';

const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <img src={Ensome} alt="Logo" className="footer-logo" />
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>About</h3>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Solutions</a>
            </div>
            
            <div className="footer-column">
              <h3>Information</h3>
              <a href="#">Contacts</a>
              <a href="#">Our team</a>
              <a href="#">Blog</a>
              <a href="#">FAQ</a>
            </div>
            
            <div className="footer-column">
              <h3>Service</h3>
              <a href="#">Pages</a>
              <a href="#">Elements</a>
              <a href="#">Site map</a>
              <a href="#">Pricing</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        <div className="footer-separator" />
        
        <div className="footer-middle">
          <div className="contact-infos">
            <h3>Contacts</h3>
            <div className="contact-details">
              <p>+1 601-201-5580</p>
              <a href="#" className="arrow-link">
                <span>ensome@info.co.us</span>
                <img src={ArrowRight} alt="arrow" />
              </a>
            </div>
          </div>
          
          <div className="address-info">
            <p>1642 Washington Avenue, Jackson, MS, 39201</p>
            <a href="#" className="arrow-link">
              <span>Driving derections</span>
              <img src={ArrowRight} alt="arrow" />
            </a>
          </div>
          
          <div className="social-links">
            <h3>Social</h3>
            <div className="social-icons">
              <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
              <a href="#"><img src={LinkedInIcon} alt="LinkedIn" /></a>
              <a href="#"><img src={YouTubeIcon} alt="YouTube" /></a>
              <a href="#"><img src={DribbbleIcon} alt="Dribbble" /></a>
              <a href="#"><img src={BehanceIcon} alt="Behance" /></a>
            </div>
          </div>
        </div>

        <div className="footer-separator" />
        
        <div className="footer-bottom">
          <div className="footer-links-bottom">
            <a href="#" className="arrow-link">
              <span>Privacy policy</span>
              <img src={ArrowRight2} alt="arrow" />
            </a>
            <a href="#" className="arrow-link">
              <span>Terms of us</span>
              <img src={ArrowRight2} alt="arrow" />
            </a>
          </div>
          <p className="copyright">© 2022 Ensome. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

