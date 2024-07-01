import React, { useState } from "react";
import { mockLead } from "../../mock/lead";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import SmsIcon from "@mui/icons-material/Sms";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Box, FormControl, Select} from "@mui/material";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AddTeacherBtn,
  ModalComponent,
  ModalInput,
  ModalLabel,
} from "../teachers/teachersStyle";
import { MenuItemStyled, ModalTextarea } from "../budget/budgetStyle";

const defaultAvatar = "/path/to/default/avatar.jpg"; // Replace with the path to your default avatar image

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

const getInitials = (fullName) => {
  if (!fullName) return "";
  return fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");
};

// Column definitions with the new profile image column
const columns = (handleMenuOpen) => [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "fullName",
    headerName: "Lead name",
    width: 400,
    renderCell: (params) => {
      const { fullName, profileImg } = params.row;
      const initials = getInitials(fullName);
      return (
        <Box display="flex" alignItems="center">
          <Avatar
            alt={fullName}
            src={profileImg || defaultAvatar}
            sx={{
              width: 40,
              height: 40,
              marginRight: 1,
              background: "var(--400, #A098D5)",
            }}
          >
            {!profileImg && initials}
          </Avatar>
          <Link
            to={`/leads/${params.row.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {fullName || "No data"}
          </Link>
        </Box>
      );
    },
  },
  { field: "phoneNumber", headerName: "Phone number", width: 200 },
  { field: "fromWhere", headerName: "From Where", width: 150 },
  {
    field: "section",
    headerName: "Section",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <span>{params.value}</span>
        <IconButton
          aria-label="more"
          style={{ marginLeft: "auto" }}
          onClick={(event) => handleMenuOpen(event, params.id)}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    ),
  },
];

// Row data with the profile image URL
const initialRows = mockLead.leadInfo.map((lead) => ({
  id: lead.id,
  profileImg: lead.lead.profileImg || defaultAvatar, // Add path to default image if needed
  fullName: lead.lead.fullName || "No data",
  phoneNumber: lead.lead.phoneNumber || "No data",
  fromWhere: lead.lead.fromWhere || "No data",
  section: lead.lead.section || "No data",
}));

const WidthMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const open = Boolean(anchorEl);
  const [group, setGroup] = useState("Select group to add");
  const handleGroup = (event) => {
    setGroup(event.target.value);
  };
  // Rows state
  const [rows, setRows] = useState(initialRows);

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [smsModalOpen, setSmsModalOpen] = useState(false);
  const [groupModalOpen, setGroupModalOpen] = useState(false);

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
    setRows(rows.filter((row) => row.id !== selectedRowId));
    handleMenuClose();
  };

  // Handle SMS template click
  const handleTemplateClick = (template) => {
    setSmsText(template);
  };

  const [smsText, setSmsText] = useState("");

  return (
    <div style={{ height: 400, width: "100%", background: "#fff" }}>
      <DataGrid
        rows={rows}
        columns={columns(handleMenuOpen)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableSelectionOnClick
        hideFooterSelectedRowCount
        sx={{
          backgroundColor: "var(--Color-7, #FFF)",
          borderRadius: "16px",
          border: "none",
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none !important",
            },
          "& .MuiDataGrid-columnHeader.Mui-focusVisible": {
            backgroundColor: "inherit",
          },
          "& .MuiDataGrid-columnHeader.Mui-focusVisible .MuiDataGrid-columnHeaderTitle":
            {
              color: "inherit !important",
            },
          "& .MuiDataGrid-cell.Mui-focusVisible": {
            backgroundColor: "inherit !important",
          },
        }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <MenuItem
          onClick={handleEditClick}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleDeleteClick}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
        <MenuItem
          onClick={handleSmsClick}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <SmsIcon />
          Sms
        </MenuItem>
        <MenuItem
          onClick={handleGroupClick}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
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
        <Box sx={style}>
          <ModalComponent>
            {/* Edit form or content */}
            <h2>Edit Lead</h2>
            <p>Edit the details for lead ID: {selectedRowId}</p>
          </ModalComponent>
        </Box>
      </Modal>

      <Modal
        open={smsModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalComponent>
            {/* SMS form or content */}
            <h1>Send SMS</h1>
            <ModalTextarea
              placeholder="Enter text"
              name="Text1"
              cols="50"
              rows="7"
              value={smsText}
              onChange={(e) => setSmsText(e.target.value)}
            />
            <div style={{ width: "100%", paddingTop: "40px" }}>
              <AddTeacherBtn>Send</AddTeacherBtn>
            </div>
            <h1>SMS templates</h1>
            <div
              onClick={() =>
                handleTemplateClick(
                  "Bugun farzandingiz darsga kelmadi."
                )
              }
              style={{
                padding: "10px",
                backgroundColor: "#EFEEF8",
                margin: "10px 0",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Bugun farzandingiz darsga kelmadi
            </div>
            <div
              onClick={() => handleTemplateClick("Iltimos kurs uchun to’lovni vaqtida to’lang!")}
              style={{
                padding: "10px",
                backgroundColor: "#EFEEF8",
                margin: "10px 0",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
               Iltimos kurs uchun to’lovni vaqtida to’lang!
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

export default WidthMenu;
