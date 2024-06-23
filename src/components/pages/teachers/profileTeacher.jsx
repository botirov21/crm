import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { mockTeacher } from "../../mock/teachers"; 
import {
  PinkHeader,
  TeacherInfo,
  TeacherInfoDetails,
  TeacherPosition,
  TeacherProfileName,
  TeacherTabConrol,
  TeachersProfilePage,
} from "./teachersStyle";
//mui components
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import SmsIcon from "@mui/icons-material/Sms";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const ProfileTeacher = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState("Profile");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { id } = useParams();
  const teacher = mockTeacher.teacherInfo.find(
    (teacher) => teacher.id === parseInt(id)
  );

  if (!teacher) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Teacher not found
      </div>
    );
  }

  const { fullName, phoneNumber, percent, telegram, balance } = teacher.teacher;
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <div>
            <TeacherInfo>
              <PinkHeader>
                <div className="teacher-card">{initials}</div>
                <MoreVertIcon
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  style={{
                    marginRight: "20px",
                  }}
                />
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <SmsIcon />
                    SMS
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <DeleteIcon />
                    Delete
                  </MenuItem>
                </StyledMenu>
              </PinkHeader>
              <TeacherProfileName>{fullName}</TeacherProfileName>
              <TeacherPosition>
                <span>Teacher</span>
                <span>CEO</span>
              </TeacherPosition>
              <div style={{ padding: "20px" }}>
                <TeacherInfoDetails>
                  <span className="label">Phone:</span>
                  <div className="caption">{phoneNumber}</div>
                </TeacherInfoDetails>
                <TeacherInfoDetails>
                  <span className="label">Telegram:</span>
                  <div className="caption">{telegram}</div>
                </TeacherInfoDetails>
                <TeacherInfoDetails>
                  <span className="label">Percent:</span>
                  <div className="caption">{percent}</div>
                </TeacherInfoDetails>
                <TeacherInfoDetails>
                  <span className="label">Balance:</span>
                  <div className="caption">{balance}</div>
                </TeacherInfoDetails>
              </div>
            </TeacherInfo>
          </div>
        );
      case "Groups":
        return <div>Groups Content</div>;
      case "Salary":
        return <div>Salary Content</div>;
      default:
        return null;
    }
  };

  return (
    <TeachersProfilePage>
      <TeacherTabConrol>
        <div
          className="tab-list"
          onClick={() => setActiveTab("Profile")}
          style={{
            backgroundColor:
              activeTab === "Profile" ? "#2C2669" : "transparent",
            color: activeTab === "Profile" ? "#fff" : "#2C2669",
          }}
        >
          Profile
        </div>
        <div
          className="tab-list"
          onClick={() => setActiveTab("Groups")}
          style={{
            backgroundColor: activeTab === "Groups" ? "#2C2669" : "transparent",
            color: activeTab === "Groups" ? "#fff" : "#2C2669",
          }}
        >
          Groups
        </div>
        <div
          className="tab-list"
          onClick={() => setActiveTab("Salary")}
          style={{
            backgroundColor: activeTab === "Salary" ? "#2C2669" : "transparent",
            color: activeTab === "Salary" ? "#fff" : "#2C2669",
          }}
        >
          Salary
        </div>
      </TeacherTabConrol>
      <div className="tab-content">{renderContent()}</div>
    </TeachersProfilePage>
  );
};

export default ProfileTeacher;
