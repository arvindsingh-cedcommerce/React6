import { Box, Grid, styled, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import './Contactus.css'

import React from 'react'
//This component will show Contact us Section
const Contactus = () => {
  const StyledTypo1 = styled(Typography)`
  font-size:23px;
  margin:0px 0px 2px 0px;
  color:#1E1E1E;
  `
  const StyledTypo2 = styled(Typography)`
  font-size:18px;
  color:#3C3C3C;
  `
  const StyledGrid1 = styled(Grid)`
  margin:0px 0px 42px 0px;
  `
  const StyledGrid2 = styled(Grid)`
  margin:7px 0px 0px 0px;
  color:#880314;
  `
  const StyledGrid3 = styled(Grid)`
  margin-bottom: 20px;
  `
  return (
    <Box textAlign="center" sx={{background:"url('images/contactus_background.webp')",backgroundSize:'100%',pb:3}}>
      <Typography sx={{ fontFamily: 'Aladin', color: '#7e1515', fontSize: '40px', fontWeight: 'bold', pt: 5, pb: 5 }}>Contact Us</Typography>
      <Grid container justifyContent="space-around" color="white">
        <Grid item md={5}>
          <StyledGrid1 container textAlign="start">
            <StyledGrid2 item md={1.5}><LocationOnOutlinedIcon /></StyledGrid2>
            <Grid item md={9}>
              <StyledTypo1 >Our Office Address</StyledTypo1>
              <StyledTypo2>Vishwas Khand, Gomti Nagar, Lucknow</StyledTypo2>
              <StyledTypo2>226010</StyledTypo2></Grid>
          </StyledGrid1>
          <StyledGrid1 container textAlign="start">
            <StyledGrid2 item md={1.5}><MailOutlineOutlinedIcon /></StyledGrid2>
            <Grid item md={9}>
              <StyledTypo1>General Enquiries</StyledTypo1>
              <StyledTypo2>contact@cedcoss.com</StyledTypo2>
            </Grid>
          </StyledGrid1>
          <StyledGrid1 container textAlign="start">
            <StyledGrid2 item md={1.5}><MailOutlineOutlinedIcon /></StyledGrid2>
            <Grid item md={9}>
              <StyledTypo1>Call Us</StyledTypo1>
              <StyledTypo2>+91-8888888888</StyledTypo2>
            </Grid>
          </StyledGrid1>
          <StyledGrid1 container textAlign="start">
            <StyledGrid2 item md={1.5}><QueryBuilderOutlinedIcon /></StyledGrid2>
            <Grid item md={9}>
              <StyledTypo1>Our Timing</StyledTypo1>
              <StyledTypo2>Mon - Friday : 09:00 AM - 07:00 PM</StyledTypo2>
            </Grid>
          </StyledGrid1>
        </Grid>
        <Grid item md={5} >
          <StyledGrid3>
            <input type="text" placeholder="YOUR NAME" />
          </StyledGrid3>
          <StyledGrid3>
            <input type="text" placeholder="YOUR EMAIL" />
          </StyledGrid3>
          <StyledGrid3>
            <input type="text" placeholder="YOUR CONTACT NO." />
          </StyledGrid3>
          <StyledGrid3> <textarea rows={5} cols={38} placeholder='YOUR MESSAGE' />
          </StyledGrid3>
          <button id="btn1">Submit</button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contactus