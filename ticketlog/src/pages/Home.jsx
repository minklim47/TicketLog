import React from "react";
import Nav from "../components/Nav";
import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchTicket from "../components/SearchTicket";
import SortDropdown from "../components/SortDropdown";

function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          margin: "50px 0 30px 0",
        }}
      >
        <Box sx={{ textAlign: "center", margin: { xs: "20px 0", sm: "0" } }}>
          <h1 style={{ marginBottom: "10px" }}>TicketLog</h1>
          <h3>Your movie ticket collection everywhere</h3>
        </Box>
        <Box>
          <Button
            component={NavLink}
            to="/CreateTicket"
            color="inherit"
            sx={addButtonStyle}
          >
            Add a Ticket
          </Button>
        </Box>
      </Container>
      <SearchTicket />
      <Container
        sx={{
          display: "flex",
          flexDirection: "row" ,
          justifyContent: "space-around",
          alignItems: "center",
          margin:"20px 0"
        }}
      >
        <Typography>All tickets</Typography>
        <SortDropdown />
      </Container>
    </Container>
  );
}

const addButtonStyle = {
  textTransform: "none",
  fontSize: 18,
  width: "280px",
  height: "55px",
  bgcolor: "black.main",
  color: "white.main",
  "&:hover": {
    backgroundColor: "black.dark",
  },
};

export default Home;
