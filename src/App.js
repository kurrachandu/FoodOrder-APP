import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import Navbar from './components/Header';
import HomePage from './components/pages/Home/HomePage';
// import MenuPage from './components/MenuPage';
import CartPage from './components/pages/Cart/CartPage';
// import CheckoutPage from './components/pages/Order/CheckoutPage';
import Create from './components/pages/Auth/Create';
import Login from './components/pages/Auth/Login';
import Success from './components/pages/Logout/Success';
import Navbar from './Navbar';
import OrdersPage from './components/pages/Order/OrdersPage';
function App() {

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Create/>} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/header' element={<Header />} /> */}
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/menu" element={<MenuPage />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;