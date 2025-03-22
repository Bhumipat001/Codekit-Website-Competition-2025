import React from 'react';
import './css/Header_HeroSection.css';
import LogoBlue from './assets/LogoBlue.png';
import Play from './assets/Play.png';
import Hero from './assets/Hero.png';

const Header_HeroSection: React.FC = () => {
  return (
    <div className="header-hero-container">
      {}
      <header className="header">
        <div className="header-content">
          <img src={LogoBlue} alt="Logo" className="logo" />
          
          <nav className="menu">
            <a href="./" className="menu-item">Home</a>
            <a href="solutions" className="menu-item">Solutions</a>
            <a href="elements" className="menu-item active">Elements</a>
          </nav>
          
          <button className="demo-button">
            <img src={Play} alt="Play" className="play-icon" />
            Watch the demo
          </button>
        </div>
      </header>

      {}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find true power in your data with <span className="highlight">Ensome</span></h1>
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </p>
          </div>
          
          <div className="learn-more-container">
            <button className="learn-more-button">
              <div className="white-circle"></div>
              <div className="blue-circle"></div>
              <div className="border-circle"></div>
              <span>Learn more</span>
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={Hero} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Header_HeroSection;