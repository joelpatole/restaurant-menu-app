import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContent from './pages/HomeContent';
import MenuDetails from './pages/MenuDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
//   <Router>
//     <Routes>
//         <Route path="/" element={<HomeContent />} />
//         <Route path="/category/:category" element={<MenuDetails />} />
//       </Routes>
// </Router>
<App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
