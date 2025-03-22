import React from 'react';
import './css/AdvantagesSection.css';
import machineLearningIcon from './assets/MachineLearning.png';
import embedAnalyticsIcon from './assets/EmbedAnalytics.png';
import accessControlIcon from './assets/AccessControl.png';

interface AdvantageCardProps {
  icon: string;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description }) => {
  return (
    <div className="advantage-card">
      <div className="icon-container">
        <img src={icon} alt={title} width={42} height={42} />
      </div>
      <div className="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: machineLearningIcon,
      title: 'Machine learning',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'
    },
    {
      icon: embedAnalyticsIcon,
      title: 'Embed analytics',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'
    },
    {
      icon: accessControlIcon,
      title: 'Access control',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.'
    }
  ];

  return (
    <section className="advantages-section">
      <div className="advantages-content">
        <div className="title-section">
          <h1>Why our clients<br />chosse Ensome?</h1>
          <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div className="advantages-cards">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

