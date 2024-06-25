import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Modal from "@mui/material/Modal";
import {AddBudgetBtn, AddBudgetButton, ModalComponent, ModalInput, ModalLabel } from "./budgetStyle";
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

export default function BudgetModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddBudgetButton onClick={handleOpen}>  <AddIcon/>Add new category</AddBudgetButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Create new category</h1>
            <div>
              <ModalLabel>Category name</ModalLabel>
              <ModalInput placeholder="Enter name" type="text" />
            </div>
            <div>
                <AddBudgetBtn>
                Create category
                </AddBudgetBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
