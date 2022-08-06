import React from 'react'
import { useContext } from 'react'
import { cartContext } from './Data';
import './Cart.css'
import { NavLink } from 'react-router-dom';

export default function Cart() {
  let { cart, changeCart, prod_array, updateArray } = useContext(cartContext);
  let total = 0;

  const emptyCart = () => {
    updateArray([]);
    changeCart(0);
  }

  const increase = (Index) => {
    let subtotal;
    let arr = [...prod_array]
    arr[Index].quantity += 1;
    arr[Index].subtotal = arr[Index].price * arr[Index].quantity
    updateArray(arr);
  }

  const decrease = (Index) => {
    let arr = [...prod_array]
    if (arr[Index].quantity <= 1) {
      arr.splice(Index, 1);
      changeCart(cart => cart - 1)
    }
    else {
      arr[Index].quantity -= 1;
      arr[Index].subtotal = arr[Index].price * arr[Index].quantity;
    }
    updateArray(arr);
  }

  if(cart === 0) {
    return (
      <div className='Empty_Cart'>
        <div className='div1'><i class="fa-solid fa-cart-arrow-down"></i></div>
        <div><h1 style={{color:'black'}}>Your Cart is Empty</h1></div>
        <div className='div2'><NavLink to='/'>SHOP NOW</NavLink></div>
      </div>
    )
  }

  if (cart !== 0) {
    return (
      <div className='main-checkout'>
        <div className='heading'>
          <div className='div1'><p>Product</p></div>
          <div className='div2'><p>Quantity</p><p>Subtotal</p></div>
        </div>
        {prod_array.map((item, index) => (
          <div className='checkout'>
            <div className='div1'><img src={item.photograph} /></div>

            <div className='div2'>

              <div className='inner-div'>
                <p style={{ fontSize: '2vw', fontWeight: '540' }}>{item.name}</p>
                <p style={{ fontSize: '1.5vw', }}>Price:₹{item.price}</p>
                <p style={{ fontSize: '1.3vw', color: 'red' }}>Remove</p>
              </div>
              <p><button onClick={() => increase(index)}>+</button> <span>{item.quantity}</span> <button onClick={() => decrease(index)}>-</button></p>
              <p>₹{item.subtotal}</p>

            </div>
          </div>

        ))
        }
        <div className='line'>
          <div><hr /></div>
          {prod_array.map(item => {
             total += parseInt(item.subtotal)
          })
          }
          <div><p>Subtotal</p> <p>₹{total}</p></div>
          <div><p>Tax</p><p>₹35</p></div>
          <div><p>Toal</p><p>₹{total + 35}</p></div>
        </div>

        <button id='empty' onClick={emptyCart}>Empty You Cart</button>
      </div>
    )
  }

}
