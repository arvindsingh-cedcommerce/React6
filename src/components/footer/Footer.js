import { Box, Grid, Link, styled, Typography } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const preventDefault = (event) => event.preventDefault();

//This component will show Footer
const Footer = () => {
  const StyledLink = styled(Link)`
    color:#232323;
    text-decoration:none;
    margin-left:20px;
  `
  const StyledLink1 = styled(Link)`
    color:;
    text-decoration:none;
    margin-right:15px;
  `
  return (
    <Box sx={{ backgroundColor:'#FFEBF1', color: '#232323', pt: 7, pb: 5, pr: 1 }}>
      <Grid container justifyContent="space-between">
        <Grid item md={5}>
          <Box
            sx={{
              spacing: '2px',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              typography: 'body2',
              '& > :not(style) + :not(style)': {
              },
            }}
            onClick={preventDefault}
          >
            <StyledLink href="#" >
              {'HOME'}
            </StyledLink>
            <StyledLink href="#" >
              {'SWEETS'}
            </StyledLink>
            <StyledLink href="#" >
              {'PRODUCTS'}
            </StyledLink>
            <StyledLink href="#" >
              {'SERVICES'}
            </StyledLink>
            <StyledLink href="# ">
              {'MORE'}
            </StyledLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: 3 }}>
          <Box textAlign="right">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
          <Box textAlign="right">
            <Typography>contact@cedcoss.com</Typography>
          </Box>
          <Box textAlign="right">
            <Typography>&copy; Copyrights 2022 - 2023.Sweet Center.All Rights Reserved. </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid>

        <Box
          sx={{
            ml: 2,
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            typography: 'body2',
            '& > :not(style) + :not(style)': {

            },
          }}
          onClick={preventDefault}
        ><Typography>CHANGE LANGUAGE:</Typography>
          <StyledLink1 href="#" sx={{ color: '#7e1717' }} >
            {'English'}
          </StyledLink1>
          <StyledLink1 href="#" >
            {'हिंदी'}
          </StyledLink1>
          <StyledLink1 href="#" >
            {'मराठी'}
          </StyledLink1>
          <StyledLink1 href="#" >
            {'বাংলা'}
          </StyledLink1>
          <StyledLink1 href="# ">
            {'தமிழ்'}
          </StyledLink1>
          <StyledLink1 href="# ">
            {'ગુજરાતી'}
          </StyledLink1>
          <StyledLink1 href="# ">
            {'ಕನ್ನಡ'}
          </StyledLink1>
          <StyledLink1 href="# ">
            {'മലയാളം'}
          </StyledLink1>
          <StyledLink1 href="# ">
            {'తెలుగు'}
          </StyledLink1>
          <StyledLink1 href="# ">
            {'ਪੰਜਾਬੀ'}
          </StyledLink1>
        </Box>
      </Grid>
    </Box>
  )
}

export default Footer