import {
  Button,
  Container,
  IconButton,
  List,
  Toolbar,
  Box,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React, { forwardRef } from "react";

function DrawerMenu() {
  const CustomNavLink = forwardRef((props, ref) => (
    <NavLink
      ref={ref}
      {...props}
      className={({ isActive }) =>
        isActive ? props.className + " Mui-selected" : props.className
      }
      end
    />
  ));
  const userId = localStorage.getItem("userId");
  return (
    <Box>
      <List sx={{ padding: "0" }}>
        <ListItemButton
          component={CustomNavLink}
          to={`/Home/${userId}`}
          sx={drawerListItemStyle}
        >
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          component={CustomNavLink}
          to="/Community"
          sx={drawerListItemStyle}
        >
          <ListItemText primary="Community" />
        </ListItemButton>
        <ListItemButton
          component={CustomNavLink}
          to="/Collection"
          sx={drawerListItemStyle}
        >
          <ListItemText primary="Collection" />
        </ListItemButton>
        <ListItemButton
          component={CustomNavLink}
          to={`/Profile/${userId}`}
          sx={drawerListItemStyle}
        >
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </Box>
  );
}

const drawerListItemStyle = {
  textAlign: "center",
};

export default DrawerMenu;
