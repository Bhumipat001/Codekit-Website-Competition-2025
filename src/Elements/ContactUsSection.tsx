import React from 'react';
import './css/ContactUsSection.css';

interface ContactUsSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  title = 'Do you need help?',
  description = 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
  buttonText = 'Contact Us',
}) => {
  return (
    <div className="contact-us-section">
      <div className="contact-us-content">
        <h2 className="contact-us-title">{title}</h2>
        <p className="contact-us-description">{description}</p>
        <button className="contact-us-button" onClick={() => console.log('Contact button clicked')}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;