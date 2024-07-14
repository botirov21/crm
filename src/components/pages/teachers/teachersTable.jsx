import React from "react";
import { mockTeacher } from "../../mock/teachers";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";
import { CustomCellBold, CustomCellThin } from "../budget/budgetStyle";

const defaultAvatar = "/path/to/default/avatar.jpg"; // Replace with the path to your default avatar image

const getInitials = (fullName) => {
  if (!fullName) return "";
  return fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");
};

const columns = [
  {
    field: "fullName",
    headerName: <CustomCellThin>Full Name</CustomCellThin>,
    width: 400,
    renderCell: (params) => {
      const { fullName, profileImage } = params.row;
      const initials = getInitials(fullName);
      return (
        <Box display="flex" alignItems="center">
          <Avatar
            alt={fullName}
            src={profileImage || defaultAvatar}
            sx={{
              width: 40,
              height: 40,
              marginRight: 1,
              background: "var(--400, #A098D5)",
            }}
          >
            {!profileImage && initials}
          </Avatar>
          <Link
            to={`/teachers/${params.row.id}`}
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
    headerName: <CustomCellThin>Phone Number</CustomCellThin>,
    width: 200,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "groups",
    headerName: <CustomCellThin>Groups</CustomCellThin>,
    width: 170,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "percent",
    headerName: <CustomCellThin>Percent</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
];

const rows = mockTeacher.teacherInfo.map((teacher) => ({
  id: teacher.id,
  fullName: teacher.teacher.fullName || "No data",
  phoneNumber: teacher.teacher.phoneNumber || "No data",
  groups: teacher.teacher.groups || "No data",
  percent: teacher.teacher.percent || "No data",
  profileImage: teacher.teacher.profileImage || "", // Assuming profileImage is part of teacher data
}));

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "60%", background: "#fff" }}>
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
}
