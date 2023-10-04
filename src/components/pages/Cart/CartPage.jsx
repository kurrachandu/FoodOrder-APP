import React, { useState, useEffect } from 'react';
import './CartPage.css';
import Navbar from '../../../Navbar';
import { useLocation } from 'react-router-dom';

const CartPage = () => {
  // const location = useLocation();
  // console.log(location);

  // Define state to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to retrieve cart items from localStorage
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>Cart</h2>
        <div className='cart-container'>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} className='cart-item'>
              <h3>Name: {cartItem.name}</h3>
              <p>Price: ${cartItem.price}</p>
              <div className='total'>
                <button >Place Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;
