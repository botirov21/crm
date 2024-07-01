import React, { useState } from "react";
import { mockLead } from "../../mock/lead";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import SmsIcon from "@mui/icons-material/Sms";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";

// Column definitions with the new profile image column
const columns = (handleMenuOpen) => [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "profileImg",
    headerName: "Profile Image",
    width: 100,
    renderCell: (params) => <Avatar alt="Profile Image" src={params.value} />,
  },
  { field: "fullName", headerName: "Lead name", width: 300 },
  { field: "phoneNumber", headerName: "Phone number", width: 200 },
  { field: "fromWhere", headerName: "From Where", width: 150 },
  {
    field: "section",
    headerName: "Section",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <span>{params.value}</span>
        <IconButton
          aria-label="more"
          style={{ marginLeft: "auto" }}
          onClick={(event) => handleMenuOpen(event, params.id)}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    ),
  },
];

// Row data with the profile image URL
const rows = mockLead.leadInfo.map((lead) => ({
  id: lead.id,
  profileImg: lead.lead.profileImg || "path/to/default/image.jpg", // Add path to default image if needed
  fullName: lead.lead.fullName || "No data",
  phoneNumber: lead.lead.phoneNumber || "No data",
  fromWhere: lead.lead.fromWhere || "No data",
  section: lead.lead.section || "No data",
}));

const Groups = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  return (
    <div style={{ height: 400, width: "100%", background: "#fff" }}>
      <DataGrid
        rows={rows}
        columns={columns(handleMenuOpen)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <MenuItem
          onClick={handleMenuClose}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <SmsIcon /> Sms
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{ display: "flex", gap: "10px", color: "#6053B9" }}
        >
          <AddIcon />
          Add to group
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Groups;
