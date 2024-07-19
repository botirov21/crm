import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockBudget } from "../../../mock/budget/budget";
import { CustomCellBold, CustomCellThin } from "../budgetStyle";

const columns = [
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
    field: "Category",
    headerName: <CustomCellThin>Category</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "Description",
    headerName: <CustomCellThin>Description</CustomCellThin>,
    width: 200,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "Payer",
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

// Transform mock data to rows
const rows = mockBudget.budgetInfo.map((budget) => ({
  id: budget.id, // This remains for the getRowId function
  Date: budget.budget.date || "No data",
  Amount: budget.budget.amount || "No data",
  Category: budget.budget.category || "No data",
  Description: budget.budget.description || "No data",
  Payer: budget.budget.payer || "No data",
  "Payment method": budget.budget["paymentMethod"] || "No data",
  profileImage: budget.budget.profileImage || "",
}));

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%",}}>
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
