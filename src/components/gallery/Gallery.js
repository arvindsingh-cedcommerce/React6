import { Box, Dialog, DialogActions, DialogContent, Grid, Typography } from '@mui/material'
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
        <Typography variant="h4" sx={{ fontFamily: 'Aladin', fontWeight: 'bold', color: '#7e1515', mb: 5 }}>Gallery</Typography>
        <Grid container justifyContent="space-around">
          <Grid item md={4}>
            <img src="images/gallery/gallery1.jpg" alt=""
              height={230} width={300} style={{ borderRadius: '15px'}}
              onClick={() => Open('images/gallery/gallery1.jpg')} />
          </Grid>
          <Grid item md={4}>
            <img src="images/gallery/gallery2.jpg" alt=""
              height={230} width={300} style={{ borderRadius: '15px' }}
              onClick={() => Open('images/gallery/gallery2.jpg')} />
          </Grid>
          <Grid item md={4}>
            <img src="images/gallery/gallery3.webp" alt=""
              height={230} width={300} style={{ borderRadius: '15px' }}
              onClick={() => Open('images/gallery/gallery3.webp')} />
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
            height={540} width={950} style={{ borderRadius: '50px' }} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Gallery