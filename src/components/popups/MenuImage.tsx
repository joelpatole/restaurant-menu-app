import axios from 'axios';
import '../../assets/styles/MenuImage.css'
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DNA }  from 'react-loader-spinner';

interface MenuItem {
    id: string;
    category: string;
    name: string;
    price: number;
    description: string;
    // imageUrl: string; // Add this property if not already present
  }
  
  interface MenuImageProps {
    item: MenuItem;
    onClose: () => void;
    imageUrl : string
  }
  
  const MenuImage: React.FC<MenuImageProps> = ({ item, onClose, imageUrl }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const handleImageLoaded = () => {
        setLoading(false);
    };
    const handleImageError = () => {
        setLoading(false);
        setError(true);
      };
    console.log(`image url generated is ${imageUrl}`)
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          <h2>{item.name}</h2>
          {loading && (
                   <DNA
                   visible={true}
                   height="80"
                   width="80"
                   ariaLabel="dna-loading"
                   wrapperStyle={{}}
                   wrapperClass="dna-wrapper"
                   />
                )}
                {(
                    <img
                        src={imageUrl}
                        alt={item.name}
                        className="popup-image"
                        onLoad={handleImageLoaded}
                        onError={handleImageError}
                    />
                )}
          <p>{item.description}</p>
          <p>Price: ₹{item.price}</p>
        </div>
      </div>
    );
  };
  
  export default MenuImage;