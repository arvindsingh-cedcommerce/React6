import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import './Signup.css';

export default function Signup() {
  return (
    <Box
      component="form"
      sx={{
        width: "35ch",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Username" variant="standard" />
      <TextField id="standard-basic" label="Full Name" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />

      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} />
        </FormGroup>
        <Typography
          sx={{
            margin: "10px 0px",
          }}
        >
          Agree&nbsp;with&nbsp;<span style={{color:'#005E9E'}}>Terms&nbsp;&&nbsp;Condition</span>
        </Typography>
      </Box>

      <Button
        sx={{
          borderRadius: "10px",
          position: "absolute",
          bottom: "60px",
          padding: "5px 40px",
          backgroundColor: "#0076BF",
        }}
        variant="contained"
      >
        Signup
      </Button>
      <Link sx={{display:"flex",flexDirection:"column"}} to="/signin">
        {" "}
        <Typography
          sx={{
            marginLeft:"-65px",
            position: "absolute",
            bottom: "20px",
            color: "#0076BF",
            cursor: "pointer",
          }}
        >
          I'm already a member
        </Typography>
      </Link>
    </Box>
  );
}
