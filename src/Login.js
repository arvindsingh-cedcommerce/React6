import React from 'react'
import './Login.css'
import Signup from './Signup';
import { Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [emailid, setEmailid] = useState('');
  const [pwd, setpwd] = useState('');

  const x = useLocation();
  let navi = useNavigate();
  
  const userID = (e) => {
    setEmailid(e.target.value)
  }

  const password = (e) => {
    setpwd(e.target.value)
  }
   const Login =(e) => {
     if(x.state.email === emailid && x.state.pass === pwd) {
      navi('/homepage')
     }
     else {
      alert("You are not a registered user");
     }
   }

  return (
    <div className="background" >
      <h1>hello</h1>
      <div className="transbox">
        <p>Sign into your Account</p>
        <div id='email' className='data'>
          <div className='inner-data'>
            <p>Email ID*</p>
            <p><i class="fa-solid fa-square-envelope"></i></p>
          </div>
          <input type='text' value={emailid} onChange={userID} />
        </div>
        <div id='pass' className='data'>
          <div className='inner-data'>
            <p>Password*</p>
            <p><i class="fa-solid fa-eye-slash"></i></p>
          </div>
          <input type='text' value={pwd} onChange={password} />
        </div>
        <button id='btn1' onClick={Login}>Login</button>
        {/* <NavLink to='/homepage' state={{}} */}
          {/* id='btn1' onClick={Login} >Login</NavLink> */}
        <p id='text'>Or Login using social Media</p>
        <div className='icon'>
          <i class="fa-brands fa-facebook-f" style={{ color: 'rgb(9, 87, 231)' }}></i>
          <i class="fa-brands fa-twitter" style={{ color: 'rgb(65, 176, 249)' }}></i>
        </div>
      </div>
      <div className='bottom'>
        <span>Don't have an account? </span>
        <span> <Link to="/" style={{ color: 'rgb(255, 132, 0)' }}>Register</Link></span>
      </div>

    </div>
  )
}
