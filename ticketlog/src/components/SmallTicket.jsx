import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
function SmallTicket() {
  return (
    <Card sx={smallTicketStyle1}>
      <CardContent>
        <Typography sx={movieTitleStyle }>Aftersun</Typography>
        <Box sx={dividerStyle}></Box>
        <Typography sx={contentStyle }>2 Jan 2023</Typography>

      </CardContent>
    </Card>
  );
}

const smallTicketStyle1 = {
  width: "250px",
  height: "250px",
  borderRadius: "15px",


};

const movieTitleStyle = {
  fontFamily: "'Bakbak One', sans-serif",
  fontSize: "40px"
}
const contentStyle = {
  fontFamily: "'B612', sans-serif",
}

const dividerStyle = {
  width:"180px",
  height:"3px",
  bgcolor:"black.main"
}
export default SmallTicket;
