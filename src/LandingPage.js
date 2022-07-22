import React from 'react'
import './LandingPage.css'
import Form from './Form'

export default function LandingPage() {
    return (
        <>
            <div className='landing'>
            <Form />
            </div>
            <div className='footer'>
                <p id='makemoney'>See How Much You Can Make</p>
                <p id='hours'>How many hours do you want to drive this week?</p>
                <div >
                    <input id='one' type='text' placeholder='Hours' />
                    <input id='two' type='text' placeholder='City' />
                    <button>CALCULATE</button>
                </div>
            </div>
        </>
    )
}
