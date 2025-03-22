import React from 'react';
import './css/ContactInformationSection.css';
import email from './assets/Email.png';
import phone from './assets/Phone.png';
import location from './assets/Location.png';

interface ContactInformationSectionProps {
  style?: React.CSSProperties;
}

const ContactInformationSection: React.FC<ContactInformationSectionProps> = ({ style }) => {
  return (
    <div className="contact-section" style={style}>
      <div className="contact-content">
        <div className="title-line">
          <h1>Contact information</h1>
          <div className="blue-line"></div>
        </div>
        <p className="description-explainer">
          Fill up the form and our Team will get back to you with 25 hours.
        </p>

        <div className="contacts">
          <div className="contact-item">
            <img src={email} alt="email" />
            <span>ensome@info.co.us</span>
          </div>
          <div className="contact-item">
            <img src={phone} alt="phone" />
            <span>+1 601-201-5580</span>
          </div>
          <div className="contact-item">
            <img src={location} alt="location" />
            <span>1642 Washington Ave, Jackson, MS</span>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Andrea" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="andrea@gmail.com" />
          </div>
        </div>
        <div className="form-group">
          <label>Theme</label>
          <input type="text" placeholder="Job" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <input type="text" placeholder="Your message" />
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};


export default ContactInformationSection;

