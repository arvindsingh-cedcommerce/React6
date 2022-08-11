import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import DvrTwoToneIcon from '@mui/icons-material/DvrTwoTone';
import DevicesOtherTwoToneIcon from '@mui/icons-material/DevicesOtherTwoTone';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';

export default function Section2() {
  return (
    <Box sx={{ mt: '5rem' }}>
      {/* Parent grid that is containeing 4 grids inside it */}
      <Grid container justifyContent={'center'} >
        {/* Grid 1 */}
        <Grid lg={3} sx={{ mr: 3, mb: 3, border: '1px solid #E8E8E8' }}>
          <DvrTwoToneIcon sx={{ fontSize: '7rem', color: '#575DBD', mb: 2 }} /><Divider />
          <Typography variant='string' component='h3'
            sx={{ color: '#575DBD', mb: 2, mt: 2 }}
          >VIDEO COURSES
          </Typography><Divider />
          <Typography variant='body2' sx={{ color: '#333', mt: 2 }}>
            Video Course is a video which shows you an ecran, while in the background you can hear a  that were raised. © 2010 - 2020.
          </Typography>
        </Grid>
        {/* Grid 2 */}
        <Grid lg={3} sx={{ mr: 3, mb: 3, border: '1px solid #E8E8E8' }}>
          <LiveTvTwoToneIcon sx={{ fontSize: '7rem', color: '#575DBD', mb: 2 }} /><Divider />
          <Typography variant='string' component='h3'
            sx={{ color: '#575DBD', mb: 2, mt: 2 }}
          >LIVE WEBINARS
          </Typography><Divider />
          <Typography variant='body2' sx={{ color: '#333' }}>
            A webinar (or web seminar) is a live online conference or presentation. Getting information, questions, and discussing in real-time.
          </Typography>
        </Grid>
        {/* Grid 3 */}
        <Grid lg={3} sx={{ mr: 3, mb: 3, border: '1px solid #E8E8E8' }}>
          <DevicesOtherTwoToneIcon sx={{ fontSize: '7rem', color: '#575DBD', mb: 2 }} /><Divider />
          <Typography variant='string' component='h3'
            sx={{ color: '#575DBD', mb: 2, mt: 2 }}
          >AD GALLERY
          </Typography><Divider />
          <Typography variant='body2' sx={{ color: '#333' }}>
            Gallery ads are a swipeable, image-based adhg format that gives customers the informationt gfyghgyhyh search results page.
          </Typography>
        </Grid>
        {/* Grid 3 */}
        <Grid lg={3} sx={{ mr: 3, mb: 3, border: '1px solid #E8E8E8' }}>
          <ScienceTwoToneIcon sx={{ fontSize: '7rem', color: '#575DBD', mb: 2 }} /><Divider />
          <Typography variant='string' component='h3'
            sx={{ color: '#575DBD', mb: 2, mt: 2 }} >EXPERIMENTS
          </Typography><Divider />
          <Typography variant='body2' sx={{ color: '#333' }}>
            A procedure carried out under controlled conditions bghtgyygh in order to discover an unknown effec hypothesis,  or to illustrate a known law.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
