import { Box } from "@mui/material";
import React, { useState } from "react";
import Ticket from "./Ticket";

function YearCollection({ year, tickets }) {
  const [isHome, setIsHome] = useState(false);
  return (
    <Box className="flex-container" sx={{ flexDirection: "column" , backgroundColor:" #EFEFEF", margin:"30px", padding:"30px",borderRadius:"15px"}}>
      <h3 style={{marginBottom:"20px"}}>Collection of Year {year}</h3>
      {/* Render the tickets for this year */}
      {/* <Box className="flex-container" sx={collectionStyle}> */}
      <Box sx={collectionStyle}>
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
      {/* </Box> */}
    </Box>
  );
}
const collectionStyle = {
  width: "100%",
  // borderRadius: "15px",
  // backgroundColor: "#000000",

  overflow: "scroll",
  display:"flex",
  justifyContent:"flex-start",
};

export default YearCollection;
