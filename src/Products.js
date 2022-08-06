import React from 'react'
import { getProducts } from './Data'
import { useState, useContext } from 'react';
import { cartContext } from './Data';

import './style.css'

export default function Products() {
  let products = getProducts();
  let { changeCart, prod_array , updateArray } = useContext(cartContext);

  
  let Index;

  const addCart = (ID) => {
    let flag = 1;
    if (prod_array.length > 0) {
      prod_array.map((item, index) => {
        if (item.id === products[ID - 1].id) {
          flag = 0;
          Index = index;
        }
      })
    }

    if (flag === 1) {
      updateArray(currentArray => [...currentArray, products[ID - 1]]);
      changeCart(cart => cart + 1);
    }
    else {
      prod_array[Index].quantity += 1;
    }

    console.log(prod_array);
  }

  return (
    <div className='products'>
      {products.map(product => (
        <div className='product'>
          <img src={product.photograph} />
          <h2 style={{ marginBottom: '0' }}>{product.name}</h2>
          <p style={{ marginTop: '0' }}>Price:₹{product.price}</p>
          <button onClick={() => addCart(product.id)}>Add To Cart</button>
        </div>
      ))
      }
    </div>
  )
}
