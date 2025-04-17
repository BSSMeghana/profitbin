import React, { useState } from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import Home from './home'; // Capitalized correctly
import Services from './services'; // Correctly capitalize Services
import WasteAnalysis from './WasteAnalysis';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header onNavigate={handleNavigation} />

      {currentPage === 'home' && <Home />}
      {currentPage === 'upload' && <ImageUpload />}
      {currentPage === 'services' && <Services />} {/* Correctly display Services component */}
      {currentPage === 'analysis' && <WasteAnalysis/>}
      {currentPage === 'profile' && <div>Profile Page</div>}
    </div>
  );
}

export default App;
