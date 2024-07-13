import React, { useState, useCallback } from "react";
import { mockBranch } from "../../../mock/ceoBranch"; 
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import editIcon from "../../../../assets/./settings-icons/settingEdit-icon.svg"
import pauseIcon from "../../../../assets/./settings-icons/settingPause.svg"

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
  CustomCellColored,
  CustomCellThin,
  DeleteActionWrap,
  EditActionWrap,
} from "./ceoStyle";

const initialData = mockBranch.branchInfo.map((branch) => ({
  id: branch.id,
  fullName: branch.branch.fullName || "No data",
  status: branch.branch.status || "No data",
  balance: branch.branch.balance || "No data",
}));

export default function BranchesDataTable() {
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
    { field: "id", headerName: <CustomCellBold>ID</CustomCellBold>, width: 50,
    renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,},
    { field: "fullName", headerName: <CustomCellThin>Branch name</CustomCellThin>, flex: 1 ,
    renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold> },
    { field: "status", headerName: <CustomCellThin>Status</CustomCellThin>, flex: 1, 
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin> },
    { field: "balance", headerName: <CustomCellThin>Balance</CustomCellThin>, flex: 1, 
    renderCell: (params) => <CustomCellColored>{params.value}</CustomCellColored> }, 
    {
      field: "More",
      headerName: <CustomCellThin>More</CustomCellThin>,
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton
            color="primary"
            onClick={() => handleEditClick(params.id)}
          >
            <EditActionWrap>
              <img src={editIcon} alt="edit" />
            </EditActionWrap>
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDeleteClick(params.id)}
          >
            <DeleteActionWrap>
              <img src={pauseIcon} alt="pause" />
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
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the category for this item.
          </DialogContentText>
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
