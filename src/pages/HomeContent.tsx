import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom'
import '../assets/styles/HomeContents.css';
import '../assets/styles/Home.css';
import { getCategories } from '../services/api';
import  {useNavigate}  from 'react-router-dom';

const HomeContent: React.FC = () => {
  const navigate = useNavigate()
  // State to store the categories fetched from the API
  const [categories, setCategories] = useState<string[]>([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchCategories = async()=>{
        try {
            const categoriesFromAPI = await getCategories();
            if(categoriesFromAPI && categoriesFromAPI?.length > 0)
            setCategories(categoriesFromAPI || []);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
    }
    fetchCategories();
  }, []); // Empty dependency array to fetch data only once on component mount

   // Function to handle button click
   const handleButtonClick = (category: string) => {
    
    // Save the selected category in the state
    setSelectedCategory(category);
  
    // For example, navigate to another page using navigate function
    // navigate(`/category/${category}`);
    console.log(category);
    navigate(`/menuContent/${category}`);
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome to Our Restaurant!</h1>
      <p className="description">
        Discover a delightful dining experience with our exquisite menu of
        delicious dishes.
      </p>

      {/* Render buttons or tables for each category */}
      <div className="category-container">
        {categories.map(category => (
            //we need to route to other page to show whole info of that category
          // <Link to={`/category/${category}`} key={category}>
          //   <button className="category-button">{category}</button>
          // </Link>
        <button className="category-button" onClick={() => handleButtonClick(category)}>{category}</button>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
