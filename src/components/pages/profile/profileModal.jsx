import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  AddTeacherBtn,
  ModalComponent,
  ModalInput,
  ModalLabel,
} from "../teachers/teachersStyle";
import PensilIcon from "../../../assets/leadsIcons/pencil.svg";

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

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "36px",
          padding: "0 5px",
          background: "#2C2669",
          color: "#fff",
          fontSize: "12px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        <img
          src={PensilIcon}
          style={{
            height: "15px",
          }}
          alt="icon"
        />
        Edit profile
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Edit Profile</h1>
            <div>
              <ModalLabel>Full name</ModalLabel>
              <ModalInput placeholder="Enter name" type="text" />
            </div>
            <div>
              <ModalLabel>Upload photo</ModalLabel>
              <ModalInput placeholder="Upload photo" type="file" />
            </div>
            <div>
              <ModalLabel>Telegram Username</ModalLabel>
              <ModalInput placeholder="Enter username" type="text" />
            </div>
            <div>
              <ModalLabel>Phone number</ModalLabel>
              <ModalInput placeholder="+998777777777" type="number" />
            </div>
            <div>
              <ModalLabel>Edit password</ModalLabel>
              <ModalInput placeholder="Enter password" type="password" />
            </div>
            <div
              style={{
                paddingTop: "20px",
              }}
            >
              <AddTeacherBtn>Update profile </AddTeacherBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
