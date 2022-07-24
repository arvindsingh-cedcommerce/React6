import React from 'react'
import { useLocation } from 'react-router-dom'
import { getRestaurants } from './data';
import './Singlepage.css';
import _ from "lodash";

export default function Singlepage() {

  const location = useLocation();
  let restaurant = getRestaurants();

  const addClass = () => {
     var element = document.getElementById('hours');
     element.className += 'hidden';
  }
  const removeClass = () => {
    var element = document.getElementById('hours');
    element.className = 'operating-hours';
  }
  return (
    <div style={{ backgroundColor: 'gainsboro', width: '100%', height: '100%' }} className='parent-single-page'>
      {restaurant.map(item => {
        if (location.state.ID === item.id) {
          const list = (
            <div className='single-page'>
              <img src={item.photograph} /> 
              <p style={{ fontSize: '2.5vw', fontWeight: '400', color: 'rgb(51, 50, 50)', margin: '1rem' }}>{item.name}</p>
              <p><i class="fa-solid fa-location-crosshairs"></i> {item.address}</p>
              <p><i class="fa-solid fa-sack-dollar"></i> {item.price} | {item.cuisine_type}</p>
              <p><i class="fa-solid fa-clock"></i><span> Open from</span> 11:00 AM - 11:00 PM <i class="fa-solid fa-circle-exclamation " onPointerEnter={addClass} onClick={addClass} onPointerLeave={removeClass}></i></p>
              <div id='hours' className='operating-hours'>
                <p><div>MONDAY</div><div>{item.operating_hours.Monday}</div></p>
                <p><div>TUESDAY</div><div>{item.operating_hours.Tuesday}</div></p>
                <p><div>WEDNESDAY</div><div>{item.operating_hours.Wednesday}</div></p>
                <p><div>THURSDAY</div><div>{item.operating_hours.Thursday}</div></p>
                <p><div>FRIDAY</div><div>{item.operating_hours.Friday}</div></p>
                <p><div>SATURDAY</div><div>{item.operating_hours.Saturday}</div></p>
                <p><div>SUNDAY</div><div>{item.operating_hours.Sunday}</div></p>
              </div>
              <hr />
              <p style={{ fontSize: '2vw', fontWeight: '500', color: 'orangered', cursor: 'progress' }}>Reviews</p>
              <hr />
              <p style={{ fontSize: '2vw', fontWeight: '400', marginTop: '4vh' }}>{item.name}'s   Rating & Review</p>
              <div className='review'>
                {item.reviews.map(review => (
                  <div className='single-review'>
                    <div className='photo-name'>
                      <div><img src='https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/user%2Fprofile_images%2Fprofile_1.png' /></div>
                      <div className='user-name'>
                        <div style={{ fontWeight: '450', fontSize: '2vw' }}>{review.name}</div>
                        <div style={{ fontWeight: '300', fontSize: '1.3vw', color: 'gray' }}>{review.date}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '2vw', color: 'green', margin: '3vh auto' }}>
                      <span>{review.rating}</span> {_.times(review.rating, (i) => (
                        <span key={i}><i class="fa-solid fa-star"></i></span>
                      ))}
                    </p>
                    <p style={{ width: '99%', fontSize: '1.4vw', fontWeight: '400' }}>{review.comments}</p>
                  </div>
                ))}

              </div>
            </div>
          )
          return list;
        }
      })}
    </div>
  )
}
