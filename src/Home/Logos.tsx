import React from 'react';
import './css/Logos.css';
import Ensome from './assets/Ensome.png';

const ClientLogos: React.FC = () => {
  const logos = [
    { src: Ensome, alt: 'Client Logo 1' },
    { src: Ensome, alt: 'Client Logo 2' },
    { src: Ensome, alt: 'Client Logo 3' },
    { src: Ensome, alt: 'Client Logo 4' },
    { src: Ensome, alt: 'Client Logo 5' },
    { src: Ensome, alt: 'Client Logo 6' }
  ];

  return (
    <section className="client-logos">
      <div className="client-logos-container">
        {logos.map((logo, index) => (
          <div key={index} className="logo-wrapper">
            <img src={logo.src} alt={logo.alt} className="client-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;

