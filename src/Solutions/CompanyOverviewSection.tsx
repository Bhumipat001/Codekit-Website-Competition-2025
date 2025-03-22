import React from 'react';
import './css/CompanyOverviewSection.css';

interface CompanyOverviewSectionProps {
  style?: React.CSSProperties;
}

const CompanyOverviewSection: React.FC<CompanyOverviewSectionProps> = ({ style }) => {
  return (
    <section className="company-overview-section" style={style}>
      <div className="title-container">
        <h2 className="section-title">Ensome in numbers</h2>
        <div className="title-line"></div>
      </div>
      
      <div className="stats-container">
        <div className="stat-item">
          <p className="stat-description">Data analytics performed by Ensome's</p>
          <p className="stat-number">220</p>
        </div>
        
        <div className="stat-item">
          <p className="stat-description">Data management performed by Ensome's</p>
          <p className="stat-number">390</p>
        </div>
        
        <div className="stat-item">
          <p className="stat-description">Сustomers are satisfied with Ensome's work</p>
          <p className="stat-number">834+</p>
        </div>
        
        <div className="stat-item">
          <p className="stat-description">Projects implemented by Ensome</p>
          <p className="stat-number">1830+</p>
        </div>
      </div>
    </section>
  );
};


export default CompanyOverviewSection;

