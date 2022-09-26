import React from 'react'
import { useContext } from 'react';
import '../../data'
import { Box, Button, Snackbar, Typography, IconButton } from '@mui/material';
import { ContextData } from '../../ContextFile';
import Paper from '@mui/material/Paper';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './Products.css'
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

const data = require('../../data.json');
//This component will show Products
const Products = () => {
  var flagg = 0;
  const products = data.products;
  let { category, itemNumber, setItemNumber, productArray, setProductArray, setSingleProductIndex, total, setTotal } = useContext(ContextData);

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  var flag = true;
  const handleClick = () => {
    setOpen(true);
  };
  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpen1(false);
  };

  const AddToCart = (index, ID) => {
    let temp = [];
    flag = true;
    if (productArray.length < 1) {
      setProductArray([products[index]]);
      setItemNumber(itemNumber + 1);
      handleClick();
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
        handleClick();
      }
      else {
        handleClick1();
      }
    }
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Box sx={{ height: '100%', width: '100%', mt: 17 }}>
        <Box
          sx={{
            justifyContent: 'space-evenly',
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 250,
              height: '24rem',
            },
          }}
        >
          {products.map((sweet, i) => (
            <>
              {sweet.category.toLowerCase().includes(category.toLowerCase()) ?
                <Paper elevation={1} sx={{ display: 'grid', mb: 6,height:'500px' }}>
                  <span hidden>{flagg = 1}</span>
                  <Box sx={{ p: 2 }}>
                    <Box height={200} width={200}>
                      <Link to='/singlepage' >
                        <img id="img" src={sweet.image} alt=""
                          height={200} width={200} onClick={() => setSingleProductIndex(sweet.id)} />
                      </Link>
                    </Box>
                    <Typography className='name' >{sweet.name}</Typography>
                    <Typography sx={{ mt: 1, color: '#383838', fontWeight: 'bold', fontSize: '18px' }}>&#8377;{sweet.price}</Typography>
                    <Button variant="contained"
                      startIcon={<ShoppingCartOutlinedIcon />}
                      sx={{ background: '#7E1717', mt: 1, ml: 4, '&:hover': { background: '#802F2F' } }}
                      onClick={() => AddToCart(i, sweet.id)}
                    >
                      add to cart
                    </Button>
                  </Box>
                  <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    message="Item added to cart"
                    action={action}
                  />
                  <Snackbar
                    open={open1}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    message="Item already added to cart"
                    action={action}
                  />
                </Paper>
                : <>
                </>}
            </>
          ))}
          {
            flagg === 0 ?
              <Box sx={{ backgroundColor: '' }}>
                <img src='images/no-product.webp' alt='' style={{ marginLeft: -140, height: 400 }} />
              </Box> : <></>
          }
        </Box>
      </Box>
      <Footer />
    </>
  )
}
export default Products