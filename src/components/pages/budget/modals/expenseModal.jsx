import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import {
  AddButton,
  CreateBtn,
  InputWrapper,
  MenuItemStyled,
  ModalComponent,
  ModalInput,
  ModalLabel,
  ModalTextarea,
  RadioContent,
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from "../budgetStyle";
import {
  Select,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

export default function ExpenseModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [category, setCategory] = React.useState("category1");
  const [employe, setEmploye] = React.useState("employe1");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleEmploye = (event) => {
    setEmploye(event.target.value);
  };

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
              <Select
                sx={{
                  height: "40px",
                  boxShadow: "none",
                  background: "var(--100, #efeef8)",
                  borderRadius: "8px",
                  paddingLeft: "10px",
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "1px solid var(--200, #cfcbea)",
                  },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 3,
                    },
                  color: "var(--600, #2C2669)",
                  ".MuiSelect-select": {
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: "0px",
                  },
                  ".MuiSvgIcon-root": {
                    color: "#6053B9",
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                onChange={handleCategory}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItemStyled value={"category1"}>
                  sample category
                </MenuItemStyled>
                <MenuItemStyled value={"category2"}>
                  sample category 2
                </MenuItemStyled>
                <MenuItemStyled value={"category3"}>
                  sample category 3
                </MenuItemStyled>
              </Select>
            </InputWrapper>
            <InputWrapper>
              <ModalLabel>Select employe</ModalLabel>
              <Select
                sx={{
                  height: "40px",
                  boxShadow: "none",
                  background: "var(--100, #efeef8)",
                  borderRadius: "8px",
                  paddingLeft: "10px",
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "1px solid var(--200, #cfcbea)",
                  },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 3,
                    },
                  color: "var(--600, #2C2669)",
                  ".MuiSelect-select": {
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: "0px",
                    height: "40px",
                  },
                  ".MuiSvgIcon-root": {
                    color: "#6053B9",
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={employe}
                onChange={handleEmploye}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItemStyled value={"employe1"}>
                  employe category
                </MenuItemStyled>
                <MenuItemStyled value={"employe2"}>
                  employe category 2
                </MenuItemStyled>
                <MenuItemStyled value={"employe3"}>
                  employe category 3
                </MenuItemStyled>
              </Select>
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
