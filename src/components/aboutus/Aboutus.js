import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

//About us component
const Aboutus = () => {
  return (
    <Box mt={9} sx={{ background: "url('images/aboutus_background.jpeg')",
    backgroundSize:'100%',height:'90vh',mt: 10 }}>
      <Grid container justifyContent="space-evenly" >
      <Grid item md={5}>
          <img src='images/aboutus.webp' alt='' width={450} />
        </Grid>
        <Grid item md={5.5} textAlign="center" >
          <Typography variant="h4" sx={{ fontFamily: 'Aladin', fontWeight: 'bold', color: '#7e1515', mb: 3 }}>About Us</Typography>
          <Typography color="#212121" sx={{fontSize:18}}>
          We, Fortune Toy Shop, situated at Malad West, Mumbai, Maharashtra offer the largest range of toys, outdoor games cum toys that we sell at extremely affordable prices. We are the ideal place to source the perfect game or toy for your child. If you are looking for toys for your baby boy or baby girl, we have huge range of offerings including indoor as well outdoor toys that keeps your child engaged throughout. Visit our entire website to view our vast range of toys that you can easily take your pick from and let your child have an enjoyable time.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Aboutus