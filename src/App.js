import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { cartContext } from './Data';
import Cart from './Cart';
import { Routes, Route, Router } from 'react-router-dom';


function App() {
  const [cart, changeCart] = useState(0);
  const [prod_array, updateArray] = useState([]);
  return (
    <div className="App">
      <cartContext.Provider value={{ cart, changeCart,prod_array, updateArray}} >
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </cartContext.Provider>
    </div>
  );
}

export default App;
