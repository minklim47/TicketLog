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
        <Typography sx={{alignSelf:"center"}} variant="h1">COMING SOON...</Typography>
    </Container>
  );
}

export default Community;
