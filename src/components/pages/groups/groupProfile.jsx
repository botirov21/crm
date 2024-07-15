import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CourseName,
  GroupDetailsRow,
  GroupName,
  GroupsComponent,
  GroupsInfo,
  Line,
  SeeGroupBtn,
  StartDate,
  StudentNumber,
  TeacherTabConrol,
} from "../teachers/teachersStyle";
import { mockGroup } from "../../mock/groups"; // Adjust the import path as needed
import { Avatar, Menu, MenuItem, Divider } from "@mui/material";
import IndividualPrices from "./InduvidualPrizes";
import History from "./history";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import EditIcon from "../../../assets/leadsIcons/editIcon.svg";
import DeleteIcon from "../../../assets/leadsIcons/deleteIcon.svg";
import SmsIcon from "../../../assets/leadsIcons/smsIcon.svg";

const GroupProfile = () => {
  const { groupId } = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [activeTab, setActiveTab] = useState("Attendance");
  const group = mockGroup.groupInfo.find((g) => g.id === parseInt(groupId, 10));

  if (!group) {
    return <div>Group not found</div>;
  }

  // Function to get initials
  const getInitials = (fullName) => {
    if (!fullName) return "";
    return fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("");
  };

  const initials = getInitials(group.group.name);

  // Tab content
  const renderContent = () => {
    switch (activeTab) {
      case "Attendance":
        return <div>Attendance</div>;
      case "Individual prices":
        return <IndividualPrices />;
      case "History":
        return <History />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        marginTop: "30px",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <GroupsComponent>
        <GroupsInfo>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {group.group.profileImage ? (
              <img
                alt={group.group.name}
                src={group.group.profileImage}
                style={{
                  width: "80px",
                  height: "80px",
                  border: "1px solid #2C2669",
                  borderRadius: "50%",
                  margin: "10px 30px 0",
                }}
              />
            ) : (
              <Avatar
                sx={{
                  width: "80px",
                  height: "80px",
                  border: "1px solid #2C2669",
                  borderRadius: "50%",
                  margin: "10px 30px 0",
                  backgroundColor: "#A098D5",
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#FFF",
                }}
              >
                {initials}
              </Avatar>
            )}
            <div style={{ paddingRight: "50px" }}>
              <GridMoreVertIcon
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
              <Menu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                  "& .MuiPaper-root": {
                    borderRadius: 6,
                    marginTop: 1,
                    minWidth: 180,
                    color: (theme) =>
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
                        color: (theme) => theme.palette.text.secondary,
                        marginRight: 1.5,
                      },
                      "&:active": {
                        backgroundColor: (theme) =>
                          theme.palette.primary.main,
                      },
                    },
                  },
                }}
              >
                <MenuItem
                  sx={{ gap: "10px" }}
                  onClick={handleClose}
                  disableRipple
                >
                  <img src={EditIcon} alt="edit" />
                  Edit
                </MenuItem>
                <MenuItem
                  sx={{ gap: "10px" }}
                  onClick={handleClose}
                  disableRipple
                >
                  <img src={SmsIcon} alt="sms" />
                  SMS
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                  sx={{ gap: "10px" }}
                  onClick={handleClose}
                  disableRipple
                >
                  <img src={DeleteIcon} alt="delete" />
                  Delete
                </MenuItem>
              </Menu>
            </div>
          </div>
          <GroupDetailsRow>
            <GroupName>{group.group.name}</GroupName> Group name
          </GroupDetailsRow>
          <GroupDetailsRow>
            <CourseName>{group.group.course}</CourseName> Course name
          </GroupDetailsRow>
          <GroupDetailsRow>
            <StartDate>{group.group.startDate}</StartDate> Start date
          </GroupDetailsRow>
          <GroupDetailsRow>
            <StudentNumber>
              <span>{group.group.students} students</span>
              <span>{group.group.room} rooms</span>
            </StudentNumber>{" "}
            Students & room
          </GroupDetailsRow>
          <Line />
          <GroupDetailsRow>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StartDate>
                {group.group.time.from} - {group.group.time.to}
              </StartDate>
              Mon, Tue, Wed, Thu, Fri
            </div>
            <SeeGroupBtn>See group</SeeGroupBtn>
          </GroupDetailsRow>
        </GroupsInfo>
      </GroupsComponent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          width: "70%",
        }}
      >
        <TeacherTabConrol>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Attendance")}
            style={{
              backgroundColor:
                activeTab === "Attendance" ? "#2C2669" : "transparent",
              color: activeTab === "Attendance" ? "#fff" : "#2C2669",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            Attendance
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Individual prices")}
            style={{
              backgroundColor:
                activeTab === "Individual prices" ? "#2C2669" : "transparent",
              color: activeTab === "Individual prices" ? "#fff" : "#2C2669",
            }}
          >
            Individual prices
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("History")}
            style={{
              backgroundColor:
                activeTab === "History" ? "#2C2669" : "transparent",
              color: activeTab === "History" ? "#fff" : "#2C2669",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            History
          </div>
        </TeacherTabConrol>
        <div className="tab-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default GroupProfile;
