import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockStaff } from "../../mock/ceoStaff";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { CustomCellBold, CustomCellThin } from "./ceoStyle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import editIcon from "../../../assets/edit-icon.svg";
import smsIcon from "../../../assets/sms-icon.svg";
import deleteIcon from "../../../assets/delete-icon.svg";

const StaffTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleMenuOpen = (event, rowId) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(rowId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  const columns = [
    {
      field: "id",
      headerName: <CustomCellBold>ID</CustomCellBold>,
      renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,
    },
    {
      field: "fullName",
      headerName: <CustomCellThin>Full name</CustomCellThin>,
      width: 250,
      renderCell: (params) => (
        <Box sx={{}} display="flex" alignItems="center">
          <Avatar
            alt={params.row.fullName}
            src={params.row.profileImage}
            sx={{
              width: 30,
              height: 30,
              marginRight: 1,
              background: "var(--400, #A098D5)",
            }}
          />
          <CustomCellBold>{params.row.fullName || "No data"}</CustomCellBold>
        </Box>
      ),
    },
    {
      field: "Number",
      headerName: <CustomCellThin>Number</CustomCellThin>,
      flex: 1,
      renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
    },
    {
      field: "Role",
      headerName: <CustomCellThin>Role</CustomCellThin>,
      flex: 1,
      renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,
    },
    {
      field: "actions",
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton
            color="primary"
            onClick={(event) => handleMenuOpen(event, params.row.id)}
          >
            <MoreVertIcon sx={{ color: "#2C2669" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && selectedRowId === params.row.id}
            onClose={handleMenuClose}
          >
            <MenuItem
              sx={{
                display: "flex",
                gap: "10px",
                color: " var(--500, #6053B9)",
              }}
              onClick={handleClose}
            >
              <img src={editIcon} alt="edit" />
              Edit
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                gap: "10px",
                color: " var(--500, #6053B9)",
              }}
              onClick={handleClose}
            >
              <img src={smsIcon} alt="sms" />
              SMS
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                gap: "10px",
                color: " var(--500, #6053B9)",
              }}
              onClick={handleClose}
            >
              <img src={deleteIcon} alt="delete" />
              Delete
            </MenuItem>
          </Menu>
        </strong>
      ),
    },
  ];

  // Transform mock data to rows
  const rows = mockStaff.staffInfo.map((staff) => ({
    id: staff.id,
    fullName: staff.staff.fullName || "No data",
    Number: staff.staff.number || "No data",
    Role: staff.staff.role || "No data",
  }));

  return (
    <div style={{ height: 400, width: "100%", maxWidth: "70%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
    </div>
  );
};

export default StaffTable;
