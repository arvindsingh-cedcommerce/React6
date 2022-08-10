import React from 'react'
import { Box } from '@mui/system';
import { Boxes, Section3Box } from '../style/section3';
import { Section2Head } from '../style/section2';
import { Grid, IconButton, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DoneIcon from '@mui/icons-material/Done';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import  styled  from 'styled-components';
import { Button } from '@mui/material';



export default function Section3() {
  return (
    <Section3Box>
        <Section2Head variant='h3' sx={{mb:3}} >Reasons to use ooba</Section2Head>
        <Grid container justifyContent={'center'}
        sx={{p:1,color:'white'}} lg={12}
        >
          <Boxes md={3} lg={3} >
          <SchoolIcon sx={{fontSize:'3em'}} />
          <Typography variant='subtitle1' sx={{fontSize:'1.2em'}}>Expert Advice</Typography>
          </Boxes>
          <Boxes md={3} lg={3} >
          <ThumbUpIcon sx={{fontSize:'3em'}}/>
          <Typography variant='subtitle1' sx={{fontSize:'1.2em'}}>Our service is completely free</Typography>
          </Boxes>
          <Boxes md={3} lg={3} >
          <DoneIcon sx={{fontSize:'3em'}}/>
          <Typography variant='subtitle1' sx={{fontSize:'1.2em'}}>70% of applications approved</Typography>
          </Boxes>
          <Boxes md={3} lg={3} >
          <PostAddIcon sx={{fontSize:'3em'}}/>
          <Typography variant='subtitle1' sx={{fontSize:'1.2em'}}>We handle the paper work</Typography>
          </Boxes>
          <Boxes md={3} lg={3} >
          <AccountBalanceIcon sx={{fontSize:'3em'}}/>
          <Typography variant='subtitle1' sx={{fontSize:'1.2em'}}>Can apply with up to 8 banks</Typography>
          </Boxes>
        </Grid>
        <Button variant='contained' 
        sx={{padding:'0.7vw 4.5vw 0.7vw 4.5vw', backgroundColor:'purple',  }}
        >I'M READY, PREQUALIFY ME</Button>
    </Section3Box>
  )
}
