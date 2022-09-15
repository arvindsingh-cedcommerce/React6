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
      path: 'images/gulab-jamun.webp',
      name: 'Gulab Jamun'
    },
    {
      path: 'images/rasugulla.webp',
      name: 'Rasgulla'
    },
    {
      path: 'images/jalebi.webp',
      name: 'Jalebi'
    },
    {
      path: 'images/laddu.webp',
      name: 'Ladoo'
    },
    {
      path: 'images/barfi.webp',
      name: 'Barfi'
    },
    {
      path: 'images/soan-papdi.webp',
      name: 'Soan Papdi'
    },
    {
      path: 'images/peda.webp',
      name: 'Peda'
    },
    {
      path: 'images/halwa.webp',
      name: 'Halwa'
    }
  ]
  //Styled Typography
  const StyledTypo = styled(Typography)({
    color: '#f6b125',
    fontSize: '40px',
    minHeight: 'auto',
    fontFamily: "Aladin",
    lineHeight: '1.5',
    fontWeight: 'bold',
    marginBottom: '15px'
  })

  const StyledTypo1 = styled(Typography)({
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '22px'
  })
//It will redirect to the products page
  const Products = (name) => {
    setCategory(name);
    navi('/products')
  }
  const navi = useNavigate();

  return (
    <Box textAlign="center" mt={4}>
      <StyledTypo><i>Sweets</i></StyledTypo>
      <Grid container>
        {varieties.map((variety, i) => (
          <Grid item md={3} onClick={()=>Products(variety.name)} sx={{ cursor: 'pointer',mb:8 }}>
            <img src={variety.path} alt=""
              style={{ height: 228 }} />
            <StyledTypo1>{variety.name}</StyledTypo1>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Category