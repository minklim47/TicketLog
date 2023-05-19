import { Container, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

function SearchTicket({ onSearch} ) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  // const handleSearch = (searchTerm) => {
  //   onSearch(searchTerm);
  // };

  return (
    <Box component="form"
      sx={{display:"flex",justifyContent:"center"}}
    >
      <TextField
        type="search"
        id="outlined-basic"
        variant="outlined"
        sx={searchStyle}
        placeholder="Search by ticket name"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleSearch}>
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

export default SearchTicket;
