import React from 'react'
import './body.css'

export default function Body() {
  return (
    <div className='content'>

      <div className='part1'>
        <p className='para1'>Get Started with Apptio Today</p>
        <p className='para2'>Talk to ap Apptio expert about your specific needs and see a live product demonstration. Discuss current challenges and find the right application for your use case.</p>
      </div>

      <div className='part2'>

        <div className='flex'>
          <p><input type='text' placeholder="First name" /></p>
          <p><input type='text' placeholder="Last Name" /></p>
        </div>

        <div className='flex'>
          <p><input type='email' placeholder="Work Email" /></p>
          <p><input type='text' placeholder="Phone" /></p>
        </div>

        <div className='flex'>
          <p><input type='text' placeholder="Company" /></p>
          <p><input type='text' placeholder="Job Function" /></p>
        </div>
        <div className='input'>
          <input type='dropdown' placeholder="Country" />
        </div>

        <div className='input'>
          <textarea placeholder='How can we help?' />
        </div>

        <button>Get Started</button>

      </div>

      <div className='part3'>
        <p id='para1'><i class="fa-solid fa-envelope-open"></i></p>
        <p id='para2'><i class="fa-solid fa-desktop"></i></p>
      </div>

    </div>
  )
}
