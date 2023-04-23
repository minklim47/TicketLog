import { Box, Button, Container } from "@mui/material";
import React from "react";
import SignIn from "./SignIn";
import Account from "./Account";
import { NavLink } from "react-router-dom";

function Profile({ userLogin, setUserLogin }) {
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
          <Button sx={navButtonStyle} component={NavLink} to="/Account">Account</Button>
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
          <img
            src="src/assets/mink.jpg"
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          />
          <Box sx={{ margin: "30px 0", textAlign: "center" }}>
            <h4 style={infoStyle}>MinkLim</h4>
            <h4 style={infoStyle}>@Bangkok</h4>
            <h4 style={infoStyle}>1Y 2M </h4>
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
  margin:"10px 0",
  width:"100px",
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
export default Profile;

{
  /* {userLogin? <Account/>
    
    : <SignIn userLogin={userLogin} setUserLogin={setUserLogin}/>} */
}
