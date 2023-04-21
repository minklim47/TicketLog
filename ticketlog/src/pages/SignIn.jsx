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
import { Link, NavLink } from "react-router-dom";

function SignIn() {
  return (
    <Box
      sx={{
        margin: "0 auto",
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
      <h2 style={{ textAlign: "center", margin: "50px 0" }}>Sign in</h2>
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
        <TextField
          sx={formInputStyle}
          label="Password"
          type="password"
          placeholder="Enter password"
          required
        />
      </Box>
      <Box sx={{ margin: "10px ", marginRight: "auto" }}>
        <FormControlLabel
          control={<CheckBox name="remember" />}
          label="Remember me"
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={signInButtonStyle}
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
          <NavLink to="#">Forgot password?</NavLink>
        </Typography>
        <Typography>
          Don't have an account?
          <NavLink to="#"> Sign up</NavLink>
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
export default SignIn;
