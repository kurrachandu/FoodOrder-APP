import React, { useState, useEffect } from 'react';
import Navbar from '../../../Navbar';
import './OrdersPage.css';

const OrdersPage = () => {
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    const storedOrderedItems = JSON.parse(localStorage.getItem('ORDEREDITEMS'));

    if (storedOrderedItems) {
      setOrderedItems(storedOrderedItems); // Update the state with ordered items
    }
  }, []);

  // const removeFromCart = (index) => {
  //   // Create a copy of orderedItems and remove the item at the given index
  //   const updatedOrderedItems = [...orderedItems];
  //   updatedOrderedItems.splice(index, 1);

  //   // Update the state and local storage with the updated ordered items
  //   setOrderedItems(updatedOrderedItems);
  //   localStorage.setItem('ORDEREDITEMS', JSON.stringify(updatedOrderedItems));
  // };

  return (
    <>
      <Navbar />
      <div>
        <h2>Ordered Items</h2>
        <div className='Order-Items'>
          {orderedItems.map((orderedItem, index) => (
            orderedItem && (
              <div key={index} className='order-item'>
                <img src={orderedItem.itemImage} alt={orderedItem.itemTitle} className='image' />
                <h3>{orderedItem.itemTitle}</h3>
                <p>{orderedItem.itemDescription}</p>
                <p>Price: ${orderedItem.itemPrice}</p>
                <p>Quantity({orderedItem.itemQuantity})</p>
                <div className='conform'>Order Conformed</div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
