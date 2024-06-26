import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import {
  AddTeacherBtn,
  AddTeacherButton,
  ModalComponent,
  ModalInput,
  ModalLabel,
} from "../teachers/teachersStyle";
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

export default function LeadsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddTeacherButton onClick={handleOpen}>
        {" "}
        <AddIcon />
        Add <span>lead</span>
      </AddTeacherButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Add new lead</h1>
            <div>
              <ModalLabel>Lead name</ModalLabel>
              <ModalInput placeholder="Enter name" type="text" />
            </div>
            <div>
              <ModalLabel>Phone number</ModalLabel>
              <ModalInput placeholder="Username" type="number" />
            </div>
            <div>
              <ModalLabel>Sections</ModalLabel>
            </div>
            <div>
              <ModalLabel>From where</ModalLabel>
            </div>
            <div
              style={{
                paddingTop: "20px",
              }}
            >
              <AddTeacherBtn>Add lead </AddTeacherBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
