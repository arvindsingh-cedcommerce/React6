import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, styled, TextField, Typography } from '@mui/material';
import { ContextData } from '../../ContextFile';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
// This Component will show Login Page
export default function Singup() {
  let { email, password, opensignin, setSingin, setShowname } = React.useContext(ContextData);
  const [localemail, setLocalemail] = React.useState('');
  const [localpassword, setLocalpassword] = React.useState('');

  const handleClickOpen = () => {
    setSingin(true);
  };

  const handleClose = () => {
    setSingin(false);
  };

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Signin = () => {

    if (localemail !== '' && localpassword !== '') {
      if (email === '' && password === '') {
        alert('You are not a registered user');
      }
      else {
        if (localemail !== email || localpassword !== password) {
          alert("Email or Password didn't match");
        }
        else {
          setSingin(false);
          setShowname(true);
        }
      }
    }
    else {
      alert('All fields are required');
    }
  }

  return (
    <div sx={{ width: 1000 }} >
      <Typography sx={{color:'#7e1717', '&:hover': { color: 'black' } }} onClick={handleClickOpen}>Log In</Typography>
      <Dialog
        open={opensignin}
        TransitionComponent={Transition}
        keepMounted
        transitionDuration={500}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={1000}
      >
        <Grid container sx={{ width: 650, height: 550 }}>
          <Grid item md={5} sx={{ backgroundColor: '#FAD6D6', color: '#521E19', justifyContent: 'center', alignItems: 'center', p: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '6rem auto' }}>
              <img src='images/logo.webp' alt='' style={{ height: 100, width: 170, paddingLeft: 19 }} />
              <Typography variant='h4' sx={{ mt: 3 }}>Log In</Typography>
              <Divider sx={{ borderColor: 'white', mt: 2, mb: 2 }} />
              <Typography variant='body1' width={170}>Get access to your
                Orders, Wishlist and Recommendations.</Typography>
            </Box>
          </Grid>
          <Grid item md={7}>
            <CloseIcon sx={{ p: 1, float: 'right', cursor: 'pointer' }} onClick={handleClose} />
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '6rem', pl: 2 }}>
              <TextField id="standard-basic" type='email' label="Email" variant="standard" sx={{ width: 330 }} value={localemail} onChange={e => setLocalemail(e.target.value)} />
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={localpassword} onChange={e => setLocalpassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  sx={{ width: 320 }}
                />
              </FormControl>
              <Button variant='contained' sx={{ mt: 2, mr: 2, backgroundColor: '#7e1717', '&:hover': { backgroundColor: '#843D3D' } }} onClick={Signin}>Log In</Button>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
