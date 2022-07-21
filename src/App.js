import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import {Home ,Gallery, Event, Feedback, Contact} from './Navbar'
import './style.css'

function App() {
  return (
    <div className="App">
      <div className='nav-div'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/event'>Event</Link>
        <Link to='/feedback'>Feedback</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/event' element={<Event />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
