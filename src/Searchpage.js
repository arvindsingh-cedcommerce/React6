import React from 'react'
import { getRestaurants } from './data'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Searchpage.css'

export default function Searchpage() {
  const [value, setValue] = useState('');
  let restaurants = getRestaurants();

  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onSearch = (searchItem) => {
    setValue(searchItem);
  }
  return (
    <div className='search'>
      <input type='text' placeholder='Search restaurents by name, neighborhood or cuisine type' value={value} onChange={onChange} />
      <button onClick={() => onSearch(value)} >Search</button>


      {restaurants.filter(item => {
        const searchItem = value.toLocaleLowerCase();
        const neighbor = item.neighborhood.toLocaleLowerCase();
        const name = item.name.toLocaleLowerCase();
        const cuisine = item.cuisine_type.toLocaleLowerCase();

        return searchItem && (name.startsWith(searchItem) || neighbor.startsWith(searchItem) || cuisine.startsWith(searchItem)) && searchItem !== neighbor;

      }).slice(0, 10)
        .map(item => (
          <div onClick={() => onSearch(item.neighborhood)} className='section3'>
            <div className='container' style={{}}>
              <Link to='/singlepage' state={{ ID: item.id }}>
                <div className='item'>
                  <img src={item.photograph} style={{ marginBottom: '2vh' }} />
                  <p style={{ color: 'rgb(34, 33, 33)', fontSize: '2vw', marginBottom: '1vh' }}>{item.name}</p>
                  <div className='price'>
                    <p style={{ fontSize: '1.5vw', fontWeight: '390', color: 'rgb(90, 89, 89)', marginBottom: '2vh' }}>{item.address}</p>

                  </div>
                  <p style={{ color: 'orange', fontSize: '1.7vw', marginBottom: '2vh', marginLeft: '0.5rem' }}><i class="fa-solid fa-percent" ></i> 30% Off</p>
                  <hr /><br />
                  <div className='max-safety'>
                    <p><img id='img1' src='https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp' /></p>
                    <p style={{ fontSize: '1.2vw', marginLeft: '1vw', color: 'gray' }}>Follows all Max Safety measures to ensure your food is safe</p>
                    <p><img id='img2' src='https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp' /></p>
                  </div>


                </div>
              </Link>


            </div>
          </div>
        ))}
    </div>

  )
}
