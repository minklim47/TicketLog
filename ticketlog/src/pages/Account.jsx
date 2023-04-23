import { Box, Button, Container, InputLabel, TextField } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Account() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <h1 style={{ textAlign: "center", margin: "50px 0 20px 0" }}>Profile</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: "center",
          margin: "0 auto",
          minWidth: { sm: "600px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src="src/assets/mink.jpg"
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center" }}>
            <Button sx={navButtonStyle} component={NavLink} to="/Account">
              Account
            </Button>
            <Button sx={navButtonStyle} component={NavLink} to="/SignIn">
              Sign out
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "0px", sm: "2px" },
            height: { xs: "0px", sm: "400px" },
            bgcolor: "black.main",
            margin: "0 50px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "center",
            width: "250px",
          }}
        >
          <Box sx={{ margin: "15px 0" }}>
            <InputLabel>Display Name</InputLabel>
            <TextField
              sx={textFieldStyle}
              size="small"
              type="text"
              variant="outlined"
            />
            <InputLabel>Email address</InputLabel>
            <TextField
              sx={textFieldStyle}
              size="small"
              type="email"
              variant="outlined"
            />
            <InputLabel>Location</InputLabel>
            <TextField
              sx={textFieldStyle}
              size="small"
              type="text"
              variant="outlined"
            />
          </Box>
          <Box sx={{ margin: "15px 0" }}>
            <InputLabel>Current password</InputLabel>
            <TextField
              sx={textFieldStyle}
              size="small"
              type="password"
              variant="outlined"
            />
            <InputLabel>New password</InputLabel>
            <TextField
              sx={textFieldStyle}
              size="small"
              type="password"
              placeholder="Enter your new password"
              variant="outlined"
            />
            <InputLabel>Confirm new password</InputLabel>
            <TextField
              sx={textFieldStyle}
              size="small"
              type="password"
              placeholder="Enter your new password"
              variant="outlined"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const navButtonStyle = {
  textTransform: "none",
  fontSize: 18,
  backgroundColor: "white.main",
  color: "black.main",
  margin: "10px 0",
  width: "100px",
  "&:hover": {
    backgroundColor: "white.main",
    "&::after": {
      width: "70%",
    },
  },
  "&.active": {
    "&::after": {
      width: "70%",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bgcolor: "black.main",
    height: "3px",
    width: "0",
    bottom: "7px",
    transition: "0.3s",
  },
};

const infoStyle = {
  margin: "10px",
};

const textFieldStyle = {
  width: "100%",
  margin: "5px 0",
};
export default Account;
