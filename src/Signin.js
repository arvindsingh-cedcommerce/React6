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

export default function Signin() {
  return (
    <Box
      component="form"
      sx={{
        height: "20ch",
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
          Remember&nbsp;password
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
        Signin
      </Button>
      <Box sx={{ border: "2px solid black",backgroundColor:"red",textAlign:"center" }}>
        
          <Typography
            sx={{
              marginLeft:"-59px",
              position: "absolute",
              bottom: "20px",
              color: "#0076BF",
              cursor: "pointer",
            }}
          >
            I'm not a member
          </Typography>
        
      </Box>
    </Box>
  );
}
