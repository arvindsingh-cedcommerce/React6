import { Box,CardActions, CardContent, CardMedia,  styled, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import './Catering.css'

let contents = [
 {
  path: 'images/exclusive_store/learn-with-toys.webp',
  title: 'Learn With Toys',
  content: 'We make sure to make your wedding more memorable by serving the best food to you and your guests.'
 },
 {
  path: 'images/exclusive_store/numbers.webp',
  title: 'Numbers',
  content: 'Make your next event a success. We serve the right kind of delicacies keeping in mind your guest profile.'
 },
 {
  path: 'images/exclusive_store/colors.webp',
  title: 'Colours',
  content: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.'
 },
 {
  path: 'images/exclusive_store/letters.webp',
  title: 'Letters',
  content: 'Our team is committed to provide smooth execution of your events by providing delicious food.'
 }
]

const StyledTypo = styled(Typography)({
 marginTop: 29,
 textAlign: 'center',
 color: '#7e1717',
 fontSize: '35px',
 minHeight: 'auto',
 fontFamily: "Aladin",
 lineHeight: '1.5',
 fontWeight: 'bold'
})

//This component will show Categring Services
const Categring_Services = () => {
 return (
  <>
   <StyledTypo>Exclusive Store</StyledTypo>
   <Box display="flex" mt={5} justifyContent="center" sx={{width:'100vw'}}>
    {contents.map((item, i) => (

     <Card  sx={{ backgroundColor:'#fff', color: '#242424', maxWidth: 240, display: "grid",mr:0.8, placeItems: "center",height:500,'&:hover':{boxShadow:'0px 1px 11px red'} }}>
      <CardMedia
       component="img"
       alt="green iguana"
       image={item.path}
      />
      <CardContent sx={{ display: "grid", placeItems: "center" }} >
       <Typography gutterBottom variant="h5" component="div">
        {item.title}
       </Typography>
       <Typography variant="body2" >
        {item.content}
       </Typography>
      </CardContent>
      <CardActions >
       <button id='btn' style={{cursor:'pointer'}}>Try Now</button>
      </CardActions>
     </Card>
    ))}
   </Box>
  </>
 )
}

export default Categring_Services