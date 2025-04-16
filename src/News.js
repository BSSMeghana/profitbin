import React, { useRef, useState } from 'react';
import './News.css';

const newsData = [
  {
    image: 'https://images.firstpost.com/uploads/2025/04/Untitled-design-1-2025-04-5ba4b3a9770cef0e7b9f448a64bad987.jpg?im=FitAndFill=(596,336)',
    title: 'NASA offers $3M to recycle astronaut waste in space',
    info: 'A new recycling initiative launched to reduce space waste.',
    link: 'https://www.firstpost.com/explainers/nasa-3-million-reward-recycle-astronaut-waste-space-challenge-13879036.html',
  },
  {
    image: 'https://static.toiimg.com/thumb/msid-120164576,imgsize-121298,width-400,height-225,resizemode-72/Bihar-govt-to-launch-integrated-solid-waste-management-project-in-Patna-cluster.jpg',
    title: 'Bihar gov to launch solid waste management project in Patna',
    info: 'Patna set to implement a new waste management system.',
    link: 'https://timesofindia.indiatimes.com/city/patna/bihar-govt-to-launch-integrated-solid-waste-management-project-in-patna-cluster/articleshow/120164580.cms',
  },
  {
    image: 'https://img.etimg.com/thumb/msid-120195120,width-300,height-225,imgsize-24274,resizemode-75/indias-electronic-manufacturing-and-export-to-see-robust-growth-with-new-components-policy-report.jpg',
    title: 'Firms clash with govt over e-waste policy',
    info: 'India sees rise in e-waste amid electronics boom.',
    link: 'https://economictimes.indiatimes.com/industry/cons-products/electronics/from-daikin-to-samsung-companies-fight-modi-govt-over-e-waste-policy/articleshow/120195062.cms',
  },
  {
    image: 'https://static.toiimg.com/thumb/msid-120215726,imgsize-81276,width-400,height-225,resizemode-72/After-2-years-Manesar-restarts-door-to-door-waste-collection.jpg',
    title: 'Manesar resumes door-to-door waste collection',
    info: 'Manesar brings back doorstep waste pickup after 2 years.',
    link: 'https://timesofindia.indiatimes.com/city/gurgaon/after-2-years-manesar-restarts-door-to-door-waste-collection/articleshow/120215728.cms',
  },
];

const didYouKnowFacts = [
  {
    fact: "Recycling one aluminum can saves enough energy to run a TV for 3 hours!",
    icon: "♻️",
  },
  {
    fact: "It takes 500 years for a plastic bottle to decompose in a landfill.",
    icon: "🧴",
  },
  {
    fact: "Composting food waste reduces greenhouse gases significantly.",
    icon: "🌱",
  },
  {
    fact: "India generates over 3.2 million tons of e-waste annually.",
    icon: "📱",
  },
];

const News = () => {
  const scrollRef = useRef(null);
  

  return (
    <div className="news-container">
      <h2>Eco-Friendly Innovations & News</h2>
      <div
        className="news-scroll-wrapper"
        
      >

        <div className="news-scroll" ref={scrollRef}>
          {newsData.map((item, index) => (
            <div className="news-card" key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </a>
            </div>
          ))}
        </div>
        
      </div>

      {/* Did You Know Section */}
      <div className="did-you-know">
        <h2>🌿 Did You Know?</h2>
        <div className="facts-grid">
          {didYouKnowFacts.map((item, index) => (
            <div key={index} className="fact-card">
              <div className="fact-icon">{item.icon}</div>
              <p>{item.fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
