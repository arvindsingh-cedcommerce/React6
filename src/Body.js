import React from 'react';
import './body.css'

export default function Body() {
  return (
    <div className='content'>

      <div className='part1'>
        <p id='para1'>ONLINE</p>
        <p id='para2'>EDUCATION</p>
        <p id='para3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum scrambled  make a type specimen.</p>
        <button>Learn More</button>
      </div>

      <div className='part2'>
        <img src='image1.png' alt='...img' />
      </div>

    </div>
  )
}
