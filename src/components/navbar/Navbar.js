import React, { useContext, useState } from 'react'
import { AppBar, styled, Toolbar, Box, Typography, InputBase, Menu, MenuItem, Tooltip } from "@mui/material";
import { Facebook, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material/';
import { Link, useNavigate } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Home from '../home/Home';
import Signup from '../signup-signin/Signup';
import { BlogContext } from '../../App';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navi = useNavigate();
  let { flag, setFlag } = useContext(BlogContext);
  // function to add a new BLOG
  const AddBlog = () => {
    if (flag === true) {
      navi('/AddBLog');
    }
    else {
      navi('/signin');
    }
  }
  const Logout = () => {
    if (window.confirm("Sure, you want to log out"))
      setFlag(false)
  }
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',

  })
  const SocialBox = styled(Box)({
    display: 'flex'
  });
  const MenuBox = styled(Box)({
    display: 'flex',
    gap: 30
  })
  const SearchBox = styled(Box)({
    display: 'flex'
  })
  const StyledLink = styled(Link)`
     color:white;
     text-decoration:none;
     &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration:none;
     }
  `
  const StyledBox = styled(Box)`
     color:white;
     text-decoration:none;
     &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration:none;
     }
  `
  const StyledLink1 = styled(Link)`
     color:black;
     text-decoration:none;
     &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration:none;
     }
  `
  const StyledBox1 = styled(Box)`
  color:black;
  text-decoration:none;
  &:focus, &:hover, &:visited, &:link, &:active {
   text-decoration:none;
  }
`

  return (
    <AppBar sx={{ background: 'black', position: 'static' }}>
      {/* Social Media Icons */}
      <StyledToolbar>
        <SocialBox>
          <Facebook sx={{ m: 1 }} />
          <Instagram sx={{ m: 1 }} />
          <Twitter sx={{ m: 1 }} />
        </SocialBox>
        {/* Navigation Links */}
        <MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          <StyledLink to='/' element={<Home />} >Home</StyledLink>
          <StyledLink to='/' element={<Home />} >Search</StyledLink>
          <StyledLink to='/' element={<Home />} >Contact Us</StyledLink>
          <StyledLink to='/' element={<Home />} >About Us</StyledLink>
          {flag === false ?
            <Tooltip disableFocusListener title={<p style={{ fontSize: '15px' }}>Login / Signup</p>}>
              <StyledLink to='/signin' element={<Signup />} >
                Log In
              </StyledLink>
            </Tooltip>
            : <Tooltip disableFocusListener title={<p style={{ fontSize: '15px' }}>Logout</p>}>
              <StyledLink to='#' onClick={Logout} element={<Signup />} >
                Logout
              </StyledLink>
            </Tooltip>}
        </MenuBox>
        {/* Search Box */}
        <SearchBox>
          <InputBase placeholder=' Search...' sx={{ color: 'white', border: '1px solid white', borderRadius: '15px' }} />
          <MenuIcon sx={{ cursor: 'pointer', display: { xs: 'block', sm: 'block', md: 'none' } }} onClick={() => { setOpen(!open) }} />
        </SearchBox>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', cursor: 'pointer' } }}>
          <StyledBox onClick={AddBlog}>Add Your Blog <BorderColorIcon /></StyledBox>
        </Box>
      </StyledToolbar>
      {/* side bar for mobile view */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => { setOpen(!open) }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box display={"block"} sx={{ width: 200, height: '60vh' }}>

          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Home</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Search</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Contact Us</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >About Us</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledLink1 to='/' element={<Home />} >Profile</StyledLink1></MenuItem>
          <MenuItem onClick={() => { setOpen(!open) }}><StyledBox1 onClick={AddBlog}>Add Your Blog <BorderColorIcon /></StyledBox1></MenuItem>
        </Box>
      </Menu>
    </AppBar>
  )
}
