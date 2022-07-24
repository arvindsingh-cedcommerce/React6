import React, { Component } from 'react'
import './Login.css'
import { useState } from 'react';

import { Routes, Route, Link, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export default function Signup() {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     username: '',
  //     email: '',
  //     password: '',
  //     signup_array: [],
  //   }
  // }

  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [signup_array, setsignuparray] = useState([]);

  const userName = (e) => {
    // alert();
    setusername(e.target.value)
  }
  
  const Email = (e) => {
    // alert();
    setemail(e.target.value)
  }

  const Password = (e) => {
    // alert();
    setpassword(e.target.value)
  }


  const Signup = () => {

    let temp = { 'uname': username, 'email': email, 'pass': password }
    console.log(temp);

    signup_array.push(temp);
    
    console.log(signup_array)
  }

    return (
      <div className="background">
        <div className="transbox" >
          <p>Create Account</p>

          <div id='email' className='data' style={{width:'100%'}}>
            <div className='inner-data'>
              <p>User Name*</p>
              <p><i class="fa-solid fa-user"></i></p>
            </div>
            <input type='text' value={username} onChange={userName} />
          </div>

          <div id='email' className='data'>
            <div className='inner-data'>
              <p>Email ID*</p>
              <p><i class="fa-solid fa-square-envelope"></i></p>
            </div>
            <input type='text' value={email} onChange={Email} />
          </div>

          <div id='pass' className='data'>
            <div className='inner-data'>
              <p>Password*</p>
              <p><i class="fa-solid fa-eye-slash"></i></p>
            </div>
            <input type='text' value={password} onChange={Password} />
          </div>
          <p id='terms'><input type='checkbox' /><span style={{ color: 'gray' }}>I Read and agree to</span><a style={{ color: 'rgb(255, 132, 0)' }}>Terms & conditions</a></p>
         <nav>
          <NavLink to='/login' state={{name:username, pass:password, email:email}}
          id='signup-btn' onClick={Signup} >Sign Up</NavLink>
          </nav>
          <p id='text'>Or Login using social Media</p>
          <div className='icon'>
            <span><i class="fa-brands fa-facebook-f" style={{ color: 'rgb(9, 87, 231)' }}></i></span>
            <span> <i class="fa-brands fa-twitter" style={{ color: 'rgb(65, 176, 249)' }}></i></span>
          </div>
        </div>

        <div className='bottom'>
          <span >Already have an account? </span>
          <span> <NavLink to='/login' state={{name:'',pass:'',email:''}} style={{ color: 'rgb(255, 132, 0)' }}>Login</NavLink></span>

        </div>

      </div>
    )
  }



