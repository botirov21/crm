import React, { useState, useCallback } from "react";
import { mockBudget } from "../../mock/budget"; // Ensure the path is correct
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import {
  CustomCellThin,
  DeleteActionWrap,
  EditActionWrap,
} from "./ceoStyle";

const initialData = mockBudget.budgetInfo.map((budget) => ({
  id: budget.id,
  category: budget.budget.category || "No data",
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
    { field: "id", headerName: <CustomCellThin>ID</CustomCellThin>, width: 50 },
    {
      field: "category",
      headerName: <CustomCellThin>Category</CustomCellThin>,
      flex: 1,
      renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton
            color="primary"
            onClick={() => handleEditClick(params.id)}
          >
            <EditActionWrap>
              <EditOutlinedIcon sx={{ color: "#2C2669" }} />
            </EditActionWrap>
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDeleteClick(params.id)}
          >
            <DeleteActionWrap>
              <DeleteOutlineOutlinedIcon sx={{ color: "#FF2E00" }} />
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
