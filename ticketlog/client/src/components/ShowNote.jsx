import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
function ShowNote({ open, setOpen, note }) {
  //   const [note, setNote] = useState(initialNote)

  // const instance = axios.create({
  //   withCredentials: true,
  // });
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        className="flex-container"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            {/* <TextField
              id="outlined-multiline-static"
              multiline
              rows={1}
              placeholder="Note Title"
              sx={{width:"100%", marginBottom:"20px"}}
              value={note.title}
              onChange={(e) => setNote((prevState) => ({
                ...prevState, title: e.target.value
              }))}
            /> */}
            <Box style={{ overflow: "auto" }}>
              <Typography
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                }}
                variant="h6"
              >
                {note.title}
              </Typography>
            </Box>
            <Box style={{maxHeight:"350px", overflow: "auto" }}>
              <Typography
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                }}
                variant="p"
              >
                {note.content}
              </Typography>
            </Box>
            {/* <TextField
              id="outlined-multiline-static"
              multiline
              minRows={4}
              maxRows={12}
              placeholder="Write your note here..."
              sx={{width:"100%"}}
              value ={ note.content}
              onChange={(e) => setNote((prevState) => ({
                ...prevState, content: e.target.value
              }))}
            /> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  minWidth: "300px",
  maxWidth: "710px",
  minHeight: "300px",
  maxHeight: "500px",
};

export default ShowNote;
