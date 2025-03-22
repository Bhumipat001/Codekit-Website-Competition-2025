import React from 'react';
import './css/HeroSection.css';

import illustration from './assets/illustration.png';
import PlayIcon from './assets/PlayIcon2.png';

interface HeroSectionProps {
  title?: string;
  description?: string;
  onLearnMore?: () => void;
  onWatchDemo?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Find true power in your data with Ensome",
  description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  onLearnMore = () => {},
  onWatchDemo = () => {},
}) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="button-group">
            <button className="primary-button" onClick={onLearnMore}>
              Learn more
            </button>
            <button className="secondary-button" onClick={onWatchDemo}>
              <img src={PlayIcon} alt="play icon" />
              Watch the demo
            </button>
          </div>
        </div>
        <div className="hero-illustration">
          <img src={illustration} alt="data illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

