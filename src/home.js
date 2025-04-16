import React from 'react';
import './home.css';
import News from './News';

const Home = () => {
  return (
    <div className="home-container">
      <img src="/img1.png" alt="Waste Management" className="hero-image" />
      <News/>
    </div>
  );
};

export default Home;

