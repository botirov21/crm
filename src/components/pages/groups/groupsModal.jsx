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
import { MenuItem, Select } from "@mui/material";
import { MenuItemStyled } from "../budget/budgetStyle";
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

export default function GroupsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [course, setCourse] = React.useState("");
  const [teacher, setTeacher] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [days, setDays] = React.useState("");
  const [room, setRoom] = React.useState("");

  const handleCourse = (event) => {
    setCourse(event.target.value);
  };
   const handleTeacher = (event) => {
    setTeacher(event.target.value);
  };
     const handleTime = (event) => {
    setStartTime(event.target.value);
  };
    const handleDay = (event) => {
    setDays(event.target.value);
  };
     const handleRoom = (event) => {
    setRoom(event.target.value);
  };

  return (
    <div>
      <AddTeacherButton style={{ width: "300px" }} onClick={handleOpen}>
        {" "}
        <AddIcon />
        Add <span> new group</span>
      </AddTeacherButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            <h1>Add new group</h1>
            <div>
              <ModalLabel>Group name</ModalLabel>
              <ModalInput placeholder="Enter name" type="text" />
            </div>
            <div>
              <ModalLabel>Phone number</ModalLabel>
              <ModalInput placeholder="Phone number" type="number" />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
              <div>
                <ModalLabel>Upload photo</ModalLabel>
                <ModalInput type="text" />
              </div>
              <div>
                <ModalLabel>Select course</ModalLabel>
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
                      height: "10px",
                    },
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={course}
                  onChange={handleCourse}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Group Status
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div>
              <ModalLabel>Select Teacher</ModalLabel>
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
                    maxWidth: "90%",
                    color: "#000",
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={teacher}
                onChange={handleTeacher}
                // displayEmpty
              >
                <MenuItem value=" Select Teacher" disabled>
                  Select Teacher
                </MenuItem>
              </Select>
            </div>
            <div>
              <ModalLabel>Select lesson start time</ModalLabel>
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
                    maxWidth: "90%",
                    color: "#000",
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={startTime}
                onChange={handleTime}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select lesson start time
                </MenuItem>
                <MenuItemStyled value={"8:00"}>8:00</MenuItemStyled>
                <MenuItemStyled value={"9:00"}>9:00</MenuItemStyled>
                <MenuItemStyled value={"10:00"}>10:00</MenuItemStyled>
                <MenuItemStyled value={"11:00"}>11:00</MenuItemStyled>
                <MenuItemStyled value={"12:00"}>12:00</MenuItemStyled>
              </Select>
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
                <ModalLabel>Select days</ModalLabel>
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
                      height: "10px",
                    },
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={days}
                  onChange={handleDay}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select days
                  </MenuItem>
                  <MenuItemStyled value={"Odd days"}>Odd days</MenuItemStyled>
                <MenuItemStyled value={"Even days"}>Even days</MenuItemStyled>
                <MenuItemStyled value={"Weekends"}>Weekends</MenuItemStyled>
                <MenuItemStyled value={"Every day"}>Every day</MenuItemStyled>
                <MenuItemStyled value={"Orher"}>Orher</MenuItemStyled>
                
                </Select>
              </div>
              <div>
                <ModalLabel>Select room</ModalLabel>
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
                      height: "10px",
                    },
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={room}
                  onChange={handleRoom}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select room
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "60px",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div>
                <ModalLabel>Group start date</ModalLabel>
                <ModalInput type="date" />
              </div>
              <div>
                <ModalLabel>End date of the group</ModalLabel>
                <ModalInput type="date" />
              </div>
            </div>
            <div
              style={{
                paddingTop: "20px",
              }}
            >
              <AddTeacherBtn>Create Group </AddTeacherBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
}
