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
export default function Signin() {
  const navi = useNavigate();
  const {username, password,setFlag} = React.useContext(BlogContext);
  const [localUsername, setLocalUsername] = React.useState('');
  const [localPassword, setLocalPassword] = React.useState('');
  const signin = () => {

     if(localUsername !== '' && localPassword !== '') {
      if(localUsername === username  && localPassword === password) {
        setFlag(true);
        navi('/');
      }
      else {
        alert("You are not a registered user")
      }
     }
     else {
      alert("All fields are required");
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
          <TextField id="standard-basic" label="Username" variant="standard" value={localUsername}
          onChange={(e) => setLocalUsername(e.target.value)} />
          <TextField id="standard-basic" label="Password" variant="standard" value={localPassword}  type="password"
           onChange={(e) => setLocalPassword(e.target.value)} />

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
            onClick={signin}
          >
            Signin
          </Button>
          <Box sx={{ border: "2px solid black", backgroundColor: "red", textAlign: "center" }}>

            <Typography
              sx={{
                marginLeft: "-59px",
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
      </Box>
    </div>
  );
}
