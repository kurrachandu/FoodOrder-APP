import React, { useState, useEffect } from 'react';
import './CartPage.css';
import Navbar from '../../../Navbar';
import ItemPopUPdialog from '../Cart/ItemPopUPdialog';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [popupFlag, setPopupFlag] = useState(false);
  const [selectedCartItem, setSelectedCartItem] = useState(null);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  function handlePlaceOrder(cartItem) {
    setSelectedCartItem(cartItem);
    setPopupFlag(true);
  }

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].itemQuantity += 1;
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].itemQuantity === 1) {
      // If the quantity is 1 and the decrease button is clicked, remove the item
      updatedCartItems.splice(index, 1);
    } else {
      updatedCartItems[index].itemQuantity -= 1;
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Cart</h2>
        <div className='cart-container'>
          {cartItems.map((cartItem, index) => (
            <div key={index} className='cart-item'>
              <img src={cartItem.itemImage} alt='' className='image' />
              <h3>{cartItem.itemTitle}</h3>
              <p>{cartItem.itemDescription}</p>
              <p>Price: ${cartItem.itemPrice}</p>
              <p>Quantity({cartItem.itemQuantity})</p>
              <div className='total'>
              <button className='add-to-cart-btn1' onClick={() => increaseQuantity(index)}>+</button>
                <button className='add-to-cart-btn2' onClick={() => decreaseQuantity(index)}>-</button>
                </div>
              <div className='total'>
                <button onClick={() => handlePlaceOrder(cartItem)}>PlaceOrder</button>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          {popupFlag ? (
            <ItemPopUPdialog
              cartItem={selectedCartItem}
              setPopupFlag={setPopupFlag}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CartPage;
