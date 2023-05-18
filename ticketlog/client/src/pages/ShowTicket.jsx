import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Ticket from "../components/Ticket";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
function ShowTicket() {
  const [ticket, setTicket] = useState([]);
  const navigate = useNavigate();
  const instance = axios.create({
    withCredentials: true,
  });
  const userId = localStorage.getItem("userId");
  const handleClick = (ticketId) => {
    localStorage.setItem("ticketId", ticketId);
    navigate(`/Ticket/${ticketId}`);
  };
  useEffect(() => {
    fetchTicket();
  }, []);
  const fetchTicket = async () => {
    const userToken = Cookies.get("user");
    const ticketId = localStorage.getItem("ticketId");

    await instance
      .get(`http://localhost:4000/ticket/${ticketId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setTicket(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      className="flex-container"
      sx={{ flexDirection: "column", marginTop: "100px" }}
    >
         <Box
        className="flex-container"
        sx={{
          marginBottom: "30px",
          width: "100%",
          maxWidth: "600px",
          minWidth: "300px",
          padding: "0 30px",
          
        }}
      >
      <IconButton sx={{alignSelf:"flex-start"}}
        onClick={() => {
          navigate(`/Home/${userId}`);
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      {ticket.length === 0 ? (
        <p></p>
      ) : (
        <Ticket
          key={ticket[0].id}
          ticket={ticket[0]}
          onClick={() => {
            handleClick(ticket[0].id);
          }}
        />
      )}
      </Box>
    </Box>
  );
}

export default ShowTicket;