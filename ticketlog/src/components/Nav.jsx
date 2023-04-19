import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Stack,
  IconButton,
  Drawer,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";

function Nav() {
  const [open, setState] = useState(false);
  // const handleMenuToggle = () => {
  //     setMenuOpen((prevState) => !prevState)
  // }

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <AppBar position="static" sx={navBarStyle}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button sx={{ borderRadius: "15px", bgcolor: "white.main" }}>
          <Box
            component="img"
            sx={{
              height: 35,
              width: 120,
              borderRadius: "5px",
            }}
            alt="logo"
            src="src/assets/logo.png"
          />
        </Button>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", sm: "inherit" } }}
        >
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            sx={navButtonStyle}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/Community"
            color="inherit"
            sx={navButtonStyle}
          >
            Community
          </Button>
          <Button
            component={NavLink}
            to="/Collection"
            color="inherit"
            sx={navButtonStyle}
          >
            Collection
          </Button>
          <Button
            component={NavLink}
            to="/Profile"
            color="inherit"
            sx={navButtonStyle}
          >
            Profile
          </Button>
        </Stack>

        <IconButton
          sx={{ color: "black.main", display: { xs: "inherit", sm: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="top" //from which side the drawer slides in
          variant="temporary" //if and how easily the drawer can be closed
          open={open} //if open is true, drawer is shown
          //   onClose={toggleDrawer(false)} //function that is called when the drawer should close
          //   onOpe={toggleDrawer(true)} //function that is called when the drawer should open
          ModalProps={{ onBackdropClick: toggleDrawer(false) }}
        >
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button sx={{ borderRadius: "15px", bgcolor: "white.main" }}>
                <Box
                  component="img"
                  sx={{
                    height: 35,
                    width: 120,
                    borderRadius: "5px",
                  }}
                  alt="logo"
                  src="src/assets/logo.png"
                />
              </Button>
              <IconButton
                sx={{
                  color: "black.main",
                  display: { xs: "inherit", sm: "none" },
                }}
                onClick={toggleDrawer(false)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <DrawerMenu />
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
const navBarStyle = {
  backgroundColor: "white.main",
  color: "black.main",
  padding: "0 20px 0 20px",
};

const navButtonStyle = {
  textTransform: "none",
  fontSize: 18,
  backgroundColor: "white.main",
  color: "black.main",
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

export default Nav;
