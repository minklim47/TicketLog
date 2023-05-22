import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Community() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        marginTop:"100px"
      }}
    >
      {/* <Container sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}>
        <h1 style={{textAlign:"center", marginBottom:"20px"}}>Community</h1>
        <SearchMovie />
      </Container>
      <Box>
        <YearCollection/>
      
      </Box> */}
        <Typography sx={{alignSelf:"center"}} variant="h1">COMING SOON...</Typography>
    </Container>
  );
}

export default Community;
