import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SearchMovie from "../components/SearchMovie";
import YearCollection from "../components/YearCollection";

function Community() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        margin:"50px 0"
      }}>
        <h1 style={{textAlign:"center", marginBottom:"20px"}}>Community</h1>
        <SearchMovie />
      </Container>
      <Box>
        <YearCollection/>
      </Box>
    </Container>
  );
}

export default Community;
