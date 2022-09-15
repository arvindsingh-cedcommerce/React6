import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
//This will show Testimonial section
const Testimonial = () => {
  var items = [
    {
      text: "They provide the best catering services. I'll recommend them all to all.",
      name: 'Simarn Kaur'
    },
    {
      text: "I ordered foood from them for my brother's birthday party. All our relatives loved the food.",
      name: "Justin D'Souza"
    },
    {
      text: "Yummy and Delicious food. Will surely recommand them my freinds & relatives.",
      name: "Tial Mishra"
    }
  ]
  return (
    <Box sx={{
      backgroundImage: 'linear-gradient(rgba(34, 31, 45, 0.81),rgba(34, 31, 45, 0.81)), url("images/testimonial.webp")',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 370,
      textAlign: 'center',
      mt: 8
    }}>
      <Box sx={{ p: 5, color: 'white' }}>
        <Typography sx={{color:'#f6b125', fontSize: '50px', fontWeight: 'bold', mb: -2 }}>"</Typography>
        <Typography variant="h4" sx={{fontWeight: 'bold',fontFamily:'Aladin',mb:-7}}><i>Testimonials</i></Typography>
        <Carousel sx={{ mt: 11 }} textAlign="center">
          {
            items.map((item) => <Box sx={{display:'grid',placeItems:'center'}}>
              <Typography sx={{width:430,mb:3}}>{item.text}</Typography>
              <Typography variant="h5">{item.name}</Typography>
            </Box>)
          }
        </Carousel>
      </Box>
    </Box>
  )
}

export default Testimonial