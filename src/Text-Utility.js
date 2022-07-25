import React from 'react'
import { useState } from 'react'
import './style.css'

export default function Text_Utility() {
  const [value, changeValue] = useState('');
  const [summary, changeSummary] = useState('');
  let Result = '';
 
  const Change = (event) => {
    changeValue(event.target.value);
    if(value === '') {
      changeSummary('');
    }
  }

  const Upper = () => {
    changeValue(value.toUpperCase());
    Summary();

  }

  const Lower = () => {
    changeValue(value.toLowerCase());
    Summary();
  }
 
  const Summary = () => {
    let string = value.split(' ');
    let words;
    words = string.filter(item => item !== '').length;
    const chars = value.length;
    changeSummary(words + " Words " + chars + " Characters ");
  }

  return (
    <div className='main' style={{boxShadow: '5px 5px 5px 5px'}}>
      <h3>Description</h3>
      <textarea type='text' value={value} onChange={Change} /><br />
      <button onClick={Upper}>Upper Case</button>
      <button onClick={Lower}>Lower Case</button>
      <div style={{height:'20vh',width:'50vw'}}>
        <h2>Summary</h2>
         <p>{summary}</p>
      </div>
    </div>
  )
}
