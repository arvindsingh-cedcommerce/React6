import { Box, Button, Grid, Typography } from '@mui/material'
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import React from 'react'
import styled from 'styled-components';



export default function Navbar() {
  return (
    <Box>
      <Grid container
        sx={{ pt: 3, pb: 3 }}
      >
        <Grid container xs={12} md={3} lg={4} justifyContent='center'
          sx={{ color: 'white', cursor: 'pointer' }}
        >
          <ViewInArIcon sx={{ fontSize: 40, mr: 1 }} />
          <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>TERNIO</Typography>
        </Grid>
        <Grid container xs={12} md={9} lg={8} justifyContent='center'
          sx={{ color: 'white', cursor: 'pointer' }}
        >
          <Grid sx={{ fontSize: 17, p: 1 }}>How it works</Grid>
          <Grid sx={{ fontSize: 17, p: 1 }}>Road Map</Grid>
          <Grid sx={{ fontSize: 17, p: 1 }}>Whitepaper</Grid>
          <Grid sx={{ fontSize: 17, p: 1 }}>Contact</Grid>
          <Grid sx={{ fontSize: 17, p: 1 }}>Advertising</Grid>
          <Grid sx={{ fontSize: 17, p: 1 }}>
            <Button sx={{
              backgroundColor: '#56A0F5',
              borderRadius: 15, color: 'white', pl: 2, pr: 2, pt: 1, pb: 1
            }}>Dashboard Login</Button>
          </Grid>
        </Grid>
       
      </Grid>
    </Box>
  )
}
