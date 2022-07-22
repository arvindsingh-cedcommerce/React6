import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <div>
      <form className='form'>
        <h2>Apply Now</h2>
        <p id='first'>Enter your info, and then download the Lyft app to create your driver profile.</p>
        <input type='text' placeholder='First name' />
        <input type='text' placeholder='Last name' />
        <input type='text' placeholder='Email address' />
        <input type='text' placeholder='City' />
        <input type='text' placeholder='Phone number' />
        <input type='text' placeholder='Promo Code (optional)' />
        <div className='checkterms'>
        <input type='checkbox'/><label id='first'>I agree to the <i>Lyft terms</i></label>
        </div>
        
        <button>BECOME A DRIVER</button>
        <p id='second'>Already applied? <span id='second'>Check the status of your application here.</span></p>
      </form>
    </div>
  )
}
