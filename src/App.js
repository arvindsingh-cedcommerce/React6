import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import SinglePage from './components/singlepage/SinglePage';

function App() {
  return (
    <div className="">
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singlepage" element={<SinglePage />} />
        </Routes>
    </div>
  );
}
export default App;
