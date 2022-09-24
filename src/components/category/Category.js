import { Box, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextData } from '../../ContextFile'

//This component will show category section
const Category = () => {
  let { setCategory } = useContext(ContextData);
  const varieties = [
    {
      path: 'images/train.webp',
      name: 'Trains & Vehicle'
    },
    {
      path: 'images/remote-toy.webp',
      name: 'Remote Controlled Toys'
    },
    {
      path: 'images/ride-on-cars.webp',
      name: 'Ride-On Cars'
    },
    {
      path: 'images/music-toy.webp',
      name: 'Musical Toys'
    },
    {
      path: 'images/dolls.webp',
      name: 'Dolls & Dollhouse'
    },
    {
      path: 'images/soft-toy.webp',
      name: 'Soft Toys'
    },
  ]
  //Styled Typography
  const StyledTypo = styled(Typography)({
    color: '#7e1515',
    fontSize: '40px',
    minHeight: 'auto',
    fontFamily: "Aladin",
    lineHeight: '1.5',
    fontWeight: 'bold',
    marginBottom: '15px'
  })

  const StyledTypo1 = styled(Typography)({
    marginTop:16,
    color: '#212121',
    fontSize: '22px',
    width:'200px'
  })
  //It will redirect to the products page
  const Products = (name) => {
    setCategory(name);
    navi('/products')
  }
  const navi = useNavigate();

  return (
    <Box textAlign="center" mt={4}>
      <StyledTypo>Category</StyledTypo>
      <Grid container sx={{justifyContent:'space-evenly'}}>
      {/* <Box sx={{justifyContent:'space-evenly',width:'50vw'}}> */}
        {varieties.map((variety, i) => (
          
            <Grid item md={3} onClick={() => Products(variety.name)} sx={{ cursor: 'pointer', mb: 7,mr:0.6,justifyContent:'center' }}>
              <img src={variety.path} alt=""
                style={{ width:290,height: 258,borderRadius:'20px' }}  />
              <StyledTypo1>{variety.name}</StyledTypo1>
            </Grid>
         
        ))}
         {/* </Box> */}
      </Grid>
    </Box>
  )
}

export default Category