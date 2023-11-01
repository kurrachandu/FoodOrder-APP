import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../Navbar';
import { FoodItems } from '../../../config';

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (foodItem) => {
    const updatedCart = [...cartItems, foodItem];
    setCartItems(updatedCart);

    // Update the local storage with the updated cart items
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    setAddedItem(foodItem);
    setShowPopup(true);

    // Hide the pop-up after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Welcome to Food Ordering App</h2>
        <p>Order your favorite dishes with just a few clicks!</p>
        <div className="menu-container">
          {FoodItems.map((foodItem) => (
            <div className="menu-card" key={foodItem.itemId}>
              <img src={foodItem.itemImage} alt={foodItem.itemTitle} className='image' />
              <h3>{foodItem.itemTitle}</h3>
              <p>{foodItem.itemDescription}</p>
              <p>Price: ${foodItem.itemPrice}</p>
              <button
                className="buy-button"
                onClick={() => {
                  addToCart(foodItem);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <span className="close-button" onClick={() => setShowPopup(false)}>
            &times;
          </span>
          {addedItem && (
            <p>{addedItem.itemTitle} is added to the cart</p>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
