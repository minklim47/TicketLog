import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

import ticket1 from "../assets/ticket/ticket2-black.png";

function Ticket({ selectedStyle, title, cinema, seat, time, date }) {
  return (
    <Card className={selectedStyle} sx={ticket}>
      <div className="container">
        <p className="title">{title}</p>
        <div className="not-title">
          <div className="cinema-seat">
            <div className="cinema-item">
              <p className="cinema">{cinema? "Cinema": ""}</p>
              <p className="cinema-value">{cinema}</p>
            </div>
            <div className="seat-item">
              <p className="seat">{seat? "Seat": ""}</p>
              <p className="seat-value">{seat}</p>
            </div>
          </div>

          <div className="date-time">
            <div className="date-item">
              <p className="date">Date</p>
              <div className="date-value">{new Date(date).getDate() + '-' + parseInt(new Date(date).getMonth() + 1) + '-' + new Date(date).getFullYear()}</div>
            </div>
            <div className="time-item">
              <p className="time">Time</p>
              <div className="time-value">{new Date(time).toTimeString().substr(0, 5)}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

const ticket = {
  width: "250px",
  height: "250px",
  borderRadius: "15px",
  margin: "10px",
};

// const movieTitleStyle = {
//   fontFamily: "'Bakbak One', sans-serif",
//   fontSize: "40px"
// }
// const contentStyle = {
//   fontFamily: "'B612', sans-serif",
// }

const dividerStyle = {
  width: "180px",
  height: "3px",
  bgcolor: "black.main",
};
export default Ticket;
