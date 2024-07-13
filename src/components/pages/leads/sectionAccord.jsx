import React, { useState } from "react";
import { mockSection } from "../../mock/section";
//mui icons
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import SmsIcon from "@mui/icons-material/Sms";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Box, FormControl, Select, Modal } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//styles
import {
  CourseDetail,
  InfoDiv,
  NumberStudents,
  StudentAdditionals,
  StudentInfoAvatar,
  StudentInfoDetailed,
  StudentInfoLeft,
  StudentInfoRight,
  StudentInfoWappper,
  StudentName,
  StudentNameMenu,
  StudentNumber,
  Texts,
} from "./leadsStyle";
import { AddTeacherBtn, ModalComponent, ModalInput, ModalLabel } from "../teachers/teachersStyle";
import { MenuItemStyled, ModalTextarea } from "../budget/budgetStyle";
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
const LeadInfoModal = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <InfoIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          style={{
            width: "340px",
            padding: "8px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <InfoDiv>
            <StudentNameMenu style={{ fontWeight: "700", fontSize: "15px" }}>
              {data.name}
            </StudentNameMenu>
            <StudentAdditionals>Full name</StudentAdditionals>
          </InfoDiv>
          <InfoDiv>
            <StudentNameMenu style={{ fontWeight: "700", fontSize: "15px" }}>
              {data.phoneNumber}
            </StudentNameMenu>
            <StudentAdditionals>Phone number</StudentAdditionals>
          </InfoDiv>
          <InfoDiv>
            <StudentNameMenu style={{ fontWeight: "700", fontSize: "15px" }}>
              00.00.0000
            </StudentNameMenu>
            <StudentAdditionals>Updated</StudentAdditionals>
          </InfoDiv>
        </div>
      </Menu>
    </div>
  );
};

const SectionAccord = () => {
  const [data, setData] = useState(mockSection.sectionInfo);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [smsModalOpen, setSmsModalOpen] = useState(false);
  const [groupModalOpen, setGroupModalOpen] = useState(false);
  const [group, setGroup] = useState("Select group to add");
  const [smsText, setSmsText] = useState("");

  const open = Boolean(anchorEl);

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  const handleEditClick = () => {
    handleMenuClose();
    setModalOpen(true);
  };

  const handleSmsClick = () => {
    handleMenuClose();
    setSmsModalOpen(true);
  };

  const handleGroupClick = () => {
    handleMenuClose();
    setGroupModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSmsModalOpen(false);
    setGroupModalOpen(false);
  };

  const handleDeleteClick = () => {
    const updatedData = data.filter((_, index) => index !== selectedRowId);
    setData(updatedData);
    handleMenuClose();
  };

  const handleTemplateClick = (template) => {
    setSmsText(template);
  };

  return (
    <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
      <Accordion
        sx={{
          border: "1px solid #BFBAE3",
          boxShadow: "unset",
          minHeight: "64px",
          padding: "0px 14px 4px 14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ padding: "0px" }}
        >
          <CourseDetail>
            <Texts>
              Elementary <NumberStudents>{data.length}</NumberStudents>
            </Texts>
            <div style={{ display: "flex" }}>
              <ExpandMoreIcon sx={{ color: "#BFBAE3" }} />
            </div>
          </CourseDetail>
        </AccordionSummary>
        {data.map((value, key) => (
          <StudentInfoWappper key={key}>
            <StudentInfoLeft>
              <StudentInfoAvatar>{value.name[0]}</StudentInfoAvatar>
              <StudentInfoDetailed>
                <StudentName>{value.name}</StudentName>
                <StudentNumber>{value.phoneNumber}</StudentNumber>
              </StudentInfoDetailed>
            </StudentInfoLeft>
            <StudentInfoRight>
              <LeadInfoModal data={value} />
              <MoreVertIcon onClick={(event) => handleMenuOpen(event, key)} />
            </StudentInfoRight>
          </StudentInfoWappper>
        ))}
      </Accordion>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleEditClick}
          sx={{ display: "flex", gap: "10px", color: "#000" }}
        >
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleDeleteClick}
          sx={{ display: "flex", gap: "10px", color: "#000" }}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
        <MenuItem
          onClick={handleSmsClick}
          sx={{ display: "flex", gap: "10px", color: "#000" }}
        >
          <SmsIcon />
          Sms
        </MenuItem>
        <MenuItem
          onClick={handleGroupClick}
          sx={{ display: "flex", gap: "10px", color: "#000" }}
        >
          <AddIcon />
          Add to group
        </MenuItem>
      </Menu>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <ModalComponent>
            <h2>Edit Student Information</h2>
            <p>Edit the details for Student ID:</p>
          </ModalComponent>
        </Box>
      </Modal>

      <Modal
        open={smsModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <ModalComponent>
            <h1>Send SMS</h1>
            <ModalTextarea
              placeholder="Enter text"
              name="Text1"
              cols="50"
              rows="7"
              value={smsText}
              onChange={(e) => setSmsText(e.target.value)}
            />
            <div style={{ width: "100%", paddingTop: "20px" }}>
              <h1>SMS templates</h1>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#EFEEF8",
                    margin: "10px 0",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleTemplateClick("Template 1")}
                >
                  Template 1
                </div>
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#EFEEF8",
                    margin: "10px 0",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleTemplateClick("Template 2")}
                >
                  Template 2
                </div>
              </div>
              <div style={{ width: "100%", paddingTop: "40px" }}>
                <AddTeacherBtn>Send</AddTeacherBtn>
              </div>
            </div>
          </ModalComponent>
        </Box>
      </Modal>

      <Modal
        open={groupModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            {/* Add to group form or content */}
            <h1>Add to Group</h1>
            <ModalLabel>Select group</ModalLabel>
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
                value={group}
                onChange={handleGroup}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItemStyled
                  style={{ background: "#EFEEF8" }}
                  value={"Select group to add"}
                >
                  Select group to add
                </MenuItemStyled>
                <MenuItemStyled
                  style={{ background: "#EFEEF8" }}
                  value={"New Elementary"}
                >
                  New Elementary
                </MenuItemStyled>
                <MenuItemStyled
                  style={{ background: "#EFEEF8" }}
                  value={"Test"}
                >
                  Test
                </MenuItemStyled>
                <MenuItemStyled
                  style={{ background: "#EFEEF8" }}
                  value={"Beginners"}
                >
                  Beginners
                </MenuItemStyled>
                <MenuItemStyled
                  style={{ background: "#EFEEF8" }}
                  value={"New Elementary"}
                >
                  New Elementary
                </MenuItemStyled>
              </Select>
            </FormControl>
            <ModalLabel>Date form</ModalLabel>
            <ModalInput
              style={{ width: "95%", marginTop: "10px" }}
              placeholder="Pick a date"
              type="date"
            />
            <div style={{ width: "100%", paddingTop: "40px" }}>
              <AddTeacherBtn>Add to group</AddTeacherBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
};

export default SectionAccord;
