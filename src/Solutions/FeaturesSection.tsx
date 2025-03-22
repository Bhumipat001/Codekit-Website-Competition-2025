import React from 'react';
import './css/FeaturesSection.styles.css';
import BusinessAnalytics from './assets/BusinessAnalytics.png';
import DataSolutions from './assets/DataSolutions.png';

interface FeaturesSectionProps {
  style?: React.CSSProperties;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ style }) => {
  return (
    <section className="features-section" style={style}>
      <div className="features-container">
        {}
        <div className="feature-block">
          <div className="feature-content">
            <div className="title-container">
              <h2>The newest business analytics platform</h2>
              <div className="blue-line"></div>
            </div>
            <p className="feature-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="feature-image">
            <img src={BusinessAnalytics} alt="Business Analytics" />
          </div>
        </div>

        {/* Second Feature Block */}
        <div className="feature-block">
          <div className="feature-image">
            <img src={DataSolutions} alt="Data Solutions" />
          </div>
          <div className="feature-content">
            <div className="title-container">
              <h2>Radically new solutions for data</h2>
              <div className="blue-line"></div>
            </div>
            <p className="feature-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

