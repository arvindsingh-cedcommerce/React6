import { Box,CardActions, CardContent, CardMedia,  styled, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import './Catering.css'

let contents = [
 {
  path: 'images/catering/wedding.webp',
  title: 'Weddings',
  content: 'We make sure to make your wedding more memorable by serving the best food to you and your guests.'
 },
 {
  path: 'images/catering/corporate.webp',
  title: 'Corporate Events',
  content: 'Make your next event a success. We serve the right kind of delicacies keeping in mind your guest profile.'
 },
 {
  path: 'images/catering/private_events.webp',
  title: 'Private Events',
  content: 'We ensure that the event is made memorable with exquisite delicacies prepared according to the theme of the event.'
 },
 {
  path: 'images/catering/birthday_parties.webp',
  title: 'Birthday Parties',
  content: 'Our team is committed to provide smooth execution of your events by providing delicious food.'
 }
]

const StyledTypo = styled(Typography)({
 marginTop: 29,
 textAlign: 'center',
 color: '#f6b125',
 fontSize: '35px',
 minHeight: 'auto',
 fontFamily: "Aladin",
 lineHeight: '1.5',
 fontWeight: 'bold'
})
// const StyledTypo1 = styled(Typography)({
//  // fontWeight: 'bold',
//  color: '#fff',
//  fontSize: '22px',
//  margin: '13px'

// })
// const StyledTypo2 = styled(Typography)({
//  color: '#fff',
//  fontSize: '16px'
// })
// const StyledCard = styled(Card)`
// background:#221f2d;
// color:white;
// maxWidth: 360px;
// display:grid;
// placeItems:center;

// `
//This component will show Categring Services
const Categring_Services = () => {
 return (
  <>
   <StyledTypo><i>Our Catering Services</i></StyledTypo>
   <Box display="flex" mt={5} justifyContent="center">
    {contents.map((item, i) => (

     <Card  sx={{ background: 'linear-gradient(rgba(34, 31, 45, 0.81),rgba(34, 31, 45, 0.81)), url("images/bg1.jpg")', color: 'white', maxWidth: 240, display: "grid", placeItems: "center",height:500 }}>
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
       <button id='btn' style={{cursor:'pointer'}}>Enquire Now</button>
      </CardActions>
     </Card>
    ))}
   </Box>
  </>
 )
}

export default Categring_Services