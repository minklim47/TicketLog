import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import zIndex from "@mui/material/styles/zIndex";
import ShowNote from "./ShowNote";
import axios from "axios";
import Cookies from "js-cookie";
function Ticket({ ticket, onClick, isHome }) {
  const instance = axios.create({
    withCredentials: true,
  });
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState({});
  const handleClick = () => {
    if (isHome) {
      onClick();
    }
  };
  const ticketId = localStorage.getItem("ticketId");
  const userToken = Cookies.get("user");
  const handleNoteClick = async () => {
    setOpen(true);
    if (!isHome) {
      await instance
        .get(`http://localhost:4000/note/${ticketId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          // console.log(res.data);
          setNote(res.data.data);
        });
    }
  };

  return (
    <Card className={ticket.style} sx={ticketStyle}>
      <div className="container" onClick={handleClick}>
        <p className="title">{ticket.title}</p>
        <div className="not-title">
          <div className="cinema-seat">
            <div className="cinema-item">
              <p className="cinema">Cinema</p>
              <p className="cinema-value">{ticket.cinema}</p>
            </div>
            <div className="seat-item">
              <p className="seat">Seat</p>
              <p className="seat-value">{ticket.seat}</p>
            </div>
          </div>
          <div className="date-time">
            <div className="date-item">
              <p className="date">Date</p>
              <div className="date-value">
                {new Date(ticket.date).getDate() +
                  "-" +
                  parseInt(new Date(ticket.date).getMonth() + 1) +
                  "-" +
                  new Date(ticket.date).getFullYear()}
              </div>
            </div>
            <div className="time-item">
              <p className="time">Time</p>
              <div className="time-value">
                {ticket.time == null ? "" : ticket["time"].substring(0, 5)}
              </div>
            </div>
          </div>
        </div>
        <ShowNote open={open} setOpen={setOpen} note={note} />
        <StickyNote2Icon className="note" onClick={handleNoteClick} />
      </div>
    </Card>
  );
}

const ticketStyle = {
  width: "250px",
  height: "250px",
  borderRadius: "15px",
  margin: "10px",
  flexShrink: "0",
};

export default Ticket;
