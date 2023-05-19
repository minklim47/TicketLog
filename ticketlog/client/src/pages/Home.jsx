import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import SearchTicket from "../components/SearchTicket";
import SortDropdown from "../components/SortDropdown";
import Ticket from "../components/Ticket";
import { useEffect, useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";


function Home() {
  const instance = axios.create({
    withCredentials: true,
  });
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [sortingType, setSortingType] = useState("");
  const [sortedTickets, setSortedTickets] = useState([]);

  const handleSortingChange = (event) => {
    setSortingType(event.target.value);


  }
  const sortTickets = () => {
    let sortedTickets = [...tickets];
    switch (sortingType) {
      case "ticket_date_new":
        sortedTickets.sort((a, b) => new Date(b.ticket_date) - new Date(a.ticket_date));
        break;
      case "ticket_date_old":
        sortedTickets.sort((a, b) => new Date(a.ticket_date) - new Date(b.ticket_date));
        break;
      case "created_at_new":
        sortedTickets.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case "created_at_old":
        sortedTickets.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        break;
      case "alphabetical_a":
        sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "alphabetical_z":
        sortedTickets.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    setSortedTickets(sortedTickets);
  };

  useEffect(() => {
    fetchTickets();


  },[])

  useEffect(() => {
    sortTickets();
  }, [sortingType]);


  const fetchTickets = async () => {
    const userToken = Cookies.get("user");
    const userId = localStorage.getItem("userId");
    await instance.get(`http://localhost:4000/ticket/home/${userId}`, { headers: { Authorization: `Bearer ${userToken}` } })
    .then((res) => {
      // console.log(res.data)
      setTickets(res.data)
      setSortingType("ticket_date_new")

      
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const handleClick = (ticketId) => {
    localStorage.setItem('ticketId', ticketId);
    navigate(`/Ticket/${ticketId}`);
  }

  return (
    <Container
      className="flex-container"
      sx={{ flexDirection: "column", marginTop: "100px" }}
    >
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
          margin: "20px 30px",
        }}
      >
        <SortDropdown sortingType={sortingType} onSortingChange={handleSortingChange} />
      </Box>
      {/* <Box sx={{display:"inline-flex", flexFlow:{xs:"row wrap"},justifyContent:"center",}}> */}
      <Box sx={grid}>
       
        {sortedTickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          ticket={ticket}
          onClick={()=> {
            handleClick(ticket.id)
          }}
        />
      ))}
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
