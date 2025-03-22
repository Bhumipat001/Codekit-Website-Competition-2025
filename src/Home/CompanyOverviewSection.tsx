import React from 'react';
import './css/CompanyOverviewSection.css';

const CompanyOverviewSection: React.FC = () => {
  const stats = [
    {
      number: '1830+',
      label: 'Project executed'
    },
    {
      number: '220',
      label: 'Data analytics'
    },
    {
      number: '390',
      label: 'Data management'
    },
    {
      number: '834+',
      label: 'Satisfied customers'
    }
  ];

  return (
    <section className="company-overview">
      <div className="content">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="stat-container">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {index < stats.length - 1 && <div className="separator" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CompanyOverviewSection;

