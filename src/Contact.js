import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <h2>SEND US A MESSAGE</h2>
        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Phone' />
        <textarea placeholder='Your Message'></textarea>
        <button><i class="fa-solid fa-paper-plane"></i> SEND</button>
    </div>
  )
}
