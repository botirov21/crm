import React, { useState, useCallback } from "react";
import { mockStaff } from "../../../../mock/setting-archive/staff"; 
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box, Button, IconButton } from "@mui/material";
import deleteIcon from "../../../../../assets/settings-icons/settingDelete-icon.svg";
import refreshIcon from "../../../../../assets/settings-icons/refresh-icon.svg";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import {
  CustomCellBold,
  CustomCellThin,
  CustomToolBar,
  DeleteActionWrap,
  EditActionWrap,
} from "../archiveStyle"; 

const initialData = mockStaff.staffInfo.map((staff) => ({
  id: staff.id,
  FullName: staff.staff.fullName || "No data",
  Number: staff.staff.number || "No data",
  Role: staff.staff.role || "No data",
}));

export default function StaffTable() {
  const [rows, setRows] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [editCategory, setEditCategory] = useState("");

  const handleEditClick = useCallback(
    (id) => {
      const rowToEdit = rows.find((row) => row.id === id);
      setCurrentRow(rowToEdit);
      setEditCategory(rowToEdit.category);
      setOpen(true);
    },
    [rows]
  );

  const handleDeleteClick = useCallback((id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  }, []);

  const handleSave = useCallback(() => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === currentRow.id ? { ...row, category: editCategory } : row
      )
    );
    setOpen(false);
  }, [currentRow, editCategory]);

  const columns = [
    { 
      field: "id", 
      headerName: <CustomToolBar>ID</CustomToolBar>, 
      width: 50,
      renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,
    },
    { 
      field: "FullName", 
      headerName: <CustomToolBar>Full Name</CustomToolBar>, 
      flex: 1,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
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
          <CustomCellBold>{params.row.FullName || "No data"}</CustomCellBold>
        </Box>
      ),
    },
    { 
      field: "Number", 
      headerName: <CustomToolBar>Phone Number</CustomToolBar>, 
      flex: 1, 
      renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin> 
    },
    { 
      field: "Role", 
      headerName: <CustomToolBar>Role</CustomToolBar>, 
      flex: 1, 
      renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold> 
    },
    {
      field: "Action",
      headerName: <CustomToolBar>Action</CustomToolBar>,
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton
            color="primary"
            onClick={() => handleEditClick(params.id)}
          >
            <EditActionWrap>
              <img src={refreshIcon} alt="edit" />
            </EditActionWrap>
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDeleteClick(params.id)}
          >
            <DeleteActionWrap>
              <img style={{ color: '#FF2E00' }} src={deleteIcon} alt="delete" />
            </DeleteActionWrap>
          </IconButton>
        </strong>
      ),
    },
  ];

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
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within": {
            outline: "none !important",
          },
          "& .MuiDataGrid-columnHeader.Mui-focusVisible": {
            backgroundColor: "inherit",
          },
          "& .MuiDataGrid-columnHeader.Mui-focusVisible .MuiDataGrid-columnHeaderTitle": {
            color: "inherit !important",
          },
          "& .MuiDataGrid-cell.Mui-focusVisible": {
            backgroundColor: "inherit !important",
          },
        }}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the category for this item.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Category"
            type="text"
            fullWidth
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
