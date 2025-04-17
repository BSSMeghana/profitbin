import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      {/* Hero Image */}
      <img src="/img2.png" alt="happy recycle" className="services-image" />

      {/* Heading */}
      <h2>OUR SERVICES</h2>

      {/* Who Are Our Customers Section */}
      <div className="customers-section">
        <h3 className="customers-title">Who Are Our Customers?</h3>
        <p className="customers-description">
          We proudly serve a wide range of customers who are committed to responsible waste management:
        </p>

        <ul className="customers-list">
          <li>Companies: Manufacturing Units, Pharmacy, Textile, Wholesale, etc.</li>
          <li>Functional Halls</li>
          <li>Restaurants</li>
          <li>Educational Institutions</li>
          <li>Event Organizing Grounds</li>
        </ul>
      </div>

 {/* What We Do Section */}
 <div className="what-we-do-section">
        <h3 className="what-we-do-title">What We Do</h3>
        <p className="what-we-do-description">
        We make recycling rewarding. <br/>
        By collecting your recyclable waste, processing it responsibly, and creating valuable recycled products.  <br/> we not only protect the environment but also share the profits with you, because sustainability should benefit everyone.
        </p>
      </div>

{/* Get Connected Section */}
<div className="get-connected-section">
        <h3 className="get-connected-title">Get Connected with Ease</h3>
        <p className="get-connected-description">
          🚀 Scheduling Made Simple  
          Log in to our website and effortlessly schedule your waste pickup. Whether you're at home, in your office, or anywhere in between, waste management has never been easier!
        </p>
        
        <p className="get-connected-description">
          🔄 Find Nearby Recycling Units
          Our platform recommends trusted recycling units near you, making it convenient to find local centers for all your recyclable waste needs.
        </p>
      </div>
    

      {/* Section 1 Content */}
      <div className="services-section">
        <h3 className="main-title">♻️ Smart Recyclable Waste Collection & Disposal</h3>
        <h4 className="sub-title">🚪 Doorstep Pickup of Recyclable Waste</h4>

        <div className="points-container">
          <div className="point">
            <h5>1. Hassle-Free Collection</h5>
            <p>
              We provide hassle-free doorstep pickup for recyclable materials from our customers. Whether you're a business or part of a community initiative, our streamlined system guarantees timely and efficient collection tailored to your requirements.
            </p>
          </div>

          <div className="point">
            <h5>2. Bulk Waste Support</h5>
            <p>
              Handling large quantities? No problem! Our trained teams can collect, sort, and transport recyclable waste directly from our customers, whether they’re part of businesses, or located in remote areas.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 Content */}
      <div className="services-section">
        <h3 className="main-title">♻️ Recyclable Waste Disposal & Resource Recovery</h3>

        <div className="points-container">
          <div className="point">
            <h5>✅ 01. Safe Disposal of Mixed Recyclables</h5>
            <p>
              We ensure that all recyclable waste—be it plastics, paper, metals, glass, or textiles—is handled with care and processed through eco-friendly, government-authorized channels. Our goal is to reduce environmental harm while promoting reuse.
            </p>
          </div>

          <div className="point">
            <h5>🔄 02. Efficient Material Recovery & Recycling</h5>
            <p>
              Our smart systems help recover the maximum value from waste. Whether it's extracting metals, separating biodegradable items, or reclaiming usable plastics, we make sure every recyclable finds a new life—instead of ending up in a landfill.
            </p>
          </div>
        </div>
      </div> 
</div>

  );
};

export default Services;
