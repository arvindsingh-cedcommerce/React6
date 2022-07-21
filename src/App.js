import logo from './logo.svg';
import './App.css';
import './style.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';



function App() {

  const myFunction = () => {
    var x = document.getElementById('myTopNav');
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }
  return (
    <div className="App">
      <nav>
        <a href='#' style={{ float: 'left', marginTop: '0' }}>
          <img src='https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/3089960-large.png' />
        </a>
        <div className='topNav' id='myTopNav'>

          <a href='javascript:void(0);' className='icon'><i class="fa-solid fa-bars" onClick={myFunction}>
          </i></a>

          <Link to='contact' >CONTACT US</Link>
          <Link to='products'>OUR PRODUCTS</Link>
          <Link to='/'>HOME</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
