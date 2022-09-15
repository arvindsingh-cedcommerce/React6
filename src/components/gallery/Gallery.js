import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography, useMediaQuery, useTheme, useThemeProps } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import Slide from '@mui/material/Slide';
import React from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//This component will show Gallery section
const Gallery = () => {
  const [open, setOpen] = React.useState(false);
  const [path, setPath] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Open = (path) => {
    setPath(path);
    handleClickOpen();
  }
  return (
    <>
      <Box mt={11} justifyContent="center" textAlign="center" >
        <Typography variant="h4" sx={{ fontFamily: 'Aladin', fontWeight: 'bold', color: '#f6b125', mb: 5 }}><i>Gallery</i></Typography>
        <Grid container justifyContent="space-around">
          <Grid item md={4}>
            <img src="images/gallery/rasgulla.webp" alt=""
              height={230} width={300} style={{ borderRadius: '5px', border: '1px solid #f6b125' }} 
              onClick={()=>Open('images/gallery/rasgulla.webp')} />
          </Grid>
          <Grid item md={4}>
            <img src="images/gallery/rasmalai.webp" alt=""
              height={230} width={300} style={{ borderRadius: '5px', border: '1px solid #f6b125' }} 
              onClick={()=>Open('images/gallery/rasmalai.webp')}/>
          </Grid>
          <Grid item md={4}>
            <img src="images/gallery/gulaab-jamun.webp" alt=""
              height={230} width={300} style={{ borderRadius: '5px', border: '1px solid #f6b125' }} 
              onClick={()=>Open('images/gallery/gulaab-jamun.webp')}/>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogActions>
          <ClearIcon onClick={handleClose} cursor="pointer" />
        </DialogActions>
        <DialogContent>
          <img src={path} alt=""
            height={540} width={950} style={{borderRadius:'50px'}} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Gallery