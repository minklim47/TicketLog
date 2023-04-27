import React from "react";
import Nav from "../components/Nav";
import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchTicket from "../components/SearchTicket";
import SortDropdown from "../components/SortDropdown";
import SmallTicket from "../components/SmallTicket";

function Home() {
  return (
    <Container className="flex-container" sx={{ flexDirection: "column" ,marginTop:"100px"}}>
      <Box
        className="flex-container"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          margin: "50px 0",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            margin: { xs: "20px 0", sm: "0 30px 0 0" },
          }}
        >
          <h1 style={{ marginBottom: "10px" }}>TicketLog</h1>
          <h3>Your movie ticket collection everywhere</h3>
        </Box>

        <Button
          component={NavLink}
          to="/CreateTicket"
          color="inherit"
          sx={addButtonStyle}
        >
          Add a Ticket
        </Button>
      </Box>
      <SearchTicket />
      <Box
      className="flex-container"
        sx={{
          justifyContent: "flex-end",
          
          margin: "20px 0",
        }}
      >
        <SortDropdown />
      </Box>
      {/* <Box sx={{display:"inline-flex", flexFlow:{xs:"row wrap"},justifyContent:"center",}}> */}
      <Box sx={grid}>
        <SmallTicket /> <SmallTicket /> <SmallTicket /> <SmallTicket />{" "}
        <SmallTicket />
      </Box>
    </Container>
  );
}

const addButtonStyle = {
  textTransform: "none",
  fontSize: 18,
  width: "200px",
  height: "45px",
  bgcolor: "black.main",
  color: "white.main",
  "&:hover": {
    backgroundColor: "black.dark",
  },
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, max-content))",
  gridGap: "2.5px",
  justifyContent: "center",
};
export default Home;
