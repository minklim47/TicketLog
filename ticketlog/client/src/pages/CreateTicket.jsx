import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CheckBox } from "@mui/icons-material";
import "../styles/Ticket.css";

import TicketForCreate from "../components/TicketForCreate";
import axios from "axios";
import CreateNote from "../components/CreateNote";

function CreateTicket() {
  const [selectedStyle, setSelectedStyle] = useState("style-1");
  const handleStyleChange = (event) => {
    setSelectedStyle(event.target.value);
    console.log(event.target.value);
  };
  const styleOptions = [
    { value: "style-1", label: "1" },
    { value: "style-2", label: "2" },
    { value: "style-3", label: "3" },
  ];
  const instance = axios.create({
    withCredentials: true,
  });
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    instance
      .post(
        "http://localhost:4000/ticket",
        {
          title: title,
          date: date,
          time: time,
          cinema: cinema,
          seat: seat,
          selectedStyle: selectedStyle,
          isPrivate: isPrivate,
          userId: userId,
          note: note
        },
        config
      )
      .then((res) => {
        console.log(res);
        navigate(`/Home/${userId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    navigate(`/Home/${userId}`);
  };

  const [title, setTitle] = useState("");
  const [cinema, setCinema] = useState("");
  const [seat, setSeat] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isPrivate, setIsPrivate] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value.substring(0, 18));
  };
  const handleCinemaChange = (event) => {
    setCinema(event.target.value.substring(0, 10));
  };
  const handleSeatChange = (event) => {
    setSeat(event.target.value.substring(0, 3));
  };
  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };
  const handleTimeChange = (event) => {
    const [hours, minutes] = event.target.value.split(":");
    const newTime = new Date();
    newTime.setHours(hours);
    newTime.setMinutes(minutes);
    setTime(newTime);
  };
  const handleIsPrivateChange = (event) => {
    setIsPrivate(!isPrivate);
    console.log(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleAddNote = () => {
    setOpen(true);
  };


  const [note, setNote] = useState({title:"", content:""});

  const handleNoteSubmit = (note) => {
    setNote(note);
  }

  const validateForm = () => {
    const fields = [title, cinema, seat, date.toString(), time.toString()];
    for (const field of fields) {
      if (!field || !field.trim()) {
        console.log("Please fill all the fields");
        return false;
      }
    }
    return true;
  };
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
        <IconButton
          onClick={() => {
            navigate(`/Home/${userId}`);
          }}
        >
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
        {/* ============= Display of ticket and select style =============== */}
        <Box>
          <TicketForCreate
            selectedStyle={selectedStyle}
            title={title}
            cinema={cinema}
            seat={seat}
            date={date}
            time={time}
          />
          <Box
            className="flex-container"
            sx={{
              flexDirection: "column",
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: { xs: "center", sm: "flex-start" },
              margin: "20px 20px 20px 40px",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>Choose style</h4>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "120px",
                marginBottom: "10px ",
              }}
            >
              {/* ============= select style =============== */}
              {styleOptions.map((option) => (
                <div key={option.value}>
                  <label className="radio-style">
                    {option.label}
                    <input
                      type="radio"
                      name="style"
                      value={option.value}
                      checked={selectedStyle === option.value}
                      onChange={handleStyleChange}
                    />{" "}
                    <span className="checkmark"></span>
                  </label>
                </div>
              ))}
            </Box>
            {/* <h4 style={{ marginBottom: "5px" }}>Choose color</h4> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "120px",
              }}
            ></Box>
          </Box>
        </Box>
        <Box sx={{ padding: "0 20px" }}>
          {/* ======================== Form ======================== */}
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
                value={title}
                onChange={handleTitleChange}
                placeholder="Movie Title"
                required
              />
            </div>
            <Box
              className="flex-container"
              sx={{ width: "100%", justifyContent: "space-between" }}
            >
              <div
                style={{ maxWidth: "150px", width: "100%", marginRight: "5px" }}
              >
                <FormLabel>Date</FormLabel>
                <TextField
                  sx={smallTextFieldStyle}
                  size="small"
                  type="date"
                  variant="outlined"
                  value={
                    date.getDate() +
                    "-" +
                    parseInt(date.getMonth() + 1) +
                    "-" +
                    date.getFullYear()
                  }
                  onChange={handleDateChange}
                  required
                />
              </div>
              <div style={{ maxWidth: "150px", width: "100%" }}>
                <FormLabel>Time</FormLabel>
                <TextField
                  sx={smallTextFieldStyle}
                  size="small"
                  type="time"
                  variant="outlined"
                  value={time.toTimeString().substr(0, 5)}
                  onChange={handleTimeChange}
                  required
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
                  value={cinema}
                  maxLength="10"
                  onChange={handleCinemaChange}
                />
              </div>
              <div style={{ maxWidth: "150px" }}>
                <FormLabel>Seat</FormLabel>
                <TextField
                  sx={smallTextFieldStyle}
                  size="small"
                  type="text"
                  variant="outlined"
                  value={seat}
                  maxLength="3"
                  onChange={handleSeatChange}
                />
              </div>
            </Box>
          </form>

          {/* ====== Add note button ======= */}
          {open ? (
            <CreateNote
              onClick={handleAddNote}
              open={open}
              setOpen={setOpen}
              onSubmit={handleNoteSubmit}
              initialNote={note}
            />
          ) : (
            ""
          )}
          <Button
            endIcon={<AddCircleIcon />}
            sx={addButtonStyle}
            onClick={handleAddNote}
          >
            Add Note
          </Button>
          {/* ====== checkbox ======= */}
          <Box sx={{ marginLeft: "10px " }}>
            <FormControlLabel
              control={
                <Checkbox
                  value={isPrivate}
                  sx={{
                    color: "#000000",
                    width: "24px",
                    marginRight: "10px",
                    "&.Mui-checked": {
                      color: "#212121",
                    },
                  }}
                  defaultChecked
                  label="set ticket as prviate"
                  onClick={handleIsPrivateChange}
                />
              }
              label="set ticket as private"
            />
          </Box>

          {/* ====== save and cancel button ======= */}
          <Box className="flex-container" sx={{ margin: "0 auto" }}>
            <Button sx={saveButtonStyle} type="submit" onClick={handleSubmit}>
              Save
            </Button>
            <Button
              sx={cancelButtonStyle}
              variant="outlined"
              color="black"
              onClick={handleCancel}
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
