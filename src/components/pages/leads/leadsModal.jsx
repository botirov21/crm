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
import { MenuItemStyled } from "../budget/budgetStyle";
import { FormControl, Select } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  const [section, setSection] = React.useState("Sections");
  const [where, setWhere] = React.useState("From where");
  const handleSection = (event) => {
    setSection(event.target.value);
  };
  const handleWhere = (event) => {
    setWhere(event.target.value);
  };
  return (
    <div>
      <AddTeacherButton onClick={handleOpen}>
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
              <ModalInput placeholder="Phone number" type="number" />
            </div>
            <div>
              <ModalLabel>Sections</ModalLabel>
              <FormControl sx={{ m: 1, Width: 300 }} size="small">
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                    padding: "12px 20px",
                    display: "flex",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    lineHeight: "16px",
                    borderRadius: "6px",
                    background: "var(--Color-7, #EFEEF8)",
                    width: "340px",
                    color: "#6053B9",
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={section}
                onChange={handleSection}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItemStyled
                  style={{ background: "#EFEEF8" }}
                  value={"Section"}
                >
                  Section
                </MenuItemStyled>
              </Select>
            </FormControl>
            </div>
            <div>
              <ModalLabel>From where</ModalLabel>
                <FormControl sx={{ m: 1, Width: 300 }} size="small">
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
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
                    padding: "12px 20px",
                    display: "flex",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    lineHeight: "16px",
                    borderRadius: "6px",
                    background: "var(--Color-7, #EFEEF8)",
                    width: "340px",
                    color: "#6053B9",
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={where}
                onChange={handleWhere}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItemStyled
                  style={{ background: "#EFEEF8" }}
                  value={"From Where"}
                >
                  From Where
                </MenuItemStyled>
              </Select>
            </FormControl>
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
