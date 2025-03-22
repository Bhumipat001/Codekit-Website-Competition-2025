import React from 'react';
import './css/SubscribeSection.css';

interface SubscribeSectionProps {
  style?: React.CSSProperties;
}

const SubscribeSection: React.FC<SubscribeSectionProps> = ({ style }) => {
  return (
    <div className="subscribe-section" style={style}>
      <div className="subscribe-content">
        <div className="title-description">
          <h2>Subscribe to our newsletter</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div>
        
        <div className="subscribe-form">
          <div className="input-wrapper">
            <input 
              type="email" 
              placeholder="Your email"
              className="email-input"
            />
            <button className="send-button">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="separator-line"></div>
    </div>
  );
};

export default SubscribeSection;