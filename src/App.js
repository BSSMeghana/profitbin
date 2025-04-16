import React, { useState } from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload'; // Import ImageUpload component

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Track the current page

  const handleNavigation = (page) => {
    setCurrentPage(page); // Update the page on navigation
  };

  return (
    <div>
      <Header onNavigate={handleNavigation} />
      
      {/* Render different components based on the currentPage state */}
      {currentPage === 'home' && <div>Welcome to the homepage!</div>}
      {currentPage === 'upload' && <ImageUpload />}
      {currentPage === 'services' && <div>Our Services Page</div>}
      {currentPage === 'analysis' && <div>Waste Analysis Page</div>}
    </div>
  );
}

export default App;


