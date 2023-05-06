import { Container, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function SearchMovie() {
  return (
    <Box component="form"
      sx={{display:"flex",justifyContent:"center"}}
    >
      <TextField
        type="search"
        id="outlined-basic"
        variant="outlined"
        sx={searchStyle}
        placeholder="Seach movie title"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

const searchStyle = {
  width:"70%",
  minWidth: "280px",
  maxWidth: "600px"
};

export default SearchMovie;
