import React from "react";
import {
  FromWhereBtn,
  FromWhereCont,
  FromWhereInfo,
  FromWhereInfosWr,
  HMenuContainer,
  SectionsCont,
} from "./leadsStyle";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  AddTeacherBtn,
  ModalComponent,
  ModalInput,
  ModalLabel,
} from "../teachers/teachersStyle";

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

const HMenu = () => {
  const [whereOpen, setWhereOpen] = React.useState(false);
  const [sectionOpen, setSectionOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  // from where 
  const handleWhereOpen = () => setWhereOpen(true);
  const handleClose = () => setWhereOpen(false);

  // sections
  const handleSectionOpen = () => setSectionOpen(true);
  const handleSectionClose = () => setSectionOpen(false);

  // menu handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    // Handle edit action
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    // Handle delete action
    handleMenuClose();
  };


  return (
    <HMenuContainer>
      <FromWhereCont>
        <h1>From Where</h1>
        <FromWhereBtn onClick={handleWhereOpen}>
          <AddIcon />
        </FromWhereBtn>
        <Modal
          open={whereOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalComponent>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  color: "#2C2669",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Add from where
              </Typography>
              <div>
                <ModalLabel>From where name</ModalLabel>
                <ModalInput placeholder="Enter name" type="text" />
              </div>
              <div
                style={{
                  paddingTop: "20px",
                }}
              >
                <AddTeacherBtn>Create from where</AddTeacherBtn>
              </div>
            </ModalComponent>
          </Box>
        </Modal>
        <FromWhereInfo>
          <FromWhereInfosWr>
            Telegram
            <p>30</p>
          </FromWhereInfosWr>
          <MoreVertIcon onClick={handleMenuClick} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MenuItem
              onClick={handleEditClick}
              sx={{ display: "flex", gap: "10px", color: "#" }}
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
          </Menu>
        </FromWhereInfo>
      </FromWhereCont>
      <SectionsCont>
        <h1>Sections</h1>
        <FromWhereBtn onClick={handleSectionOpen}>
          <AddIcon />
        </FromWhereBtn>
         <Modal
          open={sectionOpen}
          onClose={handleSectionClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalComponent>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  color: "#2C2669",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Add section
              </Typography>
              <div>
                <ModalLabel>Section name</ModalLabel>
                <ModalInput placeholder="Enter section name" type="text" />
              </div>
              <div
                style={{
                  paddingTop: "20px",
                }}
              >
                <AddTeacherBtn>Create section</AddTeacherBtn>
              </div>
            </ModalComponent>
          </Box>
        </Modal>
      </SectionsCont>
    </HMenuContainer>
  );
};

export default HMenu;
