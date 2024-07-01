import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import {
  AddButton,
  CreateBtn,
  InputWrapper,
  ModalComponent,
  ModalInput,
  ModalLabel,
  ModalTextarea,
  RadioContent,
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from "./ceoStyle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function StaffModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddButton onClick={handleOpen}>
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
            <h1>Create new expense</h1>
            <InputWrapper>
              <ModalLabel>Description</ModalLabel>
              <ModalTextarea
                placeholder="Enter text"
                name="Text1"
                cols="20"
                rows="2"
              />
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Date</ModalLabel>
              <ModalInput placeholder="Pick a date" type="date" />
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Select category</ModalLabel>
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Select employe</ModalLabel>
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Amount</ModalLabel>
              <ModalInput placeholder="Enter amount" type="text" />
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Payment method</ModalLabel>
              <Box sx={{ display: "flex", gap: "50px" }}>
                <RadioContent>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="cash"
                      name="fav_language"
                      value="cash"
                    />
                    <RadioLabel htmlFor="cash">Cash</RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="card"
                      name="fav_language"
                      value="card"
                    />
                    <RadioLabel htmlFor="card">Card</RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="click"
                      name="fav_language"
                      value="click"
                    />
                    <RadioLabel htmlFor="click">Click</RadioLabel>
                  </RadioWrapper>
                </RadioContent>
                <RadioContent>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="bankAccount"
                      name="fav_language"
                      value="bankAccount"
                    />
                    <RadioLabel htmlFor="bankAccount">Bank account</RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="payme"
                      name="fav_language"
                      value="payme"
                    />
                    <RadioLabel htmlFor="payme">Payme</RadioLabel>
                  </RadioWrapper>
                  <RadioWrapper>
                    <RadioInput
                      type="radio"
                      id="uzum"
                      name="fav_language"
                      value="uzum"
                    />
                    <RadioLabel htmlFor="uzum">Uzum</RadioLabel>
                  </RadioWrapper>
                </RadioContent>
              </Box>
            </InputWrapper>
            <InputWrapper>
              <CreateBtn>Create new expense</CreateBtn>
            </InputWrapper>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
