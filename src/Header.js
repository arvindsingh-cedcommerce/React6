import React from 'react'
import { cartContext } from './Data';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    let { cart } = useContext(cartContext);

    const myFunction = () => {
        var x = document.getElementById("nav-links");
        if (x.className === "links") {
            x.className += " responsive";
        } else {
            x.className = "links";
        }
    }

    return (
        <div className='header'>

            <div style={{ width: '20%' }}><h1> DNK</h1></div>
            <div className='links' id='nav-links'>
                <NavLink to='/' id='home' style={{ color: '#fff', fontWeight: 'bold' }}>HOME</NavLink>
                <p id='store'>STORE</p>
                <p>MEN</p>
                <p>WOMEN</p>
                <p>ACCESSORIES</p>
                <p>ACCOUNT</p>
                <p>ABOUT</p>
                <p>CONTACT US</p>
                <nav>
                    <NavLink to='/cart' className='basket'>
                        <i class="fa-solid fa-cart-shopping">
                            <span>{cart}</span></i>
                    </NavLink>
                </nav>
                <a href="javascript:void(0);" class="icon" onClick={myFunction}>
                <i class="fa-solid fa-bars"></i>
                </a>

            </div>
        </div>
    )
}
