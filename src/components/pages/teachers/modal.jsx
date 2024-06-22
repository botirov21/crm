import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Modal from "@mui/material/Modal";
import { AddTeacherBtn, AddTeacherButton, ModalComponent, ModalInput, ModalLabel } from "./teachersStyle";
import { Checkbox, FormControlLabel } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TeachersModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddTeacherButton onClick={handleOpen}>  <AddIcon/>Add teacher</AddTeacherButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Add new teacher</h1>
            <div>
              <ModalLabel>Name</ModalLabel>
              <ModalInput placeholder="Enter name" type="text" />
            </div>
            <div>
              <ModalLabel>Telegram Username</ModalLabel>
              <ModalInput placeholder="Username" type="text" />
            </div>
            <div>
              <ModalLabel>Upload Photo</ModalLabel>
              <ModalInput placeholder="Upload photo" type="text" />
            </div>
            <div>
              <ModalLabel>Enter Percent (%)</ModalLabel>
              <ModalInput placeholder="Enter percent" type="text" />
            </div>
            <div sty>
              <ModalLabel>Branches</ModalLabel>
              <div style={{ display: "flex", flexDirection: "row",}}>
                <FormControlLabel control={<Checkbox />} label="Demo" />
                <FormControlLabel control={<Checkbox />} label="Beruniy" />
                <FormControlLabel control={<Checkbox />} label="Termiz" />
                <FormControlLabel control={<Checkbox />} label="Namangan" />
              </div>
            </div>
             <div>
              <ModalLabel>Phone number</ModalLabel>
              <ModalInput placeholder="Username" type="text" />
            </div>
             <div>
              <ModalLabel>Password</ModalLabel>
              <ModalInput placeholder="Enter a password" type="text" />
            </div>
            <div>
                <AddTeacherBtn>
                    Add teacher
                </AddTeacherBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
