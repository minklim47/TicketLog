import { Box } from "@mui/material";
import React, { useState } from "react";
import Ticket from "./Ticket";

function YearCollection({ year, tickets }) {
  const [isHome, setIsHome] = useState(false);
  return (
    <Box className="flex-container" sx={{ flexDirection: "column" ,border:"1.5px solid #d1d1d1", margin:"10px", padding:"30px 15px 30px 15px",borderRadius:"15px"}}>
      <h3 style={{marginBottom:"20px"}}>Collection of Year {year}</h3>

      <Box sx={collectionStyle}>
        {tickets.map((ticket) => (
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
  width: "100%",
  overflow: "scroll",
  display:"flex",
  justifyContent:"flex-start",
};

export default YearCollection;
