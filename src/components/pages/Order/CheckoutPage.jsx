// CheckoutPage.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './CheckoutPage.css';
import Navbar from '../../../Navbar';
// import Navbar from '../Navbar';
// import Header from './Header';
function CheckoutPage() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Handle the form submission here (e.g., send data to the server or payment gateway).
    console.log(data);
  };

  return (
    <>
    <Navbar/>
    {/* <Header/> */}
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Full Name:
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </label>

        <label>
          Email:
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </label>

        <label>
          Credit Card Number:
          <Controller
            name="creditCard"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </label>

        <label>
          Expiration Date:
          <Controller
            name="expirationDate"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </label>

        <button type="submit">Place Order</button>
      </form>
    </div>
    </>
  );
}

export default CheckoutPage;
