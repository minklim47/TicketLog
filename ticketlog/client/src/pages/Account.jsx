import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Account() {
  return (
    <Box
      className="flex-container"
      sx={{
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <Box
        className="flex-container"
        sx={{
          marginBottom: "30px",
          width: "100%",
          maxWidth: "600px",
          minWidth: "300px",
          padding:"0 30px"
        }}
      >
        <IconButton component={NavLink} to="/Profile">
          <ArrowBackIcon />
        </IconButton>
        <h1 style={{ textAlign: "center", flexGrow: "1" }}>Account</h1>
        <IconButton sx={{visibility:"hidden"}}>
          <ArrowBackIcon />
        </IconButton>

      </Box>
      <Box className="flex-container" sx={{ flexDirection: "column" }}>
        <img
          src="src/assets/fin.jpeg"
          style={{ borderRadius: "50%", width: "200px", height: "200px" }}
        />

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "center",
            width: "100%",
            maxWidth: "600px",
            minWidth: "200px",
            padding: "30px",
          }}
        >
          <Box
            className="flex-container"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box sx={{ width: "100%", maxWidth: "250px", minWidth: "200px" }}>
              <div>
                <InputLabel>Display Name</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
              <div>
                <InputLabel>Email address</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="email"
                  variant="outlined"
                />
              </div>
              <div>
                <InputLabel>Location</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                />
              </div>
            </Box>
            <Divider orientation="vertical" sx={{ margin: "20px" }} flexItem />
            {/* section2 */}
            <Box sx={{ width: "100%", maxWidth: "250px", minWidth: "200px" }}>
              <div>
                <InputLabel>Current password</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </div>
              <div>
                <InputLabel>New password</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="password"
                  placeholder="Enter your new password"
                  variant="outlined"
                />
              </div>

              <div>
                <InputLabel>Confirm new password</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="password"
                  placeholder="Enter your new password"
                  variant="outlined"
                />
              </div>
            </Box>
          </Box>

          <Box
            className="flex-container"
            sx={{
              justifyContent: { xs: "center", sm: "flex-end" },
              marginTop: "30px",
            }}
          >
            <Button component={NavLink} to="/Profile" sx={saveButtonStyle}>Save</Button>
            <Button component={NavLink} to="/Profile" sx={cancelButtonStyle} variant="outlined" color="black">
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

const textFieldStyle = {
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
  marginRight: "10px",
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
  "&:hover": {
    backgroundColor: "black.light",
  },
};
export default Account;
