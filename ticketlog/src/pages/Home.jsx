import React from "react";
import Nav from "../components/Nav";
import { Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchTicket from "../components/SearchTicket";
import SortDropdown from "../components/SortDropdown";

function Home() {
  return (
    <Container
      sx={{
       display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "10px" }}>TicketLog</h1>
          <h3>Your movie ticket collection everywhere</h3>
        </div>
        <Button
          component={NavLink}
          to="/CreateTicket"
          color="inherit"
          sx={addButtonStyle}
        >
          Add a Ticket
        </Button>
      </section>
      <Typography>All tickets</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <SearchTicket />
      </div>
      <SortDropdown />
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
