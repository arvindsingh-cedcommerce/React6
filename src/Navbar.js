import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>

      <div className='part1'>
        <img src='https://cdn.shortpixel.ai/spai/ret_img/https://www.apptio.com/wp-content/uploads/apptio-logo-svg.svg' />
      </div>

      <div className='part2'>
        <p>
          <span>Solutions</span> <span>Products</span><span>Resources</span> <span>Company</span><span id='start'>Get Started</span> <span><i class="fa-solid fa-magnifying-glass"></i> Search</span>
        </p>
      </div>

    </div>
  )
}
