import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">

      <div className='part1'>
        <p id='para1'>SCIENCE</p>
        <p id='para2'><i class="fa-solid fa-glasses"></i></p>
      </div>

      <div className='part2'>
        <p>
        <span>HOME</span><span>ABOUT US</span>
        <span>SERVICE</span><span>CONTACT</span><span>LOG IN</span>
        </p>
      </div>

    </div>
  )
}
