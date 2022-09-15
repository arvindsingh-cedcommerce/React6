import { Box, styled, Typography, Grid, Paper, Button, FormControl,  Dialog, DialogTitle, DialogContent, DialogContentText, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContextData } from '../../ContextFile'
import Footer from '../footer/Footer';
import RoomIcon from '@mui/icons-material/Room';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import TemporaryDrawer from '../rightbar/RightBar';
import FullScreenDialog from './CheckoutDetails';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Slide from '@mui/material/Slide';

//Styled  Link
const StyledLink = styled(Link)`
 padding:.5rem 3.4375rem;
 background-color:#ca9b3c;
 text-decoration:none;
 color:#fff;
 outline-color:transparent;
 transition: 0.3s;
`

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }));

//Upward transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//Downward transition
const Transition1 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

//Cart Component
const Cart = () => {
  const { itemNumber, setItemNumber, productArray, setProductArray, total, setTotal } = useContext(ContextData);
  const navi = useNavigate();
  const [quant, setQuant] = React.useState('');
  const [flag, setFlag] = useState(false);

  const handleChange = (event, i) => {
    let value = event.target.value;
    if (value !== '') {
      let temp = [...productArray];
      temp[i].quantity = value;
      temp[i].subtotal = temp[i].price * temp[i].quantity;
      setProductArray(temp);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setFlag(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
    setFlag(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const Save = (i) => {
    handleClose();
    if (quant !== '') {
      let temp = [...productArray];
      temp[i].quantity = +quant;
      temp[i].subtotal = temp[i].price * temp[i].quantity;
      setProductArray(temp);
      setFlag(true);
    }
  }

  const Delete = (i) => {
    let temp = [...productArray];
    temp.splice(i, 1);
    setProductArray(temp);
    setItemNumber(itemNumber - 1);
  };
  //It will maintain total amount of all the cart products
  useEffect(() => {
    Total();
  }, [productArray]);

  const Total = () => {
    let sum = 0;
    productArray.map(item => {
      sum += item.subtotal;
    })
    setTotal(sum);
  }

  return (
    <>
      {productArray.length < 1 ?
        <Box sx={{ backgroundColor: '#E2E2E2', pt: 17.5, pb: 3, height: '100%' }}>
          <Box sx={{
            display: 'grid', placeItems: 'center', pt: 10, pb: 30, height: 200, borderRadius: '10px',
            backgroundColor: 'white'
          }}>
            <img src="images/empty-cart.jpg" alt="" />
            <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 3, color: '#414141' }}>Your Cart is Empty</Typography>
            <Typography variant="string" sx={{ pb: 2, color: '#808080' }}>Looks Like You haven't made Your Choice Yet</Typography>
            <StyledLink to='/' >Start Shopping</StyledLink>
          </Box>
        </Box> :
        <>
          <Grid container sx={{
            backgroundColor: '#E2E2E2', mt: 11, pt: 5.5,
            width: { xs: '100%' }
          }}>
            <Grid item xs={12} sm={12} md={8}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: '100%',
                    minHeight: '60vh'
                  },
                }}
              >
                <Paper elevation={3}>
                  <Grid container justifyContent="space-around" p={1.6}>
                    <Grid item md={6} display="flex">
                      <Typography>My Cart ( {itemNumber} item)</Typography>
                      <Typography sx={{ ml: 1, fontSize: '13px' }}><Link to='/cart' onClick={() => { setProductArray([]); setItemNumber(0) }}>CLEAR CART</Link></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Grid container>
                        <Grid item xs={8} md={8}>
                          <Typography sx={{ fontWeight: 'bold', color: '#4A4C4C' }}><RoomIcon sx={{ color: "#067ECD" }} />Enter Delivery Pincode</Typography>
                        </Grid>
                        <Grid item xs={8} md={3}>
                          <Button variant="outlined" size="small" onClick={handleClickOpen1}>
                            ADD</Button>
                          <Box sx={{backgroundColor:'red',display: 'grid', placeItems: 'center' }}>
                            <Dialog
                              open={open1}
                              TransitionComponent={Transition1}
                              keepMounted
                              onClose={handleClose1}
                              aria-describedby="alert-dialog-slide-description"
                              sx={{ maxWidth: 400,ml:35, borderRadius: '10px' }}>
                              <Grid sx={{ p: 1, display: 'grid', placeItems: 'end' }}>
                                <CloseIcon sx={{ color: 'gray', cursor: 'pointer' }} onClick={handleClose1} />
                              </Grid>
                              <DialogTitle>{<Box sx={{ mr: 2, mt: -4, display: 'grid', placeItems: 'center', fontSize: '15px' }}>Enter Pincode to Check Availability & Delivery Options</Box>}</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                  <Box
                                    component="form"
                                    sx={{
                                      '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <TextField id="standard-basic" label="Enter Pincode"
                                      type="number"
                                      variant="standard" sx={{ width: '95%' }} />
                                  </Box>
                                </DialogContentText>
                              </DialogContent>
                              <Box sx={{ display: 'grid', placeItems: 'center' }}>
                                <Button variant='contained' sx={{ backgroundColor: '#ca9b3c', width: '100%', '&:hover': { backgroundColor: '#ca9b3c' } }} onClick={handleClose1}>Apply</Button>
                              </Box>
                            </Dialog>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container backgroundColor="#F4F4F4" justifyContent="space-between"
                    sx={{ placeItems: 'center', p: 1.6 }}>
                    <Grid item xs={8} md={8}>Item(s) Details</Grid>
                    <Grid item xs={2} md={2}>Quantity</Grid>
                    <Grid item xs={2} md={2}>Amount</Grid>
                  </Grid>
                  <Grid continer mt={2} justifyContent="space-between">
                    {productArray.map((item, i) => (
                      <>
                        <Grid container pl={1}>
                          <Grid item md={2}>
                            <Paper variant="outlined" sx={{ textAlign: 'center', p: 1 }} >
                              <img src={item.image} alt="" width="70" height="70" />
                            </Paper>
                          </Grid>
                          <Grid item xs={6} sm={7} md={6} sx={{ pl: 1 }}>
                            <Typography variant='body2' sx={{ fontSize: '14px', pl: 1, pb: 1 }}>
                              {item.name}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', p: 1 }}>&#8377;{item.price}</Typography>
                            <Box display="flex" sx={{ pl: 1, '&:hover': { cursor: 'pointer', color: '#0016C5' } }} onClick={() => Delete(i)}>
                              <Typography><CloseIcon sx={{ fontSize: '13px' }} /></Typography>
                              <Typography sx={{ pl: 1, fontWeight: 'bold', fontSize: '11px' }}>
                                REMOVE</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={2} md={2}>
                            <FormControl sx={{ m: 1 }} variant="standard">
                              <select
                                value={item.quantity}
                                onChange={(e) => {
                                  if (e.target.value === quant) {
                                    handleClickOpen();
                                  }
                                  handleChange(e, i);
                                }}
                                style={{ padding: 5, marginLeft: -12, borderRadius: '5px', background: 'white' }}
                              >
                                <option value={1} style={{ fontSize: 15 }}>1</option>
                                <option value={2} style={{ fontSize: 15 }}>2</option>
                                <option value={3} style={{ fontSize: 15 }}>3</option>
                                <option value={4} style={{ fontSize: 15 }}>4</option>
                                <option value={5} style={{ fontSize: 15 }}>5</option>
                                {quant &&
                                  <option value={quant} style={{ fontSize: 15 }}>{quant}</option>
                                }
                                <option value={quant} style={{ fontSize: 15 }}>More</option>
                              </select>
                            </FormControl>
                          </Grid>
                          <div style={{ borderRadius: '10px' }}>
                            <Dialog
                              open={open}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={handleClose}
                              aria-describedby="alert-dialog-slide-description"
                              sx={{ minWidth: 200, borderRadius: '10px' }}>
                              <Grid sx={{ p: 1, display: 'grid', placeItems: 'end' }}>
                                <CloseIcon sx={{ color: 'gray', cursor: 'pointer' }} onClick={handleClose} />
                              </Grid>
                              <DialogTitle>{<Box sx={{ mr: 2, mt: -4, display: 'grid', placeItems: 'center', fontSize: '15px' }}>{item.name}</Box>}</DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                  <Box
                                    component="form"
                                    sx={{
                                      '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                  >
                                    <TextField id="standard-basic" label="Enter Quantity"
                                      type="number"
                                      variant="standard" sx={{ width: '95%' }} value={quant}
                                      onChange={(e) => setQuant(e.target.value)} />
                                  </Box>
                                </DialogContentText>
                              </DialogContent>
                              <Box sx={{ display: 'grid', placeItems: 'center' }}>
                                <Button variant='contained' sx={{ backgroundColor: '#ca9b3c', width: '100%', '&:hover': { backgroundColor: '#ca9b3c' } }} onClick={() => Save(i)}>save</Button>
                              </Box>
                            </Dialog>
                          </div>
                          <Grid item xs={1} sm={1} md={2}>&#8377;{item.subtotal}</Grid>
                        </Grid>
                        <Divider sx={{ mt: 2, mb: 2 }} />
                      </>
                    ))}
                  </Grid>
                  <Grid sx={{ display: "grid", placeItems: "center" }}>
                    <Button variant='outlined' startIcon={<NavigateBeforeIcon />}
                      sx={{ mt: 3, color: '#ca9b3c', border: '1px solid #ca9b3c', mb: 1, '&:hover': { color: '#fff', backgroundColor: '#ca9b3c', border: '1px solid #ca9b3c' } }} onClick={() => navi('/products')}>Continue Shoppping</Button>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} pt={1}>
              <TemporaryDrawer />
              <Grid container sx={{ backgroundColor: '#fff', mt: 2, borderRadius: '5px' }}>
                <Grid container justifyContent="space-between" p={2} sx={{ color: "#898888" }}>
                  <Grid item md={9}><Typography variant='body1' sx={{ fontWeight: 'bold' }}>Item(s) Total</Typography></Grid>
                  <Grid item md={2}><Typography variant='body1' sx={{ fontWeight: 'bold' }}>&#8377;{total}</Typography></Grid>
                </Grid>
                <Grid container justifyContent="space-between" p={2}
                  sx={{ color: "#898888" }} >
                  <Grid item md={9}><Typography>Approx. Delivery Charge</Typography></Grid>
                  <Grid item md={2}><Typography color="green">Free</Typography></Grid>
                </Grid>
                <Divider sx={{ height: '1px', width: '100%' }} />
                <Grid container justifyContent="space-between" p={2} >
                  <Grid item md={9}><Typography sx={{ fontWeight: 'bold' }}>Amount Payable</Typography></Grid>
                  <Grid item md={2}><Typography sx={{ fontWeight: 'bold' }}>&#8377;{total}</Typography></Grid>
                </Grid>
                <Grid xs={12}>
                  <Typography sx={{ fontSize: '10px', pl: 2, mt: -1, color: 'gray' }} >Prices may change based on shipping address</Typography>
                </Grid>
                <Grid xs={12} textAlign="center" p={2}>
                  <FullScreenDialog />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Footer />
        </>}
    </>
  )
}

export default Cart