import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Modal from "@mui/material/Modal";
import {AddButton, CreateBtn, InputWrapper, ModalComponent, ModalInput, ModalLabel } from "./ceoStyle";
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

export default function BranchModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  return (
    <div>
      <AddButton onClick={handleOpen}>  <AddIcon/>Add new branch</AddButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Create new branch</h1>
            <InputWrapper>
              <ModalLabel>Branch name</ModalLabel>
              <ModalInput placeholder="Enter branch name" type="text" />
            </InputWrapper>
            <InputWrapper>
                <CreateBtn onClick={handleClose}>
                Create branch
                </CreateBtn>
            </InputWrapper>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
