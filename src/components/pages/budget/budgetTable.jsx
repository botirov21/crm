import React from 'react';
import { mockBudget } from '../../mock/budget'; // Ensure the path is correct
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Full name', width: 200 },
  { field: 'Date', headerName: 'Dates', width: 150 },
  { field: 'Amount', headerName: 'Amount', width: 150 },
  { field: 'Group', headerName: 'Group', width: 150 },
  { field: 'Payee', headerName: 'Payee', width: 150 },
  { field: 'Payment method', headerName: 'Payment method', width: 150 },
];

const rows = mockBudget.budgetInfo.map(budget => ({
  id: budget.id,
  fullName: budget.budget.fullName || 'No data',
  Date: budget.budget.date || 'No data',
  Amount: budget.budget.amount || 'No data',
  Group: budget.budget.groups || 'No data',
  Payee: budget.budget.payee || 'No data',
  'Payment method': budget.budget['paymentMethod'] || 'No data', 
}));

export default function DataTable() {
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
    </div>
  );
}
