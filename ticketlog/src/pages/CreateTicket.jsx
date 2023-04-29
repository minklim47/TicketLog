import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SmallTicket from "../components/Ticket";
import Customize from "../components/Customize";
import { NavLink } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CheckBox } from "@mui/icons-material";

function CreateTicket() {
  return (
    <Box
      className="flex-container"
      sx={{ flexDirection: "column", marginTop: "100px" }}
    >
      <Box
        className="flex-container"
        sx={{
          marginBottom: "30px",
          width: "100%",
          maxWidth: "600px",
          minWidth: "300px",
          padding: "0 30px",
        }}
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <h1 style={{ textAlign: "center", flexGrow: "1" }}>Create Ticket</h1>
        <IconButton sx={{ visibility: "hidden" }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box
        className="flex-container"
        sx={{ flexDirection: { xs: "column", sm: "row" }, marginTop: "20px" }}
      >
        <Box sx={{}}>
          <SmallTicket />
          <Customize sx={{ margin: "100px" }} />
        </Box>
        <Box sx={{ padding: "0 20px" }}>
          <form
            className="flex-container"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              maxWidth: "310px",
              minWidth: "250px",
            }}
          >
            <div style={{ width: "100%" }}>
              <FormLabel>Movie Title</FormLabel>
              <TextField
                sx={smallTextFieldStyle}
                size="small"
                type="text"
                variant="outlined"
              />
            </div>
            <Box
              className="flex-container"
              sx={{ justifyContent: "space-between", width: "100%" }}
            >
              <div style={{ maxWidth: "150px", marginRight: "10px" }}>
                <FormLabel>Date</FormLabel>
                <TextField
                  sx={smallTextFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
              <div style={{ maxWidth: "150px" }}>
                <FormLabel>Time</FormLabel>
                <TextField
                  sx={smallTextFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
            </Box>
            <Box
              className="flex-container"
              sx={{ width: "100%", justifyContent: "space-between" }}
            >
              <div style={{ maxWidth: "150px", marginRight: "10px" }}>
                <FormLabel>Cinema</FormLabel>
                <TextField
                  sx={smallTextFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
              <div style={{ maxWidth: "150px" }}>
                <FormLabel>Seat</FormLabel>
                <TextField
                  sx={smallTextFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
            </Box>
          </form>
          <Button endIcon={<AddCircleIcon />} sx={addButtonStyle}>
            Add Note
          </Button>
          <Box sx={{ marginLeft: "10px " }}>
            <FormControlLabel
              control={<CheckBox name="private" />}
              label="set ticket as private"
            />
          </Box>
          <Box className="flex-container" sx={{margin:"0 auto"}}>
            <Button component={NavLink} to="/Profile" sx={saveButtonStyle}>
              Save
            </Button>
            <Button
              component={NavLink}
              to="/Profile"
              sx={cancelButtonStyle}
              variant="outlined"
              color="black"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const addButtonStyle = {
  textTransform: "none",
  fontSize: 14,
  width: "140px",
  height: "40px",
  bgcolor: "black.main",
  color: "white.main",
  margin: "20px 0",
  "&:hover": {
    backgroundColor: "black.dark",
  },
};
const smallTextFieldStyle = {
  width: "100%",
  margin: "5px 0",
};

const saveButtonStyle = {
  textTransform: "none",
  fontSize: 14,
  width: "120px",
  height: "30px",
  bgcolor: "black.main",
  color: "white.main",
  margin: "30px 20px 30px 0",
  "&:hover": {
    backgroundColor: "black.dark",
  },
};
const cancelButtonStyle = {
  textTransform: "none",
  fontSize: 14,
  width: "120px",
  height: "30px",
  borderColor: "black.main",
  color: "black.main",
  margin: "30px 0",
  "&:hover": {
    backgroundColor: "black.light",
  },
};

export default CreateTicket;
