import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Grid, TextField, Typography } from '@mui/material';
import PercentIcon from '@mui/icons-material/Percent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ClearIcon from '@mui/icons-material/Clear';

//This component will show Coupon Section
export default function TemporaryDrawer() {
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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350,textAlign:'center' }}
            role="presentation"
        >
            <Box sx={{ display: "flex", placeItems: "center", height: "50px", backgroundColor: "black", color: "white", justifyContent: 'space-around' }}>
                <Typography>Enter Coupon Code</Typography>
                <Typography>
                    <ClearIcon sx={{cursor:'pointer' }} onClick={toggleDrawer(anchor, false)} />
                </Typography>
            </Box>
            <TextField type="text" placeholder='Enter Coupon Code' sx={{mt:2,width:300}} />
            <Box>
                <Button variant="contained" sx={{backgroundColor: '#ca9b3c', width:'80%',borderRadius:'50px',m:2,
                '&:hover':{backgroundColor:'#ab770b'}}} onClick={toggleDrawer(anchor, false)}>Apply</Button>
            </Box>
            <Typography color="red" pt={9}>Sorry All Coupons have Expired!</Typography>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} sx={{ width: '100%', }}>
                        <Grid sx={{
                            backgroundColor: '#fff', p: 1.4, borderRadius: '5px', width: '100%',
                            '&:hover': { cursor: 'pointer' }
                        }}>
                            <Grid container sx={{ p: 1, border: '1px solid #005EC8', borderRadius: '5px', borderStyle: 'dashed' }}>
                                <Grid item xs={1} md={1}><PercentIcon sx={{ fontSize: '20px' }} /></Grid>
                                <Grid item xs={10} md={10}>Apply Coupon</Grid>
                                <Grid item xs={1} md={1}><ChevronRightIcon /></Grid>
                            </Grid>
                        </Grid>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
