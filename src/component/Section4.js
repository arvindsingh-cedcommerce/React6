import { Grid, Typography } from '@mui/material';
import React from 'react'
import { Section4Box } from '../style/section4';

export default function Section4() {
    return (
        <Section4Box >
            <Grid container justifyContent={'center'} >
                <Grid item md={6} lg={3}  mr={5}>
                    <img src='https://media1.popsugar-assets.com/files/thumbor/6bqKfoRA4M9CAk1O_w8xZfR-npY/0x63:2812x1539/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-/2022/07/08/755/n/1922283/5196df9962c86457011499.98802037_.jpg' alt='img'
                    width='105vw' height="120vh" style={{
                        borderRadius:'50%'
                    }}
                    />
                    <Typography variant='body1' sx={{marginBottom:'2rem'}}>
                     "This is our dream home and this is rally a dream come true for us!! Thanks a lot for your help  and quick responses."
                    </Typography>
                    <Typography variant='string' component='h4'>Sarita  and  Anrtonio Friguglietto, Johannesburg </Typography>
                </Grid>
                <Grid item md={6} lg={3} mr={5}>
                    <img src='https://pagesix.com/wp-content/uploads/sites/3/2022/07/Chris_Evans-1.jpg?quality=75&strip=all&w=1200' alt='img'
                    width='105vw' height="120vh" style={{
                        borderRadius:'50%'
                    }}
                    />
                    <Typography variant='body1' sx={{marginBottom:'2rem'}}>
                     "This you promptlys sorting out the issues we have  been having."
                    </Typography>
                    <Typography variant='string' component='h4'>Jason Currie, Meer en See - Richards Bay</Typography>
                </Grid>
                <Grid item md={6} lg={3}>
                    <img src='https://static.independent.co.uk/2022/07/18/09/newFile.jpg?width=1200' alt='img'
                    width='105vw' height="120vh" style={{
                        borderRadius:'50%'
                    }}
                    />
                    <Typography variant='body1' sx={{marginBottom:'2rem'}}>
                     "I can  say that I cannot  relate  to other people's  disappointment when buying a home."
                    </Typography>
                    <Typography variant='string' component='h4'>Sussan Seario,  Capse Town</Typography>
                </Grid>
            </Grid>
        </Section4Box>
    )
}
