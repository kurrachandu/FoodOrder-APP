import React, { useState } from 'react';
import './MenuPage.css';
import Navbar from '../Navbar';

const foodItems = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 6 },
  { id: 3, name: 'Pasta', price: 8 },
  { id: 4, name: 'Salad', price: 5 },
];

function MenuPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (foodItem) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === foodItem.id);

    if (existingItemIndex !== -1) {
      // If it's in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      // If it's not in the cart, add it with a quantity of 1
      setCart([...cart, { ...foodItem, quantity: 1 }]);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Menu</h2>
        <div className="menu-container">
          
          {foodItems.map((foodItem) => (
            <div key={foodItem.id} className="menu-card">
              <h3>{foodItem.name}</h3>
              <p>Price: ${foodItem.price}</p>
              <button className="buy-button" onClick={() => addToCart(foodItem)}>
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuPage;
