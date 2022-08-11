import { Box, Button, Grid } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <Box sx={{p:'10px 22px'}} >
      <Grid container justifyContent={'space-between'} >
        <Grid><img src='images/logo-university.png' alt='img'
          width='340vw'
        /></Grid>
        <Grid>
          <Button variant='contained' sx={{backgroundColor:'rgba(33,200,86)',mr:2}}>SUBSCRIBE</Button>
          or
          <Button variant='contained' sx={{backgroundColor:'rgba(136,146,210)',ml:2}}>SUBSCRIBE</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
