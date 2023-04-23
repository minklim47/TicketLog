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
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Collection</h1>

      <Box sx={totalStyle}>
        <h2>You own a total of</h2>
        <Box>55</Box>
        <h2>movie tickets
        </h2>
      </Box>
      <Box>


      </Box>
    </Box>
  );
}

const totalStyle = {
  display:"flex",justifyContent:"space-around"
}

export default Collection;
