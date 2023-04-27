import { Box } from "@mui/material";
import React from "react";

function Customize() {
  return (
    <Box className="flex-container" sx={{flexDirection:"column",justifyContent:{xs:"center",sm:"flex-start"},alignItems:{xs:"center",sm:"flex-start"},margin:"20px"}}>
      <h4 style={{marginBottom:"5px"}}>Choose style</h4>
      <Box sx={{ display: "flex", justifyContent:"space-between", width:"120px", marginBottom:"10px " }}>
        <Box sx={style1}> </Box>
        <Box sx={style2}> </Box>
        <Box sx={style3}> </Box>
      </Box>
      <h4 style={{marginBottom:"5px"}}>Choose color</h4>
      <Box sx={{ display: "flex", justifyContent:"space-between", width:"120px" }}>
        <Box sx={colorBlack}> </Box>
        <Box sx={colorRed}> </Box>
        <Box sx={colorBlue}> </Box>
      </Box>
    </Box>
  );
}

const style1 = {
  width: "30px",
  height: "30px",
  bgColor: "white.main",
  border: "2px solid #000000",
  borderRadius: "50%",
  paddingTop: "3px",
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  "&::after": {
    content: '"1"',
  },
};
const style2 = {
  width: "30px",
  height: "30px",
  backgroundColor: "white.main",
  border: "2px solid #000000",
  borderRadius: "50%",
  paddingTop: "3px",
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  "&::after": {
    content: '"2"',
  },
};
const style3 = {
  width: "30px",
  height: "30px",
  backgroundColor: "white.main",
  border: "2px solid #000000",
  borderRadius: "50%",
  paddingTop: "3px",
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  "&::after": {
    content: '"3"',
  },
};
const colorBlack = {
  width: "30px",
  height: "30px",
  backgroundColor: "black.main",

  borderRadius: "50%",
};
const colorRed = {
  width: "30px",
  height: "30px",
  backgroundColor: "red.main",

  borderRadius: "50%",
};
const colorBlue = {
  width: "30px",
  height: "30px",
  backgroundColor: "blue.main",

  borderRadius: "50%",
};

export default Customize;
