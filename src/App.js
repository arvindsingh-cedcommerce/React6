import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {

  Typography,
} from "@mui/material";
import Signin from "./Signin";
import Signup from "./Signup";
import { Link, Route, Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        border: "1px solid gray",
        backgroundColor: "transparent",
        position: "relative",
        textAlign: "center",
        width: "41ch",
        height:"400px",
        padding: "200px 10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box className="move" sx={{ display: "flex", width: "inherit", justifyContent: "end",}}>
        <Link  to="/" sx={{textDecoration: "none"}}>
          <Typography
            sx={{
              fontSize:"20px",
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
            sx={{fontSize:"20px", marginRight: "30px", color: "#0076BF", cursor: "pointer" }}
          >
            Sign in
          </Typography>
        </Link>
      </Box>

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Box>
  );
}
