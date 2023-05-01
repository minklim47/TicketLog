import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

import ticket1 from "../assets/ticket/ticket2-black.png";

function Ticket({ selectedStyle }) {
  return (
    <Card className={selectedStyle} sx={ticket}>
      <div className="container">
      <p className="title">Aftersfffffffffffn</p>
      <div className="not-title">
      <div className="cinema-seat">
        <div className="cinema-item">
          <p className="cinema">Cinema</p>
          <p className="cinema-value">4</p>
        </div>

        <div className="seat-item">
          <p className="seat">Seat</p>
          <p className="seat-value">F12</p>
        </div>
      </div>
      <div className="date-time">
        <div className="date-item">
          <p className="date">Date</p>
          <p className="date-value">2 Jan 2023</p>
        </div>
        <div className="time-item">
          <p className="time">Time</p>
          <p className="time-value">14:00</p>
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
