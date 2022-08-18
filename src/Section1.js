import { Box, Button, Grid, Typography } from '@mui/material'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import React from 'react'

export default function Section1() {
  return (
    <Box>
      <Grid container justifyContent='space-evenly'
        sx={{
          textAlign: 'start', color: 'white', mt: 2
        }}>
        <Grid xs={9} md={4} lg={5} sx={{ mt: 7 }}>
          <Typography variant='h6' sx={{ m: 3 }}>THE FUTURE IS NOW</Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold', m: 3 }}>
            The World's Fasted Blockchain
          </Typography>
          <Typography sx={{ m: 3 }}>
            TERNIO provides the only scalable and decentralized blockchain frame-work capable of over 1 million transactions per second
          </Typography>
          <Button sx={{ backgroundColor: '#78B5FC', borderRadius: 15, pl: 4, pr: 4, pt: 2, pb: 1, m: 3, color: 'white', fontWeight: 'bold' }}>Receive Email Updates</Button>
        </Grid>

        <Grid sx={12} md={5} lg={4}>
          <img src='images/ternio1.png' alt=''
            height='500' width='500'
          />
        </Grid>
      </Grid>
      <Grid container color='white' justifyContent='center'>
        <Grid xs={5} lg={5}><Typography sx={{fontSize:'0.9rem',mt:1}}>TERNIO Third-Party Verified-run over 1 Million texes Record Report</Typography></Grid>
        <Grid xs={2} lg={2} ><CloudDownloadOutlinedIcon sx={{fontSize:'3rem'}} /></Grid>
        <Grid container xs={7} lg={3}>
          <Typography sx={{fontSize:'1.2rem',mr:2,mt:2}}>Next</Typography>
          <TrendingFlatOutlinedIcon sx={{fontSize:'3rem',mt:1,mr:1}} />
          <Typography variant='h2' > 01 </Typography> 
          <Typography variant='h3' sx={{ml:1}} > /<ArrowCircleRightOutlinedIcon fontSize='3rem' sx={{ml:1,mt:1}} /></Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
