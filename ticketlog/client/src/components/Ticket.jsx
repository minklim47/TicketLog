import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function Ticket({ ticket}) {
  const titleMap = ticket.title
  return (
   
    <Card className={ticket.style} sx={ticketStyle}>
       {/* <div>{ticket.title}</div> */}
      <div className="container">
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
              <div className="date-value">{new Date(ticket.date).getDate() + '-' + parseInt(new Date(ticket.date).getMonth() + 1) + '-' + new Date(ticket.date).getFullYear()}</div>
            </div>
            <div className="time-item">
              <p className="time">Time</p>
              {/* <div className="time-value">{new Date(ticket.time).toTimeString().substr(0, 5)}</div> */}
              <div className="time-value">{ticket["time"].substr(0, 5)}</div>
              {/* <div className="time-value">{new Date(ticket.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div> */}

            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

const ticketStyle = {
  width: "250px",
  height: "250px",
  borderRadius: "15px",
  margin: "10px",
};

export default Ticket;
