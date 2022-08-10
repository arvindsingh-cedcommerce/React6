import { FormControl, FormControlLabel, Grid, RadioGroup, TextField, Typography, Radio, Button } from "@mui/material";
import { Box } from "@mui/system";

import { HeadTitle } from '../style/section1';



export default function Section1() {
  return (
    <Box
      sx={{
        backgroundColor:'rgba(98,168,69)',
        p: '30px'
      }}
    >
      <Grid justifyContent={'center'}>
        <Grid sx={{ m: 6 }}>
          <HeadTitle variant='h2'>ooba</HeadTitle>
          <Typography variant="string" component="h3"
            sx={{ m: 2, color: 'white' }}
          >
            Get a helping hand with your home loan.
          </Typography>
        </Grid>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item md={6} lg={4}
            sx={{ textAlign: 'start', color: 'white' }}
          >
            <Typography variant="subtitle1"
              sx={{ mb: 2 }} >
              We are South Africa'a largest bond originator, responsible for the first generation of the first generation of the first generation of the first generation of the first generation of the first generation of the first generation of the first generation of the first.
            </Typography>
            <Typography variant="subtitle1">
              We make the process quick and easy. See process accompanying LICENSE file forEachRight forEachRight the doctor make the process quick and easy. LICENSE file forEachRight forEachRight the doctor
            </Typography>
          </Grid>
          <Grid item md={6} lg={5} justifyContent={'center'}
            sx={{ backgroundColor: 'rgba(103,192,64)', ml: 3, p: 2 }}
          >
            <Grid sx={{ mb: 2 }} container justifyContent={'space-around'} >
              <TextField label='Title' variant="outlined"
                sx={{ backgroundColor: 'white' }}
              />
              <TextField label='FirstName *' variant="outlined"
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>

            <Grid sx={{ mb: 2 }} container justifyContent={'space-around'}>
              <TextField label='LastName *' variant="outlined"
                sx={{ backgroundColor: 'white' }}
              />
              <TextField label='Email *' variant="outlined"
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>

            <Grid sx={{ mb: 2 }} container justifyContent={'space-around'}>
              <TextField label='Phone Number *' variant="outlined"
                sx={{ backgroundColor: 'white' }}
              />
              <TextField label='ID Number *' variant="outlined"
                sx={{ backgroundColor: 'white' }}
              />
            </Grid>

            <Grid container 
            sx={{color: 'white'}}
            >
              <Grid md={8} lg={8}>
                <Typography variant="string" component='h4'>Do you have a signed sale agreement for a property</Typography>
              </Grid>
              <Grid md={4} lg={2} 
              sx={{color: 'white'}}
              >
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    
                  >
                    <FormControlLabel sx={{mb:-1}} variant="string" component='h4' value='Yes' control={<Radio sx={{color: 'white'}} />} label='Yes' />
                    <FormControlLabel value='No' control={<Radio sx={{color: 'white'}} />} label='No' />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
<Grid textAlign={'start'}>
<Button variant="contained" color="secondary">PREQUALIFY ME</Button>
</Grid>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}