import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Section2Head } from '../style/section2'
// import { Typography } from '@mui/material';

export default function Section2() {
  return (
    <Box 
    sx={{p:'30px'}}
    >
      <Section2Head variant='subtitle' component='h1' >Get the ooba advantage</Section2Head>
      <Typography variant='subtitle' component='h3' color='#2E2F2E' >
        Show the estate agent and seller that you mean bussiness.
      </Typography>
      <Grid container  justifyContent='center' sx={{mt:8}} >
        <Grid item md={6} lg={4} sx={{mr:4}} color='#2E2F2E' alignContent='start' textAlign='start' >
          <Typography variant='string' component='h3'>1. Know your credit profile.</Typography>
          <Typography>Banks reject 35% of home loan due to poor credit scores.</Typography>
          <Typography variant='string' component='h3'>2. Know what you can afford.</Typography>
          <Typography>Get an accurate indication of your price ceiling so you can shop within your means.</Typography>
          <Typography variant='string' component='h3'>3. Assess your financial situation.</Typography>
          <Typography>So you understand your monthly bond repayments.</Typography>
          <Typography variant='string' component='h3'>4. Be empowered.</Typography>
          <Typography>Get the big decisions right when choosing your dream home. </Typography>
        </Grid>
        <Grid item md={6} lg={4} justifyContent={'center'} alignItems='center'>
         
          <img src='https://www.pngkey.com/png/full/937-9376421_circle-icon-background-backgrounds-road-circles-beautiful-sunrise.png' alt='img' height='120rem' width='115rem' style={{
            borderRadius:'50%'
          }} />
         
         <Grid color='#2E2F2E' justifyContent={'center'} alignItems='center'>
          <Typography variant='string' component='h3' >
            "Thanks to ooba for their great sevices, I will definitely recommend you."
          </Typography>
          <Typography sx={{mt:2}}>Jason Pack, Sandton</Typography>
         </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
