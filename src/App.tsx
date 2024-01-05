// src/App.tsx
import React from 'react';
import HomeContent from './pages/HomeContent';  // Update the import path if needed
// import Header from '../src/components/common/Header.tsx';
// import Footer from '../src/components/common/Footer.tsx';
import './assets/styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuDetails from './pages/MenuDetails';

const App: React.FC = () => {
  return (
    <div>
       <Router>
    <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/category/:category" element={<MenuDetails />} />
      </Routes>
  {/* <App /> */}
    </Router>
      {/* <Header /> */}
      {/* <HomeContent /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
