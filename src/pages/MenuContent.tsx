import React, { useState, useEffect } from 'react';
import '../assets/styles/MenuContent.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getMenuDetails } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faArrowLeft,faLongArrowAltLeft  } from '@fortawesome/free-solid-svg-icons';
import MenuImage from '../components/popups/MenuImage'

interface MenuItem {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  imgUrl : string
}

const MenuContent: React.FC = () => {
  const { category } = useParams();
  const [MenuDetails, setMenuDetails] = useState<MenuItem[]>([]);
  const [popupState, setPopupState]= useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageUrl, setImageUrl] = useState('');
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
  }, [popupState]);

  const goBack = () => {
    navigate(-1);// Go back to the previous page
  };

  const handleMenuItemClick = (item: MenuItem) => {
    setSearchQuery(item.name)
    handleSearch(`${item.name}`)
    // selectedItem.imgUrl = imageUrl;
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
    setImageUrl('https://as1.ftcdn.net/v2/jpg/05/14/75/82/1000_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg')
  };

 const searchEngineId = 'b42041f7014064f94';
 const apiKey = 'AIzaSyBuH2D064hcbXOK8FZ0oeKhmjUDM2Ff4Og'


  const handleSearch = async (queryName : string) => {
    try {
      queryName =  queryName.replace(/\s/g, '');
      console.log(`search quer is ${queryName}`)
      console.log(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(queryName)}`)
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(queryName)}`
      );
      console.log(`image data ${response.data}`)

      // Extract the image URL from the response
      const firstImage = response.data.items[0];
      if (firstImage) {
        setImageUrl(firstImage.link);
      } else {
        setImageUrl('');
      }
    } catch (error) {
      console.error('Error searching for images:', error);
    }
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
          <div className="menu-item" key={item.id} onClick={() => handleMenuItemClick(item)}>
            {/* <span className="menu-item-quantity">{item.category}</span> */}
            <h3 className="menu-item-name">{item.name}</h3>
            <span className="menu-item-additives">{item.description}</span>
            <p className="menu-item-price">₹ {item.price}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <MenuImage item={selectedItem} onClose={handleClosePopup} imageUrl = {imageUrl}/>
      )}
    </div>
  );
};

export default MenuContent;

