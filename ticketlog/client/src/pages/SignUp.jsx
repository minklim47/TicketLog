
import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
   return (
    <Box
      sx={{
        margin: "100px auto 0 auto",
        width: "100%",
        padding: "0 30px",
        maxWidth:"500px",
        minWidth:"300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom:"30px" }}>Sign up</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
         <TextField
          sx={formInputStyle}
          label="Display name"
          type="text"
          placeholder="Enter display name"
          required
        />
        <TextField
          sx={formInputStyle}
          label="Email"
          type="email"
          placeholder="Enter email"
          required
        />
        <TextField
          sx={formInputStyle}
          label="Password"
          type="password"
          placeholder="Enter password"
          required
        />
        <TextField
          sx={formInputStyle}
          label="Confirm password"
          type="password"
          placeholder="Confirm password"
          required
        />
      </Box>
     

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={signInButtonStyle}
        component={NavLink}
        to="/"
        // onClick={handleSignIn}
      >
        Sign in
      </Button>
      <Box
        sx={{
        width:"100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          Already have an account?
          <NavLink to="/SignIn"> Sign in</NavLink>
        </Typography>
      </Box>
    </Box>
  );
}

const formInputStyle = {
    minWidth: "300px",
    width: "100%",
    textAlign: "center",
    margin: "10px 0",
  };
  
  const signInButtonStyle = {
    textTransform: "none",
    fontSize: 18,
    margin: "20px 0",
    height: "55px",
    bgcolor: "black.main",
    color: "white.main",
    "&:hover": {
      backgroundColor: "black.dark",
    },
  };

export default SignUp