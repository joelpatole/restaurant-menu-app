// pages/MenuDetails.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/MenuDetails.css';

const MenuDetails: React.FC = () => {
  const { category } = useParams();

  return (
    <div className="menu-details-container">
    <h2 className="category-heading">Category Page</h2>
    <p className="category-name">Category: {category}</p>
    {/* Add content for the category page */}
  </div>
  );
};


export default MenuDetails;