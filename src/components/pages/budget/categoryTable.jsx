import React, { useState, useCallback } from 'react';
import { mockBudget } from '../../mock/budget'; // Ensure the path is correct
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const initialData = mockBudget.budgetInfo.map(budget => ({
  id: budget.id,
  category: budget.budget.category || 'No data',
}));

export default function CategoryDataTable() {
  const [rows, setRows] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [editCategory, setEditCategory] = useState('');

  const handleEditClick = useCallback((id) => {
    const rowToEdit = rows.find(row => row.id === id);
    setCurrentRow(rowToEdit);
    setEditCategory(rowToEdit.category);
    setOpen(true);
  }, [rows]);

  const handleDeleteClick = useCallback((id) => {
    setRows((prevRows) => prevRows.filter(row => row.id !== id));
  }, []);

  const handleSave = useCallback(() => {
    setRows((prevRows) => 
      prevRows.map(row => 
        row.id === currentRow.id ? { ...row, category: editCategory } : row
      )
    );
    setOpen(false);
  }, [currentRow, editCategory]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'category', headerName: 'Category', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <strong>
          <IconButton
            color="primary"
            onClick={() => handleEditClick(params.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDeleteClick(params.id)}
          >
            <DeleteIcon />
          </IconButton>
        </strong>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%', maxWidth: '70%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
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
