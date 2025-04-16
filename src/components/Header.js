import React from 'react';
import './Header.css';

const Header = ({ onNavigate }) => {
  return (
    <header className="header">
      <div className="logo">♻︎ profitBin</div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>
              Our Service
            </a>
          </li>
          <li>
            <a href="#upload" onClick={(e) => { e.preventDefault(); onNavigate('upload'); }}>
              Upload
            </a>
          </li>
          <li>
            <a href="#analysis" onClick={(e) => { e.preventDefault(); onNavigate('analysis'); }}>
              Waste Analysis
            </a>
          </li>
          <li>
            <a href="#profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
