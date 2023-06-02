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
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useFetcher, useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import { CheckBox } from "@mui/icons-material";
import "../styles/Ticket.css";

import TicketForEdit from "../components/TicketForEdit";
import axios from "axios";
import Cookies from "js-cookie";
import EditNote from "../components/EditNote";

function EditTicket() {
  const instance = axios.create({
    withCredentials: true,
  });
  const [ticket, setTicket] = useState({});
  const [note, setNote] = useState({title:"",content:""});
  const [open, setOpen] = useState(false);

  const handleStyleChange = (event) => {
    setTicket((prevState) => ({
      ...prevState,
      style: event.target.value,
    }));
  };
  const styleOptions = [
    { value: "style-1", label: "1" },
    { value: "style-2", label: "2" },
    { value: "style-3", label: "3" },
  ];
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const ticketId = localStorage.getItem("ticketId");
  const userToken = Cookies.get("user");

  const handleTitleChange = (event) => {
    setTicket((prevState) => ({
      ...prevState,
      title: event.target.value.substring(0, 18),
    }));
  };
  const handleCinemaChange = (event) => {
    setTicket((prevState) => ({
      ...prevState,
      cinema: event.target.value.substring(0, 10),
    }));
  };
  const handleSeatChange = (event) => {
    setTicket((prevState) => ({
      ...prevState,
      seat: event.target.value.substring(0, 3),
    }));
  };
  const handleDateChange = (event) => {
    setTicket((prevState) => ({
      ...prevState,
      date: new Date(event.target.value),
    }));
  };
  const handleTimeChange = (event) => {
    const [hours, minutes] = event.target.value.split(":");

    const formattedTime = hours + ":" + minutes;
    // console.log(formattedTime);

    setTicket((prevState) => ({
      ...prevState,
      time: formattedTime,
    }));
  };
  useEffect(() => {
    instance
      .get(`http://localhost:4000/ticket/${ticketId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        console.log(res.data.data);
        setTicket(res.data.data);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    instance
      .get(`http://localhost:4000/note/${ticketId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        // console.log(res.data.note);
        setNote(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])

  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    instance
      .patch(
        `http://localhost:4000/ticket/${ticketId}`,
        {
          ticket: ticket,
          note: note
        },
        config
      )
      .then((res) => {
        console.log(res);
        navigate(`/Ticket/${ticketId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    navigate(`/Ticket/${ticketId}`);
  };
  const validateForm = () => {
    const fields = [
      ticket.title,
      ticket.cinema,
      ticket.seat,
      ticket.date.toString(),
      ticket.time.toString(),
    ];
    for (const field of fields) {
      if (!field || !field.trim()) {
        console.log("Please fill all the fields");
        return false;
      }
    }
    return true;
  };

  const handleIsPrivateChange = (event) => {
    setTicket((prevState) => ({
      ...prevState,
      is_private: !ticket.is_private,
    }));
    console.log(event.target.value);
  };

  const handleEditNote = () => {
    setOpen(true);
  };
  const handleNoteSubmit = (note) => {
    setNote(note);
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
        <h1 style={{ textAlign: "center", flexGrow: "1" }}>Edit Ticket</h1>
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
          <TicketForEdit
            selectedStyle={ticket.style}
            title={ticket.title}
            cinema={ticket.cinema}
            seat={ticket.seat}
            date={ticket.date}
            time={ticket.time}
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
                      checked={ticket.style === option.value}
                      onChange={handleStyleChange}
                    />{" "}
                    <span className="checkmark"></span>
                  </label>
                </div>
              ))}
            </Box>
        
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
                value={ticket.title}
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
                  value={ticket.date}
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
                  value={ticket.time.substring(0, 5)}
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
                  value={ticket.cinema}
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
                  value={ticket.seat}
                  maxLength="3"
                  onChange={handleSeatChange}
                />
              </div>
            </Box>
          </form>

          {/* ====== Edit note button ======= */}
          {open ? (
            <EditNote
              onClick={handleEditNote}
              open={open}
              setOpen={setOpen}
              onSubmit={handleNoteSubmit}
              initialNote={note}
            />
          ) : (
            ""
          )}
          <Button endIcon={<EditIcon />} sx={addButtonStyle} onClick={handleEditNote}>
            Edit Note
          </Button>
          {/* ====== checkbox ======= */}
          <Box sx={{ marginLeft: "10px " }}>
            <FormControlLabel
              control={
                <Checkbox
                  value={ticket.is_private}
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

export default EditTicket;
