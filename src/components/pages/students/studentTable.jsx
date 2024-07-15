import React, { useState } from "react";
import { mockStudents } from "../../mock/students";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SmsIcon from "../../../assets/leadsIcons/smsIcon.svg";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Box, FormControl, Select } from "@mui/material";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  AddTeacherBtn,
  ModalComponent,
  ModalInput,
  ModalLabel,
} from "../teachers/teachersStyle";
import {
  CustomCellBold,
  CustomCellThin,
  MenuItemStyled,
  ModalTextarea,
  RadioInput,
  RadioLabel,
} from "../budget/budgetStyle";
import { PaymnetBalance, TableGroupStyle } from "./groupsStyle";

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
  {
    field: "id",
    headerName: <CustomCellThin>ID</CustomCellThin>,
    width: 50,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "fullName",
    headerName: <CustomCellThin>Full names</CustomCellThin>,
    width: 300,
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
            to={`/students/${params.row.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CustomCellBold>{fullName || "No data"}</CustomCellBold>
          </Link>
        </Box>
      );
    },
  },
  {
    field: "phoneNumber",
    headerName: <CustomCellThin>Phone number</CustomCellThin>,
    width: 250,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "groups",
    headerName: <CustomCellThin>Groups</CustomCellThin>,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    renderCell: (params) => <TableGroupStyle>{params.value}</TableGroupStyle>,
  },
  {
    field: "course",
    headerName: <CustomCellBold>Courses</CustomCellBold>,
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <CustomCellThin>{params.value}</CustomCellThin>
      </div>
    ),
  },
  {
    field: "teachers",
    headerName: <CustomCellBold>Teachers</CustomCellBold>,
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <CustomCellThin>{params.value}</CustomCellThin>
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
const initialRows = mockStudents.studentInfo.map((student) => ({
  id: student.id,
  profileImg: student.student.profileImg || defaultAvatar,
  fullName: student.student.name || "No data",
  phoneNumber: student.student.number || "No data",
  groups: student.student.groups || "No data",
  course: student.student.course || "No data",
  teachers: student.student.teacher || "No data",
}));

const StudentsTable = () => {
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

  const [smsText, setSmsText] = useState("");

  return (
    <div style={{ height: "50vh", width: "70vw", background: "#fff" }}>
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
          onClick={handleSmsClick}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <img src={SmsIcon} alt="sms" />
          Sms
        </MenuItem>
        <MenuItem
          onClick={handleGroupClick}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <AddIcon />
          Add payment
        </MenuItem>
      </Menu>

      <Modal
        open={smsModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            <div style={{ width: "100%", paddingTop: "40px" }}>
              <AddTeacherBtn>Send</AddTeacherBtn>
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
            <h1>Add payment</h1>
            <PaymnetBalance>Current balance : 200.000 UZS</PaymnetBalance>
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
            <ModalLabel>Payment method</ModalLabel>
            <div
              style={{
                display: "flex",
                gap: "50px",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RadioInput
                  type="radio"
                  id="Naqd pul"
                  name="payment"
                  value="Naqd pul"
                />
                <RadioLabel htmlFor="bankAccount">Naqd pul</RadioLabel>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RadioInput
                  type="radio"
                  id="Bank hisobi"
                  name="payment"
                  value="Bank hisobi"
                />
                <RadioLabel htmlFor="bankAccount">Bank hisobi</RadioLabel>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "65px",
                flexDirection: "row",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RadioInput
                  type="radio"
                  id="Plastik karta"
                  name="payment"
                  value="Plastik karta "
                />
                <RadioLabel htmlFor="bankAccount">Plastik</RadioLabel>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RadioInput
                  type="radio"
                  id="Uzum"
                  name="payment"
                  value="Uzum"
                />
                <RadioLabel htmlFor="bankAccount">Uzum</RadioLabel>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "77px",
                flexDirection: "row",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RadioInput
                  type="radio"
                  id="Click"
                  name="payment"
                  value="Click"
                />
                <RadioLabel htmlFor="bankAccount">Click</RadioLabel>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RadioInput
                  type="radio"
                  id="Payme"
                  name="payment"
                  value="Payme"
                />
                <RadioLabel htmlFor="bankAccount">Payme</RadioLabel>
              </div>
            </div>
            <div>
              <ModalLabel>Amount</ModalLabel>
              <ModalInput type="text" placeholder="Enter amount" />
            </div>
            <div>
              <ModalLabel>Payment date</ModalLabel>
              <ModalInput placeholder="Select a payment date" type="date" />
            </div>
            <div>
              <ModalLabel>Comment</ModalLabel>
              <ModalTextarea
                placeholder="Write Comment"
                name="Text1"
                cols="3"
                rows="4"
                value={smsText}
                onChange={(e) => setSmsText(e.target.value)}
              />
            </div>
            <div style={{ width: "100%", paddingTop: "40px" }}>
              <AddTeacherBtn>Add to group</AddTeacherBtn>
            </div>
          </ModalComponent>
        </Box>
      </Modal>
    </div>
  );
};

export default StudentsTable;
