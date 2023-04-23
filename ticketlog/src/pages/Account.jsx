import { Box, Button, Container, TextField } from "@mui/material";
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
      <Box sx={{ display: "flex", flexDirection:{xs:"column-reverse", sm:"row"}, justifyContent: "center", margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            
          }}
        >
            <img
            src="/"
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          />
          <Button sx={navButtonStyle} component={NavLink} to="/Profile/Account">Account</Button>
          <Button sx={navButtonStyle} component={NavLink} to="/SignIn" >Sign out</Button>
        </Box>
        <Box
          sx={{
            width: {xs:"0px",sm:"2px"},
            height: {xs:"0px",sm:"400px"} ,
            bgcolor: "black.main",
            margin: "0 50px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem:"center",
          }}
        >
          
          <Box sx={{ margin: "30px 0", textAlign: "center" }}>
            <h4 style={infoStyle}>Display name</h4>
            <TextField id="outlined-basic" type="text" label="Name" variant="outlined" />
            
            <h4 style={infoStyle}>Email address</h4>
            <TextField id="outlined-basic" type="email" label="e" variant="outlined" />
            <h4 style={infoStyle}>Location </h4>
            <TextField id="outlined-basic" type="text" label="Name" variant="outlined" />
          </Box>
          <Box sx={{ margin: "30px 0", textAlign: "center" }}>
            <h4 style={infoStyle}>Current password</h4>
            <TextField id="outlined-basic" type="password" label="Name" variant="outlined" />
            <h4 style={infoStyle}>New password</h4>
            <TextField id="outlined-basic" type="password" label="Enter your new password" variant="outlined" />
            <h4 style={infoStyle}>Confirm new password</h4>
            <TextField id="outlined-basic" type="password" label="Enter your new password" variant="outlined" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const navButtonStyle = {
    textTransform: "none",
    fontSize: 18,
    backgroundColor: "white.main",
    color: "black.main",
    margin:"10px 0",
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
    margin:"10px"
  }

export default Account