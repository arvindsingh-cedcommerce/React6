import { AppBar, Badge, Box,  Drawer, Grid, IconButton,  InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, styled, TextField, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu';
import { ContextData } from '../../ContextFile';
import Singup from '../signin-signup/Singup';
import Signin from '../signin-signup/Signin';
import HomeIcon from '@mui/icons-material/Home';
import CakeIcon from '@mui/icons-material/Cake';

//Styled toolbar
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})
// styled Menubox
const MenuBox = styled(Box)({
  display: 'flex',
  gap: 30
})
const StyledLink = styled(Link)`
  color:white;
  text-decoration:none;
  &:focus,&:hover, &:visited,&:link,&:active {
    text-decoration:none;
  }
`
const SearchBox = styled(Box)({
  display: 'flex',
  color: 'white'
})

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
// This component will show Navbar
const Navbar = () => {
  let { category, setCategory, itemNumber, showname, fullname, setFullname, setEmail, setPassword, setShowname } = useContext(ContextData);
  const navi = useNavigate();

  // const Search = () => {
  //   navi('/products')
  // }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const Logout = () => {
    setFullname('');
    setEmail('');
    setPassword('');
    setShowname(false);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid sx={{ height: 40, textAlign: 'center', pt: 1, backgroundColor: "#221f2d", color: 'white' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Menu</Typography>
      </Grid>
      <List>
        {['HOME', 'SWEET'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{'&:hover':{color:'#c98e1a',backgroundColor:'#221f2d'}}}>
              <ListItemIcon sx={{color:'#c98e1a'}}>
                {index % 2 === 0 ? <HomeIcon  /> : <CakeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} onClick={() => {
                if (text === 'HOME')
                  navi('/')
                if (text === 'SWEET')
                  navi('/products')
              }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar sx={{ backgroundColor: '#221f2d' }}>
      <Grid container justifyContent='right'>
        {fullname !== '' && showname === true ?
          <>
            <Grid display='flex' justifyContent='right' sx={{ pt: 1, pr: 2, cursor: 'pointer' }}>
              <Typography ><PersonIcon sx={{ fontSize: '19px', color: '#f6b125' }} />&nbsp;</Typography>
              <Typography onClick={handleClick} >Hi {fullname}</Typography>
            </Grid>
            <div>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Typography sx={{ pl: 2, pr: 3, pt: 1, pb: 1, backgroundColor: '#221f2d', color: '#fff', cursor: 'pointer', '&:hover': { color: '#CEA554' } }} onClick={Logout}><PowerSettingsNewIcon sx={{ fontSize: '15px' }} />&nbsp;&nbsp;Logout</Typography>
              </Popover>
            </div>
          </>
          :
          <Grid display='flex' justifyContent='right' sx={{ pt: 1, pr: 2, cursor: 'pointer' }}>
            <Typography><PersonIcon sx={{ fontSize: '19px', color: '#f6b125' }} />&nbsp;</Typography>
            <Signin /><Typography>&nbsp;|&nbsp;</Typography><Singup />
          </Grid>
        }
      </Grid>
      <StyledToolbar>
        <Box>
          <img src="images/sweetshop-logo.webp" alt="" style={{ height: 85 }} />
        </Box>
        <MenuBox sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
          <StyledLink to='/'>HOME</StyledLink>
          <StyledLink to='/products'>SWEETS</StyledLink>
        </MenuBox>
        <SearchBox sx={{ display: 'flex' }}>
          <TextField
            label='Search Field'
            type='search'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="start"><SearchIcon sx={{color:'white',cursor:'pointer'}} onClick={()=>navi('/products')}/></InputAdornment>,
            }}
            sx={{
              width: 200,
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& > fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
              '& label.Mui-focused': { color: 'white' },
              input: { color: 'white' }
            }}
          />
          <IconButton aria-label="cart" onClick={() => navi('/cart')}>
            <StyledBadge badgeContent={itemNumber} color="secondary" >
              <LocalMallOutlinedIcon sx={{ color: 'white', '&:hover': { color: '#f6b125' } }} />
            </StyledBadge>
          </IconButton>
          <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon onClick={toggleDrawer('right', true)} sx={{ color: 'white', '&:hover': { color: '#f6b125' } }} />
          </IconButton>
          <div>
            {['right'].map((anchor) => (
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            ))}
          </div>
        </SearchBox>
      </StyledToolbar>
      <SearchBox>
      </SearchBox>
    </AppBar>
  )
}

export default Navbar 