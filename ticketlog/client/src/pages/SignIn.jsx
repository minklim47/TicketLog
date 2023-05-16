import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignIn({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const instance = axios.create({
    withCredentials: true,
  });

  const navigate = useNavigate();
  const navigateToProfile = (userId) => {
    navigate(`/Profile/${userId}`);
  };

  const handleSignIn = () => {
    if (!validateForm()) {
      console.log("Must enter email and password");
      return;
    }
    instance
      .post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success == true) {

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user.id);
          onSignIn();
          console.log("login success");
          navigateToProfile(localStorage.getItem("userId"));
        } else {
          console.log("fail");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateForm = () => {
    if (email == "" || password == "") {
      return false;
    } else {
      return true;
    }
  };
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
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Sign in</h2>
      <Box
        className="flex-container"
        sx={{
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TextField
          sx={formInputStyle}
          label="Email"
          type="email"
          name="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          sx={formInputStyle}
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ margin: "10px ", marginRight: "auto" }}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "#000000",
                width: "24px",
                marginRight: "10px",
                "&.Mui-checked": {
                  color: "#212121",
                },
              }}
              defaultChecked
              label="Remember me"
            />
          }
          label="Remember me"
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={signInButtonStyle}
        component={NavLink}
        onClick={handleSignIn}
      >
        Sign in
      </Button>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          <NavLink to="/ForgotPassword">Forgot password?</NavLink>
        </Typography>
        <Typography>
          Don't have an account?
          <NavLink to="/SignUp"> Sign up</NavLink>
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
