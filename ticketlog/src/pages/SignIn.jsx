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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "50px 0" }}>Sign in</h2>
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center"
      }}>
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
        <Box>
          <FormControlLabel
            control={<CheckBox name="remember" />}
            label="Remember me"
          />
        </Box>
      </Container>

      <Button type="submit" variant="contained" sx={signInButtonStyle}>
        Sign in
      </Button>
      <Box>
        <Typography>
          <NavLink to="#">Forgot password?</NavLink>
        </Typography>
        <Typography>
          Don't have an account?
          <NavLink to="#">Sign up</NavLink>
        </Typography>
      </Box>
    </Container>
  );
}

const formInputStyle = {
  minWidth: "300px",
  width: "70%",
  maxWidth: "500px",
  textAlign: "center",
};

const signInButtonStyle = {
  textTransform: "none",
  fontSize: 18,

  height: "55px",
  bgcolor: "black.main",
  color: "white.main",
  "&:hover": {
    backgroundColor: "black.dark",
  },
};
export default SignIn;
