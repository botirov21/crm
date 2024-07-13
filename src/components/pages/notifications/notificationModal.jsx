import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  AddButton,
  CreateBtn,
  InputWrapper,
  ModalComponent,
  ModalInput,
  ModalLabel,
} from "./notificationsStyle";
import { useState } from "react";
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

export default function NotificationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState('');

  return (
    <div>
      <AddButton onClick={handleOpen}>
        {" "}
        <AddIcon />
        Add new category
      </AddButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Create new blog</h1>
            <InputWrapper>
              <ModalLabel>Title</ModalLabel>
              <ModalInput placeholder="Enter name" type="text" />
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Content</ModalLabel>
              <ReactQuill  placeholder="Enter text" className="modalTextarea" theme="snow" value={value} onChange={setValue} />
            </InputWrapper>
            <InputWrapper>
              <CreateBtn>Create blog </CreateBtn>
            </InputWrapper>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
