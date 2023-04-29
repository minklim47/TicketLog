import { Box } from "@mui/material";
import React from "react";

function Collection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Collection</h1>

      <Box className="flex-container" sx={totalStyle}>
        <h3>You own a total of</h3>
        <h2 style={{margin:"0 20px"}}>55</h2>
        <h3>movie tickets </h3>
      </Box>
      <Box></Box>
    </Box>
  );
}

const totalStyle = {
  flexDirection: { xs: "column", sm: "row" },
  backgroundColor: "black.main",
  color:"white.main",
  padding:"30px",
 
  
};

export default Collection;
