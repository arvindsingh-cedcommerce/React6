import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Slide from '@mui/material/Slide';
import { Box, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import { ContextData } from '../../ContextFile';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//Checkout form Component
export default function FullScreenDialog() {

  let { setProductArray, setItemNumber, setSingup, showname } = React.useContext(ContextData);
  const navi = useNavigate();
  const [name, setName] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [pincode, setPincode] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [landmark, setLandmark] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setSate] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const Close = () => {
    handleClose2();
    setProductArray([]);
    setItemNumber(0);
    navi('/');
  }
  const Checkout = () => {
    if (name !== '' && mobile !== '' && pincode !== '' && house !== '' && landmark !== '' && city !== '' && state !== '') {
      handleClickOpen2();
    }
    else {
      handleClickOpen1();
    }
  }

  return (
    <div>
      <Button variant='contained'
        sx={{ width: '100%', backgroundColor: '#7e1717', '&:hover': { backgroundColor: '#802F2F' } }} onClick={() => {
          if (showname)
            handleClickOpen();
          else
            setSingup(true);
        }}>CHECKOUT</Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#221f2d' }}>
          <Toolbar>
            <Box sx={{ ml: 2, flex: 1 }}>
              <img src="images/sweetshop-logo.webp" alt="" style={{ height: 85 }} />
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <KeyboardDoubleArrowDownIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List sx={{ p: 3 }}>
          <Typography variant='h6' sx={{ pl: 1, pb: 6, fontWeight: 'bold' }}>DELIVERY ADDRESS</Typography>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label={
                <Typography variant="subtitle2">NAME</Typography>} variant="standard" sx={{ mr: 5, width: 300 }}
                value={name} onChange={e => setName(e.target.value)} />
              <PhoneInTalkRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label={<Typography variant="subtitle2">MOBILE NUMBER</Typography>} variant="standard" sx={{ width: 300 }} value={mobile}
                onChange={e => setMobile(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="input-with-sx" label={<Typography variant="subtitle2" >PINCODE</Typography>} variant="standard" sx={{ width: 333 }} value={pincode}
                onChange={e => setPincode(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="input-with-sx" label={<Typography variant="subtitle2">HOUSE / FLAT / BLOCK NO. / BUILDING NAME</Typography>} variant="standard" sx={{ mr: 5, width: 333 }} value={house}
                onChange={e => setHouse(e.target.value)} />
              <TextField id="input-with-sx" label={<Typography variant="subtitle2">STREET / ROAD / COLONY NAME </Typography>} variant="standard" sx={{ width: 333 }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="input-with-sx" label={<Typography variant="subtitle2" >LANDMARK</Typography>} variant="standard" sx={{ width: 333 }} value={landmark} onChange={e => setLandmark(e.target.value)} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField id="input-with-sx" label={<Typography variant="subtitle2">CITY / TOWN</Typography>} variant="standard" sx={{ mr: 5, width: 333 }}
                value={city} onChange={e => setCity(e.target.value)} />
              <TextField id="input-with-sx" label={<Typography variant="subtitle2">STATE</Typography>} variant="standard" sx={{ width: 333 }} value={state} onChange={e => setSate(e.target.value)} />
            </Box>
            <Box pt={5}>
              <Button variant="contained" sx={{ backgroundColor: '#ca9b3c', width: '30%', '&:hover': { backgroundColor: '#BD8616' } }} onClick={Checkout}>Order</Button>
            </Box>
          </Box>
        </List>
        <div>
          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Your order has been placed successfully."}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                It will be deliverd shortly.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" sx={{ backgroundColor: '#ca9b3c', '&:hover': { backgroundColor: '#ca9b3c' } }} onClick={Close}>OK</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div>
          <Dialog
            open={open1}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose1}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"All Feilds are required**"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Fill all the feilds so that we can reach out to you hasselfree.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" sx={{ backgroundColor: '#ca9b3c', '&:hover': { backgroundColor: '#ca9b3c' } }} onClick={handleClose1}>OK</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Dialog>
    </div>
  );
}
