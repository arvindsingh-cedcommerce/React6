import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

//Carausel Component
const Carausel = () => {
    const navi = useNavigate();
    var items = [
        {
            path: 'images/carausel1.webp'
        },
        {
            path: 'images/carausel2.webp'
        }
    ]

    return (
        <Carousel sx={{mt:11,cursor:'pointer'}}>
            {
                items.map((item) => <img src={item.path} alt="vfc" style={{width:'100%',height:480}}  onClick={()=>navi('/products')} />)
            }
        </Carousel>
    )
}

export default Carausel