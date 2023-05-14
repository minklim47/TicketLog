import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Cookies from "js-cookie";
import axios from "axios";


function Account() {
  const navigate = useNavigate();
  const instance = axios.create({
    withCredentials: true,
  });

  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      instance
        .get("http://localhost:4000/profile", {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          // console.log(res.data)
          setUserData(res.data);
          setName(res.data.name);
          setEmail(res.data.email_address);
          setLocation(res.data.location);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const handleCancel = () => {
      navigate('/Profile');
  }
  const handleSubmit = () => {
    if (!validateForm()) return;
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      
      instance
        .patch(
          "http://localhost:4000/profile",
          {
            name: name,
            location: location,
            currentPassword: currentPassword,
            newPassword: newPassword,
          },
          { headers: { Authorization: `Bearer ${userToken}` } }
        )
        .then((res) => {
          console.log(res.data);
          navigate('/Profile');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validateForm = () => {
    if (name == '' || location == '') {
      return false;
    }
    return true;
  };
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
          padding: "0 30px",
        }}
      >
        <IconButton component={NavLink} to="/Profile">
          <ArrowBackIcon />
        </IconButton>
        <h1 style={{ textAlign: "center", flexGrow: "1" }}>Account</h1>
        <IconButton sx={{ visibility: "hidden" }}>
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
            padding: "20px",
          }}
        >
          <Box
            className="flex-container"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box sx={{ width: "100%", maxWidth: "250px", minWidth: "230px" }}>
              <div>
                <InputLabel>Display Name</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                  placeholder={userData.name}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <InputLabel>Email address</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  disabled
                />
              </div>
              <div>
                <InputLabel>Location</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                  placeholder={userData.location}
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </div>
            </Box>
            <Divider orientation="vertical" sx={{ margin: "20px" }} flexItem />
            {/* section2 */}
            <Box sx={{ width: "100%", maxWidth: "250px", minWidth: "230px" }}>
              <div>
                <InputLabel>Current password</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  size="small"
                  type="password"
                  placeholder="Enter your current password"
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
            <Button sx={saveButtonStyle} onClick={handleSubmit}>
              Save
            </Button>
            <Button sx={cancelButtonStyle} onClick={handleCancel} variant="outlined" color="black">
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
