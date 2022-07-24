import React from 'react'
import { getRestaurants } from './data'
import './Homepage.css'
import { Link } from 'react-router-dom';

export default function Homepage() {
  let restaurants = getRestaurants();
  return (
    <div>
      <div className='home-navbar1' >
        <div><h2><i>FOOD FOOD</i></h2></div>
        <div style={{ border: '1px solid gray', borderRadius: '50%', padding: '1vh' }}>
          <i class="fa-solid fa-user" style={{ fontSize: '1rem', color: 'rgb(230, 88, 88)' }}></i>
        </div>
      </div>

      <div className='home-navbar2'>
        <div><h3><i class="fa-solid fa-location-dot" style={{ color: 'rgb(230, 88, 88)' }}></i> Lucknow</h3></div>
        <Link to='/search' >
          <div style={{ border: '1px solid gray', padding: '1vh', borderRadius: '50%', backgroundColor: 'rgb(243, 243, 243)' }}>
            <i class="fa-solid fa-magnifying-glass" style={{ fontSize: '1rem', color: 'rgb(139, 139, 139)' }}></i></div>
        </Link>
      </div>


      <div className='section'>
        <h1>Inspiration for your first order</h1>
        <div className='food-list'>
          <div>
            <img src='https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png' />
            <p>Thali</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png' />
            <p>Biryani</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png' />
            <p>Paratha</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' />
            <p>Pizza</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png' />
            <p>Rolls</p>
          </div>
        </div>
        <div id='see-more'>see more <i class="fa-solid fa-angle-down"></i></div>
      </div>

      <div className='section section2'>
        <h1>Top brands for you</h1>
        <div className='food-list food-list2'>
          <div>
            <img src='https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp' />
            <p className='brand-name'>La Pino'z Pizza</p>
            <p className='min'>32min</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp' />
            <p className='brand-name'>The Hazelnut Factory</p>
            <p className='min'>23 min</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp' />
            <p className='brand-name'>McDonald's</p>
            <p className='min'>42 min</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/brand_creatives/logos/bf3a000fa1554839d5e1a415bf85d083_1598856266.png?output-format=webp' />
            <p className='brand-name'>The Manish Eating Point</p>
            <p className='min'>25 min</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp' />
            <p className='brand-name'>Royal Cafe - Royal Inn</p>
            <p className='min'>28 min</p>
          </div>
          <div>
            <img src='https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp' />
            <p className='brand-name'>Burger King</p>
            <p className='min'>31 min</p>
          </div>
        </div>
        <div id='see-more'>see more <i class="fa-solid fa-angle-down"></i></div>
      </div>

      <div className='section3'>
        <h1>Highly recommended restaurants in Lucknow</h1>
        <div className='container'>
          {restaurants.map((item, index) => (
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
          ))}

        </div>
      </div>
    </div>
  )
}
