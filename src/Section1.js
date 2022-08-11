import { Grid, Typography } from '@mui/material';
import React from 'react'
import Navbar from './Navbar'
import { Section1Box } from './style/section1';

export default function Section1() {
  return (
    // Section1Box is a Box component that is custom defined 
    <Section1Box>
      {/* Calling navbar inside section1 */}
      <Navbar />
      {/* Grid that will contain two grids inside  */}
      <Grid container color='white'
       >
        <Grid md={7} lg={8} textAlign='start' sx={{pl:6, mr:4, mt:7}}>
          <Typography variant='h3' component='h1' >Want to make Facebook Advertising easy again?</Typography>
          <Typography variant='h5' sx={{mt:3}} >Welcome to AdExpresso University!</Typography>
        </Grid>
        {/* Grid for the image */}
        <Grid md={6} lg={2} sx={{mt:4}}>
          <img src='images/dude-graduated.png' alt='img' width='340rem' />
        </Grid>
      </Grid>
    </Section1Box>
  )
  }