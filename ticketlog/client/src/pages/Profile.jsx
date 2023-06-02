import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import profilePic from "../assets/fin.jpeg";

function Profile({ onSignOut }) {
  const [open, setOpen] = React.useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [userData, setUserData] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const instance = axios.create({
    withCredentials: true,
  });
  const { userId } = useParams();

  useEffect(() => {
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      instance
        .get(`http://localhost:4000/user/${userId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          // console.log(res.data.data)
          setUserData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);

  
  return (
    <Box
      className="flex-container"
      sx={{
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Profile</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <Box
          className="flex-container"
          sx={{
            flexDirection: "column",
          }}
        >
          <Button
            sx={navButtonStyle}
            component={NavLink}
            to={`/profile/${userId}/edit`}
          >
            Account
          </Button>
          <Button sx={navButtonStyle} onClick={handleClickOpen}>
            Sign out
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Do you want to sign out?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Click "Sign out" to sign out from this website.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button sx={signOutButtonStyle} onClick={handleClose}>
                Cancel
              </Button>
              <Button
                sx={signOutButtonStyle}
                component={NavLink}
                to="/SignIn"
                autoFocus
                onClick={onSignOut}
              >
                Sign out
              </Button>
            </DialogActions>
          </Dialog>
        </Box>

        <Divider
          orientation="vertical"
          sx={{
            display: { xs: "none", sm: "block" },
            margin: "20px 50px",
            backgroundColor: "black.light",
          }}
          flexItem
        />
        <Divider
          orientation="horizontal"
          sx={{
            display: { xs: "block", sm: "none" },
            margin: "0px 20px",
            backgroundColor: "black.light",
          }}
          flexItem
        />
        <Box
          className="flex-container"
          sx={{
            flexDirection: "column",
          }}
        >
          <img
            src={profilePic}
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          />
          <Box sx={{ margin: "20px 0", textAlign: "center" }}>
            <h4 style={infoStyle}>{userData.name}</h4>
            <h4 style={infoStyle}>{"@" + userData.location}</h4>
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

const signOutButtonStyle = {
  textTransform: "none",
  fontSize: 14,

  "&:hover": {
    // backgroundColor: "black.dark",
  },
};

export default Profile;
