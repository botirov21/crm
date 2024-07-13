import React, { useState } from "react";
import { GroupsBody, GroupsCont, GroupsNav } from "./groupsStyle";
import { Button, MenuItem, Select } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import GroupsModal from "./groupsModal";
import { mockGroup } from "../../mock/groups";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box } from "@mui/material";
import { CustomCellThin, CustomCellBold } from "../budget/budgetStyle";

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
    field: "name",
    headerName: <CustomCellThin>Groups name</CustomCellThin>,
    width: 400,
    renderCell: (params) => {
      const { name, profileImage } = params.row;
      const initials = getInitials(name);
      return (
        <Box display="flex" alignItems="center">
          <Avatar
            alt={name}
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
            to={`/groups/${params.row.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CustomCellBold>{name || "No data"}</CustomCellBold>
          </Link>
        </Box>
      );
    },
  },
  {
    field: "course",
    headerName: <CustomCellThin>Course</CustomCellThin>,
    width: 200,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "teacher",
    headerName: <CustomCellThin>Teacher</CustomCellThin>,
    width: 200,
    renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,
  },
  {
    field: "days",
    headerName: <CustomCellThin>Days</CustomCellThin>,
    width: 170,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
  {
    field: "room",
    headerName: <CustomCellThin>Rooms</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellBold>{params.value}</CustomCellBold>,
  },
  {
    field: "students",
    headerName: <CustomCellThin>Students</CustomCellThin>,
    width: 150,
    renderCell: (params) => <CustomCellThin>{params.value}</CustomCellThin>,
  },
];

const rows = mockGroup.groupInfo.map((group) => ({
  id: group.id,
  name: group.group.name || "No data",
  course: group.group.course || "No data",
  teacher: group.group.teacher || "No data",
  days: `${group.group.time.from} - ${group.group.time.to}` || "No data",
  room: group.group.room || "No data",
  students: group.group.students || "No data",
  profileImage: group.group.profileImage || "",
}));

const Groups = () => {
  const [lead, setLead] = useState("");

  const handleLead = (event) => {
    setLead(event.target.value);
  };

  return (
    <GroupsCont>
      <GroupsNav>
        <div className="group-left">
          <Select
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "1px solid #BFBAE3",
              },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              ".MuiSvgIcon-root": {
                color: "#2C2669",
              },
              ".MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                fontFamily: "Public Sans",
                fontSize: "14px",
                fontWeight: 500,
                fontStyle: "normal",
                lineHeight: "16px",
                borderRadius: "6px",
                background: "var(--Color-7, #FFF)",
                width: "100%",
                maxWidth: "200px",
                color: "#BFBAE3",
              },
            }}
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={lead}
            onChange={handleLead}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Group Status
            </MenuItem>
          </Select>
          <Select
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "1px solid #BFBAE3",
              },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              ".MuiSvgIcon-root": {
                color: "#2C2669",
              },
              ".MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                fontFamily: "Public Sans",
                fontSize: "14px",
                fontWeight: 500,
                fontStyle: "normal",
                lineHeight: "16px",
                borderRadius: "6px",
                background: "var(--Color-7, #FFF)",
                width: "100%",
                maxWidth: "200px",
                color: "#BFBAE3",
              },
            }}
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={lead}
            onChange={handleLead}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Teachers
            </MenuItem>
          </Select>
          <Select
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": {
                border: "1px solid #BFBAE3",
              },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
              ".MuiSvgIcon-root": {
                color: "#2C2669",
              },
              ".MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                fontFamily: "Public Sans",
                fontSize: "14px",
                fontWeight: 500,
                fontStyle: "normal",
                lineHeight: "16px",
                borderRadius: "6px",
                background: "var(--Color-7, #FFF)",
                width: "100%",
                maxWidth: "200px",
                color: "#BFBAE3",
              },
            }}
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={lead}
            onChange={handleLead}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Courses
            </MenuItem>
          </Select>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Public Sans",
              fontSize: "14px",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "16px",
              borderRadius: "6px",
              background: "var(--Color-7, #FFF)",
              width: "200px",
              height: "55px",
              border: "1px solid #BFBAE3",
              color: "#BFBAE3",
            }}
            variant="outlined"
            startIcon={<RestartAltIcon />}
          >
            Reset Filter
          </Button>
        </div>
        <div className="group-right">
          <GroupsModal />
        </div>
      </GroupsNav>
      <GroupsBody
        style={{
          width: "60%",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      </GroupsBody>
    </GroupsCont>
  );
};

export default Groups;
