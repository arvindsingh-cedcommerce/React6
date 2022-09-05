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
import { Link, useNavigate } from "react-router-dom";
import './Back.css'
import { BlogContext } from "../../App";
// Signin Component
export default function Signup() {
  const navi = useNavigate();
  let {username, setUsername,fullname, setFullname,email, setEmail,password, setPassword } = React.useContext(BlogContext);


  const signup = () => {
    if (username !== '' && fullname !== '' && email !== '' && password !== '') {
      navi('/signin');
    }
    else {
      alert('All fields must be filled')
    }
  }

  return (
    <div class="back">
      <Box
        sx={{
          borderRadius: "10px",
          border: "1px solid gray",
          backgroundColor: "transparent",
          position: "relative",
          textAlign: "center",
          width: "41ch",
          height: "390px",
          padding: "200px 10px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box className="move" sx={{ display: "flex", width: "inherit", justifyContent: "end", }}>
          <Link to="/signup" sx={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "20px",
                marginBottom: "30px",
                marginRight: "20px",
                color: "#0076BF",
                cursor: "pointer",
              }}
            >
              Sign up
            </Typography>
          </Link>

          <Link to="/signin">
            <Typography
              sx={{ fontSize: "20px", marginRight: "30px", color: "#0076BF", cursor: "pointer" }}
            >
              Sign in
            </Typography>
          </Link>
        </Box>
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
          <TextField id="standard-basic" label="Username" variant="standard" value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <TextField id="standard-basic" label="Full Name" variant="standard" value={fullname}
            onChange={(e) => setFullname(e.target.value)} />
          <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="standard-basic" label="Password" variant="standard"  type="password" value={password}
            onChange={(e) => setPassword(e.target.value)} />

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
              Agree&nbsp;with&nbsp;<span style={{ color: '#005E9E' }}>Terms&nbsp;&&nbsp;Condition</span>
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
            onClick={signup}
          >
            Signup
          </Button>
          <Link sx={{ display: "flex", flexDirection: "column" }} to="/signin">
            {" "}
            <Typography
              sx={{
                marginLeft: "-65px",
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
      </Box>


    </div>
  );
}
