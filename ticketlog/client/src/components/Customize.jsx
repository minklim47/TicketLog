import { Box, Button, ButtonBase } from "@mui/material";
import React, { useState } from "react";

function Customize() {

  const [style,setStyle] = useState("1");

  function onStyleChange(e) {
    setStyle(e);
    console.log( style);
    
}

  return (
    <Box
      className="flex-container"
      sx={{
        flexDirection: "column",
        justifyContent: { xs: "center", sm: "flex-start" },
        alignItems: { xs: "center", sm: "flex-start" },
        margin: "20px",
      }}
    >
      <h4 style={{ marginBottom: "5px" }}>Choose style</h4>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "120px",
          marginBottom: "10px ",
        }}
      >
        <label>
          <input
            type="radio"
            name="style"
            value="1"
            checked={style === "1"}
            onChange={() => onStyleChange("1")}
          />
          <span>1</span>
        </label>

        <label>
          <input
            type="radio"
            name="style"
            value="2"
            checked={style === "2"}
            onChange={() => onStyleChange("2")}
          />
          <span>2</span>
        </label>
        <label>
          <input
            type="radio"
            name="style"
            value="3"
            checked={style === "3"}
            onChange={() => onStyleChange("3")}
          />
          <span>3</span>
        </label>
      </Box>
      <h4 style={{ marginBottom: "5px" }}>Choose color</h4>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "120px",
        }}
      > 
        {/* <input
          type="radio"
          name="theme"
          defaultValue={1}
          id="black"
          style={{ border: "50px solid #EE3" }}
        /> */}
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
  "&:active": {
    backgroundColor: "black.main",
    color: "white.main",
  },
};
const style2 = {
  width: "30px",
  height: "30px",
  backgroundColor: "white.main",
  border: "2px solid #000000",
  borderRadius: "50%",
};
const style3 = {
  width: "30px",
  height: "30px",
  backgroundColor: "white.main",
  border: "2px solid #000000",
  borderRadius: "50%",
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

// <ButtonBase sx={style1} autoFocus>
// 1
// </ButtonBase>
// <ButtonBase sx={style2}>2</ButtonBase>
// <ButtonBase sx={style3}>3</ButtonBase>

// <ButtonBase sx={colorBlack}> </ButtonBase>
// <ButtonBase sx={colorRed}> </ButtonBase>
// <ButtonBase sx={colorBlue}> </ButtonBase>
// <Button
//   onClick={handleClick}
//   variant="contained"
//   color={flag ? "primary" : "secondary"}
// >
//   button
// </Button>
