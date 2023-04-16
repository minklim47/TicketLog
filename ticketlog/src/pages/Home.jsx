import React from "react";
import Nav from "../components/Nav";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchTicket from "../components/SearchTicket";

function Home() {
  return (
    <>
      <section style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "50px" }}>
        <div style={{textAlign:"center" }}> 
          <h1 style={{marginBottom: "10px"}}>TicketLog</h1>
          <h3>Your movie ticket collection everywhere</h3>
        </div>
        <Button component={NavLink} to="/CreateTicket" color="inherit" sx={addButtonStyle}>
          Add a Ticket
        </Button>
      </section>
      <SearchTicket/>
    </>
  );
}

const addButtonStyle = {
  textTransform: "none",
  fontSize: 18,
  width: "280px",
  height: "55px",
  bgcolor: "black.main",
  color: "white.main",

}

export default Home;
