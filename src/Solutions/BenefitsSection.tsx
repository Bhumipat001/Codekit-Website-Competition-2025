import React from 'react';
import './css/BenefitsSection.css';
import Benefits from './assets/Benefits.png';
import MachineLearning from './assets/MachineLearning.png';
import EmbedAnalytics from './assets/EmbedAnalytics.png';
import AccessControl from './assets/AccessControl.png';

interface BenefitsSectionProps {
  style?: React.CSSProperties;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ style }) => {
  return (
    <section className="benefits-section" style={style}>
      <div className="benefits-container">
        <div className="benefits-image">
          <img src={Benefits} alt="Benefits" />
        </div>
        <div className="benefits-content">
          <div className="benefits-title">
            <h2>The benefits of Ensome</h2>
            <div className="title-line"></div>
          </div>
          
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-header">
                <img src={MachineLearning} alt="Machine Learning" />
                <h3>Machine learning</h3>
              </div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-header">
                <img src={EmbedAnalytics} alt="Embed Analytics" />
                <h3>Embed analytics</h3>
              </div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-header">
                <img src={AccessControl} alt="Access Control" />
                <h3>Access control</h3>
              </div>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

