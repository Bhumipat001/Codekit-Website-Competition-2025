import React from 'react';
import './css/FeaturesSection.styles.css';
import BusinessMeeting from './assets/BusinessMeeting.png';

const FeaturesSection: React.FC = () => {
  return (
    <div className="features-section">
      {}
      <div className="features-block-1">
        <div className="title-container">
          <h1>
            The <span className="highlight">newest</span><br />
            business analytics<br />
            platform
          </h1>
          <div className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </div>
          <button className="discover-button">
            Discover more
          </button>
        </div>
      </div>

      {/* Second Block */}
      <div className="features-block-2">
        <div className="image-container">
          <img src={BusinessMeeting} alt="Business meeting" />
        </div>
        <div className="content-container">
          <h2>Radically new solutions for data</h2>
          <p className="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <button className="learn-button">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;