import React, { useState } from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../Navbar';

const foodItems = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 6 },
  { id: 3, name: 'Pasta', price: 8 },
  { id: 4, name: 'Salad', price: 5 },
];

const HomePage = () => {
  const navigate = useNavigate();

  // Initialize cartItems as an empty array
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodItem) => {
    // Create a copy of the cartItems with the new food item
    const updatedCart = [...cartItems, foodItem];
    console.log(foodItem);
    setCartItems(updatedCart);

    // Update local storage with the updated cartItems
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    // navigate('/cart');

  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Welcome to Food Ordering App</h2>
        <p>Order your favorite dishes with just a few clicks!</p>
        <div className="menu-container">
          {foodItems.map((foodItem) => (
            <div key={foodItem.id} className="menu-card">
              <h3>{foodItem.name}</h3>
              <p>Price: ${foodItem.price}</p>
              <button
                className="buy-button"
                onClick={() => {
                  addToCart(foodItem);
                }}
              >
                AddCart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
