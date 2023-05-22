import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Ticket from "../components/Ticket";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShowNote from "../components/ShowNote";

function ShowTicket() {
  const [ticket, setTicket] = useState([]);
  const navigate = useNavigate();
  const instance = axios.create({
    withCredentials: true,
  });
  const handleClick = (ticketId) => {
    localStorage.setItem("ticketId", ticketId);
    navigate(`/Ticket/${ticketId}`);
  };
  const userId = localStorage.getItem("userId");
  const ticketId = localStorage.getItem("ticketId");
  const userToken = Cookies.get("user");

  useEffect(() => {
    fetchTicket();
  }, []);
  const fetchTicket = async () => {
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
  const handleEdit = () => {
    navigate(`/EditTicket/${ticketId}/edit`);
  };
  const handleDelete = () => {
    instance.delete(`http://localhost:4000/ticket/${ticketId}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    navigate(`/Home/${userId}`);
  };
  

  const [isHome, setIsHome] = useState(false);
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
          flexDirection: "column",
        }}
      >
        <IconButton
          sx={{ alignSelf: "flex-start" }}
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
            isHome={isHome}
            onClick={() => {
              handleClick(ticket[0].id);
            }}
          />
        )}
      </Box>
      
      <Button
        sx={editButtonStyle}
        type="submit"
        endIcon={<ModeEditIcon />}
        onClick={handleEdit}
      >
        Edit ticket
      </Button>
  
      <Button
        sx={cancelButtonStyle}
        variant="outlined"
        color="black"
        endIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
        Delete ticket
      </Button>
    </Box>
  );
}

const editButtonStyle = {
  textTransform: "none",
  fontSize: 14,
  width: "150px",
  height: "35px",
  bgcolor: "black.main",
  color: "white.main",
  "&:hover": {
    backgroundColor: "black.dark",
  },
};
const cancelButtonStyle = {
  textTransform: "none",
  fontSize: 14,
  width: "150px",
  height: "35px",
  borderColor: "black.main",
  color: "black.main",
  margin: "20px 0",
  "&:hover": {
    backgroundColor: "black.light",
  },
};
export default ShowTicket;
