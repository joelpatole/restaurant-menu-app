// src/App.tsx
import React from 'react';
import HomeContent from './pages/HomeContent';  // Update the import path if needed
// import Header from '../src/components/common/Header.tsx';
// import Footer from '../src/components/common/Footer.tsx';
import './assets/styles/App.css'

const App: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <HomeContent />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
