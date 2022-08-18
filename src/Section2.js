import { Box, Grid, Typography } from '@mui/material'
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';
import TokenIcon from '@mui/icons-material/Token';
import React from 'react'

export default function Section2() {
  return (
    <Box sx={{ p: 6 }} >
      <Grid color='#3C4289'>
        <ViewInArTwoToneIcon sx={{ fontSize: '3rem' }} />
        <Typography>ONE BLOCK AT A TIME</Typography>
      </Grid >
      <Grid width='36rem' sx={{ m: '1rem auto' }}>
        <Typography variant='h4'
          sx={{
            m: 2, color: '#00053A'
          }}
        >One Blockchain To Meet All Needs</Typography>
        <Typography variant='string' lg={3} sx={{ color: '#474747' }}>
          Don't forget to download your files. They will be download your discarded automatically after sixtyFour minutes.</Typography>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid xs={6} lg={3} sx={{border:'1px solid gray',m:2,pb:2,pl:1,pr:1}}>
          <TokenIcon sx={{fontSize:'10rem',color: '#00053A'}} />
          <Typography variant='h5' sx={{color: '#171A38',m:1,fontSize:'1.5rem'}}>100% Decentralized</Typography>
          <Typography sx={{fontSize:'1rem',color: '#474747'}}>
          for example, with certain font-size to line-height, you can see part of the next line also with justhe
          </Typography>
        </Grid>
        <Grid xs={6} lg={3} sx={{border:'1px solid gray',m:2,pb:2,pl:1,pr:1}}>
          <TokenIcon sx={{fontSize:'10rem',color: '#00053A'}} />
          <Typography variant='h5' sx={{color: '#171A38',m:1}}>100% On-Chain</Typography>
          <Typography sx={{fontSize:'1rem',color: '#474747'}}>
          for example, with certain font-size to line-height, you can see part of the next line also with justhe
          </Typography>
        </Grid>
        <Grid xs={6} lg={3} sx={{border:'1px solid gray',m:2,pb:2,pl:1,pr:1}}>
          <TokenIcon sx={{fontSize:'10rem',color: '#00053A'}} />
          <Typography variant='h5' sx={{color: '#171A38',m:1}}>100% Verified</Typography>
          <Typography sx={{fontSize:'1rem',color: '#474747'}}>
          for example, with certain font-size to line-height, you can see part of the next line also with justhe
          </Typography>
        </Grid>
      </Grid>
    </Box >
  )
}
