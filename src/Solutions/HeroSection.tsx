import React from 'react';
import './css/HeroSection.css';
import Logo from './assets/Logo.png';
import Play from './assets/Play.png';
import PlayWhite from './assets/PlayWhite.png';

interface HeroSectionProps {
  style?: React.CSSProperties;
}

const HeroSection: React.FC<HeroSectionProps> = ({ style }) => {
  return (
    <div className="hero-section" style={style}>
      <nav className="header">
        <div className="header-content">
          <img src={Logo} alt="Logo" className="logo" />
          
          <div className="menu">
            <a href="./" className="menu-item">Home</a>
            <a href="solutions" className="menu-item active">Solutions</a>
            <a href="elements" className="menu-item">Elements</a>
          </div>
          
          <button className="demo-button">
            <img src={Play} alt="Play" className="play-icon" />
            Watch the demo
          </button>
        </div>
        <div className="header-line"></div>
      </nav>

      <div className="hero-content">
        <div className="left-content">
          <h1>Find true power in your data with Ensome</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto.
          </p>
          <div className="button-group">
            <button className="learn-more">Learn more</button>
            <button className="watch-demo">
              <img src={PlayWhite} alt="Play" className="play-icon" />
              Watch the demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HeroSection;

