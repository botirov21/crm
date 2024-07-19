import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockBudget } from "../../../mock/budget/budget";
import { Avatar, Box } from "@mui/material";
import { CustomCellBold, CustomCellThin } from "../budgetStyle";

const columns = [
  {  
    field: "fullName",
    headerName: <CustomCellThin>Full name</CustomCellThin>,
    width: 250,
    renderCell: (params) => (
      <Box display="flex" alignItems="center">
        <Avatar
          alt={params.row.fullName}
          src={params.row.profileImage}
          sx={{ width: 30, height: 30, marginRight: 1, background: "var(--400, #A098D5)"}}
        />
        <CustomCellBold>{params.row.fullName || "No data"}</CustomCellBold>
      </Box>
    ),
  },
  {
    field: "Date",
    headerName: <CustomCellThin>Dates</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "Amount",
    headerName: <CustomCellThin>Amount</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,
  },
  {
    field: "Group",
    headerName: <CustomCellThin>Group</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "payer",
    headerName: <CustomCellThin>Payer</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "Payment method",
    headerName: <CustomCellThin>Payment method</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,
  },
];

const rows = mockBudget.budgetInfo.map((budget) => ({
  id: budget.id, 
  fullName: budget.budget.fullName || "No data",
  Date: budget.budget.date || "No data",
  Amount: budget.budget.amount || "No data",
  Group: budget.budget.groups || "No data",
  payer: budget.budget.payer || "No data", // Updated to "payer"
  "Payment method": budget.budget["paymentMethod"] || "No data",
  profileImage: budget.budget.profileImage || "",
}));

export default function IncomeTable() {
  return (
    <div style={{ height: 400, width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id} 
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
    </div>
  );
}
