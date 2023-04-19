import { Button, Container, IconButton, List, Toolbar, Box, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React, { forwardRef } from "react";

function DrawerMenu() {
  const CustomNavLink = forwardRef((props, ref) => (
    <NavLink
      ref={ref}
      {...props}
      className={({ isActive }) => (isActive ? props.className + ' Mui-selected' : props.className)}
      end
    />
  ));
  return (
    

      <Box>
        <List>
          <ListItemButton component={CustomNavLink}to="/" >
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={CustomNavLink} to="/Community" >
            <ListItemText primary="Community" />
          </ListItemButton>
          <ListItemButton component={CustomNavLink} to="/Collection" >
            <ListItemText primary="Collection" />
          </ListItemButton>
          <ListItemButton component={CustomNavLink} to="/Profile" >
            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
      </Box>
  );
}

{
  /* <Button
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
          </Button> */
}

export default DrawerMenu;
