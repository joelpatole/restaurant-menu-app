import React, { useState, useEffect } from 'react';
import '../assets/styles/MenuContent.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getMenuDetails } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faArrowLeft,faLongArrowAltLeft  } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
}

const MenuContent: React.FC = () => {
  const { category } = useParams();
  const [MenuDetails, setMenuDetails] = useState<MenuItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`category from menu details ${category}`)
        const menuData = await getMenuDetails(category);
        if (menuData && menuData?.length > 0)
          setMenuDetails(menuData || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchData();
  }, []);

  const goBack = () => {
    navigate(-1);// Go back to the previous page
  };

  return (
    <div className="menu-content">
      <header className="menu-header">
      <button className="back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
        <h2 className="menu-title">Menu</h2>
      </header>
      <div className="menu-items">
        {MenuDetails.map((item) => (
          <div className="menu-item" key={item.id}>
            {/* <span className="menu-item-quantity">{item.category}</span> */}
            <h3 className="menu-item-name">{item.name}</h3>
            <span className="menu-item-additives">{item.description}</span>
            <p className="menu-item-price">₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContent;

