import React from 'react';
import './css/Header.css';
import Ensome from './assets/Ensome.png';
import PlayIcon from './assets/PlayIcon.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src={Ensome} 
          alt="Logo" 
          className="logo"
          width={141}
          height={46}
        />
        
        <nav className="menu">
          <a href="./" className="menu-item active">Home</a>
          <a href="solutions" className="menu-item">Solutions</a>
          <a href="elements" className="menu-item">Elements</a>
        </nav>

        <button className="demo-button">
          <img 
            src={PlayIcon}
            alt="Play" 
            className="play-icon"
            width={24}
            height={24}
          />
          <span>Watch the demo</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

