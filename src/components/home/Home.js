import { Box, styled } from '@mui/material'
import React from 'react'
import Aboutus from '../aboutus/Aboutus'
import Carausel from '../carausel/Carausel'
import Category from '../category/Category'
import Categring_Services from '../catering/Categring_Services'
import Contactus from '../contactus/Contactus'
import Footer from '../footer/Footer'
import Gallery from '../gallery/Gallery'
import Testimonial from '../testimonials/Testimonials'

const StyledBox = styled(Box)({
  background:"linear-gradient(rgba(34, 31, 45, 0.81),rgba(34, 31, 45, 0.81)), url('images/bg1.jpg') ",
  // backgroundColor:'#221f2d'
})

const Home = () => {
  return (
    <StyledBox >
      {/* Carausel Component */}
        <Carausel/>
        {/* Category component */}
        <Category/>
        {/* Categring Services */}
        <Categring_Services />
        {/* About us Component */}
        <Aboutus/>
        {/* Gallery Component */}
        <Gallery/>
        {/* Testimonial Component */}
        <Testimonial/>
        {/* Contact us Component */}
        <Contactus/>
        {/* Footer  */}
        <Footer/>
    </StyledBox>
  )
}

export default Home