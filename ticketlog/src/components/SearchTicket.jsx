import { Container, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function SearchTicket() {
  return (
    <Box component="form"
    >
      <TextField
        type="search"
        id="outlined-basic"
        variant="outlined"
        sx={searchStyle}
        placeholder="Seach movie ticket"
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
  width: "500px",
};

export default SearchTicket;
