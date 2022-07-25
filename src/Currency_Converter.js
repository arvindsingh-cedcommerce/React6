import React from 'react'
import App from './App';
import './style.css'
import { useState } from 'react';

export default function Currency_Converter() {
  const [currency, changeCurrency] = useState('');
  const [result, changeResult] = useState('');

  const getCurrency = (event) => {
    changeCurrency(event.target.value);
  }

  const Change = () => {
    if(currency < 0) {
      alert("Currency can not be negative");
      changeResult('');
    }
    else if(currency !== '' && currency!== 0 ) {
    let usd = currency;
    let inr = usd * 79.84;
    inr = inr.toFixed(3);
     changeResult(usd + " USD = " + inr + " INR ");
    }
  }

  return (
    <div className='main'>
      <div className='parent-div'>
        <h2 >Currency Converter</h2>
        <p style={{ textAlign: 'start', alignItems: 'flex-start', fontSize: '1.6vw', fontWeight: '500' }}>Enter Amount</p>
        <input type='number' style={{ height: '10vh', borderRadius: '5px', fontSize: '2vw' }} value={currency} onChange={getCurrency} />
        <div className='child-div'>

          <div>
            <p>From</p>
            <div id='country' style={{border:'1px solid gray',borderRadius:'3px'}}>
            <img src='https://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png' style={{width:'4vw'}} />
            <span style={{marginTop:'2vh'}}><div> USD <i class="fa-solid fa-caret-down"></i></div></span>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>

          <div>
            <p>To</p>
            <div id='country' style={{border:'1px solid gray',borderRadius:'3px'}}>
            <img src='https://iconarchive.com/download/i109170/wikipedia/flags/IN-India-Flag.ico' style={{width:'4vw'}} />
            <span style={{marginTop:'2vh'}}><div> USD <i class="fa-solid fa-caret-down"></i></div></span>
            </div>
          </div>

        </div>

        <div style={{ height: '12vh',marginTop:'2rem' }}>{result}</div>

        <button onClick={Change}>Get Exchange Rate</button>
      </div>
    </div>
  )
}
