import { Button, Container, IconButton, List, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function DrawerMenu() {
  return (
    <Container>
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

      <Box>
        {/* <List>
          <ListItemButton component="Navlink" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </List> */}
      </Box>
    </Container>
  );
}

export default DrawerMenu;
