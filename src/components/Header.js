import React from 'react';
import './Header.css';

const Header = ({ onNavigate }) => {
  return (
    <header className="header">
      <div className="logo">🗑️ProFitBIN</div>
      <nav className="nav">
        <ul>
          <li><a href="#" onClick={() => onNavigate('home')}>Home</a></li>
          <li><a href="#" onClick={() => onNavigate('services')}>Our Service</a></li>
          <li><a href="#" onClick={() => onNavigate('upload')}>Upload</a></li>
          <li><a href="#" onClick={() => onNavigate('analysis')}>Waste Analysis</a></li>
          <li><a href="#" onClick={() => onNavigate('profile')}>Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
