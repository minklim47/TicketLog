import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material";
import React from "react";
import SignIn from "./SignIn";
import Account from "./Account";
import { NavLink } from "react-router-dom";

function Profile({ userLogin, setUserLogin }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          <Button sx={navButtonStyle} component={NavLink} to="/Account">
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
                Click "SIGN OUT" to sign out from this website. 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button component={NavLink} to="/SignIn" autoFocus>
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
            src="src/assets/mink.jpg"
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          />
          <Box sx={{ margin: "20px 0", textAlign: "center" }}>
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
export default Profile;

{
  /* {userLogin? <Account/>
    
    : <SignIn userLogin={userLogin} setUserLogin={setUserLogin}/>} */
}
