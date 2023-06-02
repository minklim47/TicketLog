import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <Box
    sx={{
      margin: "100px auto 0 auto",
      width: "100%",
      padding: "0 30px",
      maxWidth: "500px",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Forgot your password?</h2>
    <Typography sx={{marginBottom:"20px"}}>Please enter your account's email address below and click the "Reset Password" button. You will recieve and email that contains a link to set a new password.
    </Typography>
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
        label="Email"
        type="email"
        placeholder="Enter email"
        required
      />
      
    </Box>

    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={signInButtonStyle}
      component={NavLink}
      to="#"
    >
      Reset Password
    </Button>
    <Box
        sx={{
        width:"100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography>
          <NavLink to="/SignIn">Return to sign in page</NavLink>
        </Typography>
      </Box>
   
  </Box>
  )
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

export default ForgotPassword