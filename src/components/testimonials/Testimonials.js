import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';
//This will show Testimonial section
const Testimonial = () => {
  var items = [
    {
      text: "They provide the best catering services. I'll recommend them all to all.",
      name: 'Simran Kaur'
    },
    {
      text: "I ordered foood from them for my brother's birthday party. All our relatives loved the food.",
      name: "Justin D'Souza"
    },
    {
      text: "Yummy and Delicious food. Will surely recommand them my freinds & relatives.",
      name: "Tilak Mishra"
    }
  ]
  return (
    <Box sx={{
      backgroundImage: 'url("images/testimonial_background.jpeg")',
      // backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 570,
      textAlign: 'center',
      mt: 8
    }}>
      <Box sx={{ p: 5, color: '#222222' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold',color:'#7e1515', fontFamily: 'Aladin',mt:13,mb:2}}>Testimonials</Typography>
        <Typography sx={{ color: '#f6b125', fontSize: '50px', fontWeight: 'bold',mb:-13}}>"</Typography>
        <Carousel sx={{ mt: 11 }} textAlign="center">
          {
            items.map((item) => <Box sx={{ display: 'grid', placeItems: 'center' }}>
              <Typography sx={{ fontSize:20,width: 530, mb: 3 }}>{item.text}</Typography>
              <Typography variant="h5">{item.name}</Typography>
            </Box>)
          }
        </Carousel>
      </Box>
    </Box>
  )
}

export default Testimonial