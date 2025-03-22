import React from 'react';
import './css/FeatureSection.css';
import BusinessAnalyticsPlatform from './assets/BusinessAnalyticsPlatform.png';
import DataSolutions from './assets/DataSolutions.png';

interface FeatureBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false
}) => {
  return (
    <div className={`feature-block-${isReversed ? 'reversed' : ''}`}>
      <div className="feature-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="learn-more">Learn more</button>
      </div>
      <div className="image-container">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "The newest business analytics platform",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      imageSrc: BusinessAnalyticsPlatform,
      imageAlt: "Business Analytics Platform"
    },
    {
      title: "Radically new data solutions",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      imageSrc: DataSolutions,
      imageAlt: "Data Solutions",
      isReversed: true
    }
  ];

  return (
    <section className="feature-section">
      {features.map((feature, index) => (
        <FeatureBlock key={index} {...feature} />
      ))}
    </section>
  );
};

export default FeatureSection;

