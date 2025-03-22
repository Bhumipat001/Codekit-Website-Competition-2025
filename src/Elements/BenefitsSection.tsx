import React from 'react';
import './css/BenefitsSection.css';
import MachineLearning from './assets/MachineLearning.png';
import EmbedAnalytics from './assets/EmbedAnalytics.png';
import AccessControl from './assets/AccessControl.png';
import DataAnalytics from './assets/DataAnalytics.png';

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <div className="icon-container">
        <img src={icon} alt={title} width={45} height={45} />
      </div>
      <div className="text-container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: MachineLearning,
      title: 'Machine learning',
      description: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.'
    },
    {
      icon: EmbedAnalytics,
      title: 'Embed analytics',
      description: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.'
    },
    {
      icon: AccessControl,
      title: 'Access control',
      description: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.'
    },
    {
      icon: DataAnalytics,
      title: 'Data analytics',
      description: 'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-content">
        <div className="benefits-header">
          <h2>The benefits of Ensome</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

