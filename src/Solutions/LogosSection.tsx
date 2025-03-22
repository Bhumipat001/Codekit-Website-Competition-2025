import React from 'react';
import './css/LogosSection.css';
import CompanyOverviewSection from './CompanyOverviewSection';
import Client1 from './assets/Client1.png';
import Client2 from './assets/Client2.png';
import Client3 from './assets/Client3.png';
import Client4 from './assets/Client4.png';
import Client5 from './assets/Client5.png';
import Client6 from './assets/Client6.png';

const ClientsLogosSection: React.FC = () => {
  const clientLogos = [
    { src: Client1, alt: 'Client 1' },
    { src: Client2, alt: 'Client 2' },
    { src: Client3, alt: 'Client 3' },
    { src: Client4, alt: 'Client 4' },
    { src: Client5, alt: 'Client 5' },
    { src: Client6, alt: 'Client 6' }
  ];

  return (
    <section className="clients-logos-section">
      <CompanyOverviewSection style={{ marginBottom: '40px' }} />
      <div className="clients-logos-container">
        {clientLogos.map((logo, index) => (
          <div key={index} className="logo-wrapper">
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="client-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsLogosSection;

