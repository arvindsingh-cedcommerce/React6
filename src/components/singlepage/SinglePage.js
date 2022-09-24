import '../../data'
import { Box, Button, Grid, IconButton, Paper, Popover, Snackbar, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Footer from '../footer/Footer'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';
import { ContextData } from '../../ContextFile';
import CloseIcon from '@mui/icons-material/Close';

const data = require('../../data.json');
//This component will show SinglePage 
const SinglePage = () => {
  const products = data.products;
  const { itemNumber, setItemNumber, productArray, setProductArray, singleProductIndex } = useContext(ContextData);

  const [anchorEl, setAnchorEl] = React.useState(null);
  var flag = true;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const AddToCart = (index, ID) => {
    let temp = [];
    flag = true;
    if (productArray.length < 1) {
      setProductArray([products[index]]);
      setItemNumber(itemNumber + 1);
      handleClick1();
    }
    else {
      products.map((item) => {
        if (item.id === ID)
          temp = item;
      })
      console.log(temp);
      console.log(productArray);
      productArray.map((item, i) => {
        if (item.id === temp.id) {
          flag = false;
        }
      })
      if (flag) {
        setProductArray(prevState => [...prevState, temp]);
        setItemNumber(itemNumber + 1);
        handleClick1();
      }
      else {
        handleClick2();
      }
    }
  }
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };
  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen1(false);
    setOpen2(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose1}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose1}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      {products.map((sweet, i) => (
        <>
          {sweet.id === singleProductIndex ?
            <Box sx={{
              backgroundColor: '#E2E2E2', pt: 17.5, pl: 3, pr: 3,
              pb: 3
            }}>
              <Box sx={{ borderRadius: '11px', backgroundColor: '#fff', height: '100%', boxShadow: '1px 3px 3px #CFCFCD', pb: 10 }}>
                <Grid container justifyContent="space-between"  >
                  <Grid item xs={12} md={5} pt={5}
                    sx={{ display: 'grid', placeItems: 'center' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        '& > :not(style)': {
                          m: 1,
                          width: '100%',
                          height: 350,
                        },
                      }}
                    >
                      <Paper variant="outlined" sx={{ display: 'grid', placeItems: 'center' }}>
                        <img src={sweet.image} alt="" width={250} />
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid item container xs={12} md={7} pt={4} justifyContent="space-between" color="#3C3C3C" >
                    <Grid item xs={9} md={10} pt={3}  >
                      <Typography variant='h5' sx={{}}>{sweet.name}</Typography>
                      <Typography variant='body2' sx={{ color: 'gray' }}>{sweet.category}</Typography>
                      <Typography variant="h5" sx={{ pt: 4, fontWeight: 'bold' }}>&#8377;{sweet.price}</Typography>
                    </Grid>
                    <Grid item md={1} pt={3} textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#64D1E9' } }} onClick={handleClick}>
                      <IosShareOutlinedIcon sx={{ fontSize: '32px', color: '#3C3C3C', '&:hover': { color: '#64D1E9' } }} /><Typography fontSize={10} >SHARE</Typography>

                    </Grid>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorReference="anchorPosition"
                      anchorPosition={{ top: 190, left: 690 }}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      <Box display="flex" textAlign="center" sx={{ cursor: 'pointer' }} >
                        <Box p={2} >
                          <FacebookIcon sx={{ color: '#1E3A8D' }} />
                          <Typography>Facebook</Typography>
                        </Box>
                        <Box p={2}>
                          <TwitterIcon sx={{ color: '#257ED3' }} />
                          <Typography>Twitter</Typography>
                        </Box>
                        <Box p={2}>
                          <MarkunreadTwoToneIcon sx={{ color: 'red', backgroundColor: '#fff' }} />
                          <Typography>Email</Typography>
                        </Box>
                      </Box>
                    </Popover>
                    <Grid container sx={{ backgroundColor: '#EBEBEB', alignContent: 'center', borderRadius: '10px', mr: 1 }}>
                      <Grid item md={5}>
                        <Button variant="contained"
                          startIcon={<ShoppingCartOutlinedIcon />}
                          sx={{ background: '#7e1717', mt: 1, ml: 4, padding: '13px 32px', fontWeight: 'bold', '&:hover': { background: '#802F2F' } }}
                          onClick={() => AddToCart(i, sweet.id)}
                        >
                          add to cart
                        </Button>
                        <Snackbar
                          open={open1}
                          autoHideDuration={4000}
                          onClose={handleClose1}
                          message="Item added to cart"
                          action={action}
                        />
                        <Snackbar
                          open={open2}
                          autoHideDuration={4000}
                          onClose={handleClose1}
                          message="Item already added to cart"
                          action={action}
                        />
                      </Grid>
                      <Grid item md={5}>
                        <Button variant="contained"
                          startIcon={<PlayArrowOutlinedIcon />}
                          sx={{
                            background: '#7e1717', mt: 1, ml: 4,
                            padding: '13px 32px', fontWeight: 'bold', '&:hover': { background: '#802F2F' }
                          }}
                        >
                          Buy Now
                        </Button>
                      </Grid>
                      <Grid display="flex" p={2}>
                        <Typography><img src="images/shield.svg" alt="" width={22} /></Typography>&nbsp;
                        <Typography> Safe and Secure payments.100% Authentic products</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            : null}
        </>
      ))}
      <Footer />
    </>
  )
}

export default SinglePage