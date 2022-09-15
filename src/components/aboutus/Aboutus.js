import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

//About us component
const Aboutus = () => {
  return (
    <Box mt={9} sx={{mt:10}}>
      <Grid container justifyContent="space-evenly" >
        <Grid item md={5.5} textAlign="center" >
        <Typography variant="h4" sx={{fontFamily:'Aladin',fontWeight:'bold',color:'#f6b125',mb:3}}><i>About Us</i></Typography>
        <Typography color="wheat">
        We, Sweet Center located in Malad West, Mumbai, Maharashtra are home to a wide range of sweets that cater to the diverse taste buds of every patron. All of our delicacies are made using unique recipes that will leave a memorable aftertaste in your mouth. You can call us for sweets in times of sudden sweet cravings or when you wish to complete a meal with a delightful dessert. We would be happy to deliver the same to you. Other than we also offer catering services for various events like marriages, birthday parties etc

        </Typography>
        </Grid>
        <Grid item md={5}>
       <img src='images/aboutus.webp' alt='' width={450}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Aboutus