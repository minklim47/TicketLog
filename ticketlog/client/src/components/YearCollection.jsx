import { Box } from "@mui/material";
import React, { useState } from "react";
import Ticket from "./Ticket";

function YearCollection({ year, tickets }) {
  const [isHome, setIsHome] = useState(false)
  return (
    <Box className="flex-container" sx={{flexDirection:"column"}}>
      <h3>Collection of Year {year}</h3>
      {/* Render the tickets for this year */}
      <Box className="flex-container" sx={collectionStyle}>
      {tickets.map((ticket) => (
        // <Ticket key={ticket.id}>{ticket.title}</Ticket>
        <Ticket
            key={ticket.id}
            ticket={ticket}
            isHome={isHome}
            onClick={() => {
              handleClick(ticket.id);
            }}
          />
      ))}
      </Box>
   
     
    </Box>
  );
}
const collectionStyle = {
  width:"90%",
  borderRadius:"15px",
  backgroundColor: "#000000",
  padding:"30px",
  overflow:"scroll"
}

export default YearCollection;
