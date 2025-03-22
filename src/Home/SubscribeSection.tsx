import React, { useState } from 'react';
import './css/SubscribeSection.css';

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="subscribe-section">
      <div className="subscribe-content">
        <div className="title-description">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;

