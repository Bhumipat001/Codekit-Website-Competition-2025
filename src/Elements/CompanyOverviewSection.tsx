import React from 'react';
import './css/CompanyOverviewSection.css';
import ClientLogos from './assets/ClientLogos.png';

const CompanyOverviewSection: React.FC = () => {
  const stats = [
    {
      number: '1830+',
      label: 'Project executed'
    },
    {
      number: '834+',
      label: 'Satisfied customers'
    },
    {
      number: '390',
      label: 'Data management'
    }
  ];

  return (
    <section className="company-overview">
      <h2 className="company-overview__title">
        We provide services that guarantee your success
      </h2>
      
      <div className="company-overview__content">
        <div className="company-overview__stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="company-overview__description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, 
          totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis 
          quam finibus nec.
        </p>
      </div>

      <div className="company-overview__clients">
        <img src={ClientLogos} alt="Client logos" />
      </div>
    </section>
  );
};

export default CompanyOverviewSection;