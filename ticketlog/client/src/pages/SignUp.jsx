import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUp() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const navigateToProfile = (userId) => {
    navigate(`/Profile/${userId}`);
  };

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (validateConfirmPassword() && validateForm()) {
      register();
    } else {
      alert("Passwords did not match");
    }
  };

  const validateConfirmPassword = () => {
    return password === confirmPassword;
  };
  const register = () => {
    Axios.post("http://localhost:4000/auth/register", {
      name: name,
      location: location,
      email: email,
      password: password,
    })
      .then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("token", res.data.token);
          navigateToProfile(res.data.userId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validateForm = () => {
    if (
      name != "" &&
      location != "" &&
      email != "" &&
      password != "" &&
      confirmPassword != ""
    ) {
      return true;
    }
    return false;
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
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Sign up</h2>
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
          name="name"
          placeholder="Enter display name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          sx={formInputStyle}
          label="Location"
          type="text"
          name="location"
          placeholder="Enter your location (province)"
          required
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <TextField
          sx={formInputStyle}
          label="Email"
          type="email"
          name="email"
          placeholder="Enter email address"
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

        <TextField
          sx={formInputStyle}
          label="Confirm password"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm password"
          required
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
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

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={signInButtonStyle}
        onClick={handleSubmit}
      >
        Sign up
      </Button>
      <Box
        sx={{
          width: "100%",
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

export default SignUp;
