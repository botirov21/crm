import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  AddTeacherBtn,
  AddTeacherButton,
  ModalComponent,
  ModalInput,
  ModalLabel,
} from "../teachers/teachersStyle";
import { MenuItemStyled, RadioContent, RadioInput, RadioLabel, RadioWrapper } from "../budget/budgetStyle";
import {  MenuItem, Select } from "@mui/material";
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

export default function StudentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [group, setGroup] = React.useState("");
  const handleGroup = (event) => {
    setGroup(event.target.value);
  };

  return (
    <div>
      <AddTeacherButton onClick={handleOpen}>
        <AddIcon />
        Add <span>new </span> student
      </AddTeacherButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Add new student</h1>
            <div>
              <ModalLabel>Full name</ModalLabel>
              <ModalInput placeholder="Enter full name" type="text" />
            </div>
            <div>
              <ModalLabel>Date of birth</ModalLabel>
              <ModalInput placeholder="Select bithday" type="date" />
            </div>
            <div>
              <ModalLabel>Gender</ModalLabel>
              <div  style={{ display: "flex", gap: "50px", flexDirection:"row" }}>
                <div style={{ display: "flex",  flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                     
                        <RadioInput
                         type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                        />
                          <RadioLabel htmlFor="bankAccount">Male</RadioLabel>
    
                </div>
                <div style={{ display: "flex",  flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                     
                        <RadioInput
                         type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                        />
                          <RadioLabel htmlFor="bankAccount">Female</RadioLabel>
    
                </div>
              </div>

            </div>
            <div>
              <ModalLabel>Phone number</ModalLabel>
                <ModalInput type="number" placeholder="+998 77 777 77 77"/>
            </div>
            <div>
              <ModalLabel>Parent phone number</ModalLabel>
                <ModalInput type="number" placeholder="+998 77 777 77 77"/>
            </div>
            <div>
                <ModalLabel>Password</ModalLabel>
                <ModalInput type="password" placeholder="Enter password"/>
            </div>
             <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "60px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
                <div>
                <ModalLabel>Select group</ModalLabel>
                <Select
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": {
                      border: "1px solid #BFBAE3",
                    },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    ".MuiSvgIcon-root": {
                      color: "#2C2669",
                    },
                    ".MuiSelect-select": {
                      display: "flex",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontWeight: 500,
                      fontStyle: "normal",
                      lineHeight: "16px",
                      borderRadius: "6px",
                      background: "var(--Color-7, #EFEEF8)",
                      width: "100%",
                      maxWidth: "100%",
                      color: "#000",
                      height: "1px",
                    },
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={group}
                  onChange={handleGroup}
                  displayEmpty
                >
                  <MenuItem value="Select Group" disabled>
                    Select group
                  </MenuItem>
                  <MenuItemStyled value={1}>Beginner</MenuItemStyled>
                <MenuItemStyled value={2}>Start up</MenuItemStyled>
                <MenuItemStyled value={3}>Orher</MenuItemStyled>
                
                </Select>
              </div>
              <div>
                <ModalLabel>Date from</ModalLabel>
                <ModalInput type="date" placeholder="Select date"/>
              </div>
            </div>
           
            <div
              style={{
                paddingTop: "20px",
              }}
            >
              <AddTeacherBtn>Add Student</AddTeacherBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
