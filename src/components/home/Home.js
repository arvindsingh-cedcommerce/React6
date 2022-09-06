import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Catogories from '../category/Catogories'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import Recents from '../recents/Recents'
import Rightbar from '../rightbar/Rightbar'
const style = {
  // fontFamily: "'Anton', sans-serif"
// fontFamily: "'Combo', cursive"
// fontFamily: "'Lobster', cursive"
// fontFamily: "'Oswald', sans-serif"
// fontFamily: "'Press Start 2P', cursive"
}
const Home = () => {
  return (
    <>
      <Navbar style={style} />
      <Box>
        <Hero />
        <Container>
          <Catogories />
          <hr />
          <Stack direction={{xs: 'column', md: 'row'}} spacing={5} mt={8}>
            <Box flex={3}  sx={{ md:{padding: "18px 100px 100px 100px"} }}>
              <Recents />
            </Box>
            <Box flex={1}>
              <Rightbar />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home