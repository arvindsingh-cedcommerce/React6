import React from 'react'
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{
            backgroundColor: 'rgba(46,44,57)', color:'white', padding:'3vw 0'
        }}>
        <Grid container justifyContent={'center'} textAlign='start'>
            <Grid md={4} lg={2} sx={{mr:'8vw'}}>
                <Typography variant='string' component='h3' mb={2} >Head Office</Typography>
                <Typography mb={2}>8th Floor, ooba house, 33 Bree Street Cape Town 8001</Typography>
                <Typography>Tel: +27 21 481 7300</Typography>
            </Grid>
            <Grid sx={2} md={4} lg={5}>
                <Typography mb={2}  >
                    The ooba group subsidiaries Property Protextor Financial Services and ooba&nbsp; Admission Services are Authorised Financial Servicess Providers (FSP No's:216 & 46293).
                </Typography>
                <Typography variant='string' component='h4'>FSP Website</Typography>
            </Grid>
        </Grid>
        </Box>
    )
}
