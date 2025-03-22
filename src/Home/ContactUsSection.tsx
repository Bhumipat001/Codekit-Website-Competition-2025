import React, { useState } from 'react';
import './css/ContactUsSection.css';

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    theme: '',
    message: ''
  });

  const [placeholders] = useState({
    name: 'Andrea',
    email: 'andrea@gmail.com',
    theme: 'Job',
    message: 'Your message'
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    theme: false,
    message: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInputFocus = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-us-section">
      <div className="contact-info">
        <div className="title-description">
          <h1>Left questions? Contacts us now for a free consultation and free trial!</h1>
          <h3>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</h3>
        </div>
        
        <div className="contacts">
          <div className="contact-item">
            <span className="label">Email address</span>
            <span className="value">ensome@info.co.us</span>
          </div>
          
          <div className="contact-item">
            <span className="label">Phone number</span>
            <span className="value">+1601-201-5580</span>
          </div>
          
          <div className="contact-item">
            <span className="label">Address</span>
            <span className="value">1642 Washington Avenue, Jackson, MS, Mississippi, 39201</span>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={touched.name ? formData.name : placeholders.name}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('name')}
              placeholder="Andrea"
            />
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={touched.email ? formData.email : placeholders.email}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('email')}
              placeholder="andrea@gmail.com"
            />
          </div>

          <div className="form-field">
            <label>Theme</label>
            <input
              type="text"
              name="theme"
              value={touched.theme ? formData.theme : placeholders.theme}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('theme')}
              placeholder="Job"
            />
          </div>

          <div className="form-field">
            <label>Message</label>
            <input
              type="text"
              name="message"
              value={touched.message ? formData.message : placeholders.message}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus('message')}
              placeholder="Your message"
            />
          </div>

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;