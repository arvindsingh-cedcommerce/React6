import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Section3() {
  return (
    <Box 
    sx={{background: "url('images/home-cover.png') #99A3D8", color:'#FFFFFF'}}
    >
        <Typography variant='h4' 
        sx={{p: 5}}
        >
          Social marketing chnages all the time: there are things hard to identify, things hard to exeute. That's why we created a premium space for you to be at the forefront of what's new and exciting.
        </Typography>
    </Box>
  )
}
