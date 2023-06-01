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
function CreateNote({ open, setOpen, onSubmit, initialNote }) {
  const [note, setNote] = useState(initialNote)

  // const instance = axios.create({
  //   withCredentials: true,
  // });
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    onSubmit(note)
    setOpen(false)

  }

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

            <TextField
              id="outlined-multiline-static"
              
              multiline
              rows={1}
              placeholder="Note Title"
              sx={{width:"100%", marginBottom:"20px"}}
              value={note.title}
              onChange={(e) => setNote((prevState) => ({
                ...prevState, title: e.target.value
              }))}
              inputProps={{
                maxLength: 65,
              }}
            />
            <TextField
              id="outlined-multiline-static"
  
              multiline
              minRows={4}
              maxRows={12}
              placeholder="Write your note here..."
              sx={{width:"100%", border:"1px solid white"}}
              value ={ note.content}
              onChange={(e) => setNote((prevState) => ({
                ...prevState, content: e.target.value
              }))}
            />
            
            <Box
              className="flex-container"
              sx={{ margin: "0 auto", justifyContent: "flex-end" }}
            >
              <Button sx={saveButtonStyle} type="submit" onClick={handleSubmit}>
                Save
              </Button>
              <Button sx={cancelButtonStyle} variant="outlined" color="black" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
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
  width: "70%",
  minWidth: "290px",
  maxWidth: "700px",
};
const saveButtonStyle = {
  textTransform: "none",
  fontSize: 14,
  width: "120px",
  height: "30px",
  bgcolor: "black.main",
  color: "white.main",
  margin: "30px 20px 10px 0",
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
  margin: "30px 0 10px 0",
  "&:hover": {
    backgroundColor: "black.light",
  },
};
export default CreateNote;
