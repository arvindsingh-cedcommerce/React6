
import './index1.css';
import NavBar from './Navbar';
import Feed from './Feed';
import Follow from './Follow';
import Trends from './Trends';
import Profile from './Profile';

export default function Index1() {
    return (
      <div className='container1'>   
          <NavBar /> 
        <div className='section'>
          <div className='combined'>
            <Profile />
            <Trends />
          </div>
          <Feed />
          <Follow />
        </div>
      </div>
    )
    }

