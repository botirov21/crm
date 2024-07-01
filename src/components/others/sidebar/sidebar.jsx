import React, { useState, useEffect } from "react";
import "./sidebar.css";
import locationIcon from "../../../assets/location-icon.svg";
import leadsIcon from "../../../assets/leads-icon.svg";
import teachersIcon from "../../../assets/teachers-icon.svg";
import groupsIcon from "../../../assets/groups-icon.svg";
import studentsIcon from "../../../assets/students-icon.svg";
import budgetIcon from "../../../assets/budget-icon.svg";
import notificationsIcon from "../../../assets/notification-icon.svg";
import settingsIcon from "../../../assets/settings-icon.svg";
import profileImage from "../../../assets/profile-image.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FormControl, Select } from "@mui/material";
import { MenuItemStyled } from "./sidebarStyle";

function Sidenavmenubar() {
  const [location, setLocation] = useState("Seoul");
  const [selectedSetting, setSelectedSetting] = useState("Settings");
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const navigate = useNavigate();
  const locationPath = useLocation().pathname;

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeSettings = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption !== "Settings") {
      setSelectedSetting(selectedOption);
      
      switch (selectedOption) {
        case "Office":
          navigate("/office");
          break;
        case "CEO":
          navigate("/ceo");
          break;
        case "Archive":
          navigate("/archive");
          break;
        default:
          break;
      }
    }
  };

  const handleMenuToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    // Reset selectedSetting to "Settings" when navigating away from "/ceo", "/office", or "/archive"
    if (!["/ceo", "/office", "/archive"].includes(locationPath)) {
      setSelectedSetting("Settings");
    }
  }, [locationPath]);

  return (
    <div className="side-nav">
      <input type="checkbox" id="menu" onChange={handleMenuToggle} />
      <label className="icon" htmlFor="menu">
        <div className="menu"></div>
      </label>
      <nav className={isNavExpanded ? "expanded" : "collapsed"}>
        <ul>
          <NavLink
            exact={true}
            to="/location"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="logotype">Logotype</div>
          </NavLink>
          <li>
            <img src={locationIcon} alt="location-icon" className="icons" />
            <FormControl sx={{ m: 0, maxWidth: 300 }} size="small">
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  color: "#6053B9",
                  ".MuiSelect-select": {
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontStyle: "normal",
                    lineHeight: "30px",
                    width: "300px",
                  },
                  ".MuiSvgIcon-root": {
                    color: "#6053B9",
                    display: isNavExpanded ? "block" : "none",
                  },
                }}
                labelId="location-select-label"
                id="location-select"
                value={location}
                onChange={handleChangeLocation}
                IconComponent={isNavExpanded ? KeyboardArrowDownIcon : null}
              >
                <MenuItemStyled value="Seoul">Seoul</MenuItemStyled>
                <MenuItemStyled value="Busan">Busan</MenuItemStyled>
                <MenuItemStyled value="Gwangju">Gwangju</MenuItemStyled>
              </Select>
            </FormControl>
          </li>
          <div className="linedDiv"></div>
          <NavLink
            exact={true}
            to="/leads"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={leadsIcon} alt="leads-icon" className="icons" />
              <div className="menu-text">Leads</div>
            </li>
          </NavLink>
          <NavLink
            to="/teachers"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={teachersIcon} alt="teachers-icon" className="icons" />
              <div className="menu-text">Teachers</div>
            </li>
          </NavLink>
          <NavLink
            to="/groups"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={groupsIcon} alt="groups-icon" className="icons" />
              <div className="menu-text">Groups</div>
            </li>
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={studentsIcon} alt="students-icon" className="icons" />
              <div className="menu-text">Students</div>
            </li>
          </NavLink>
          <NavLink
            to="/budget"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={budgetIcon} alt="budget-icon" className="icons" />
              <div className="menu-text">Budget</div>
            </li>
          </NavLink>
          <div className="linedDiv"></div>
          <NavLink
            to="/notifications"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img
                src={notificationsIcon}
                alt="notifications-icon"
                className="icons"
              />
              <div className="menu-text">Notifications</div>
            </li>
          </NavLink>
          <li>
            <img src={settingsIcon} alt="settings-icon" className="icons" />
            <div className={`menu-text ${selectedSetting !== "Settings" ? "bold-text" : ""}`}>
              {selectedSetting}
            </div>
            <FormControl sx={{ m: 0, maxWidth: 300 }} size="small">
              <Select
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  color: "#6053B9",
                  ".MuiSelect-select": {
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontStyle: "normal",
                    lineHeight: "30px",
                    width: "300px",
                  },
                  ".MuiSvgIcon-root": {
                    color: "#6053B9",
                    display: isNavExpanded ? "block" : "none",
                  },
                }}
                labelId="settings-select-label"
                id="settings-select"
                value={selectedSetting}
                onChange={handleChangeSettings}
                IconComponent={isNavExpanded ? KeyboardArrowDownIcon : null}
                renderValue={() => null} 
              >
                <MenuItemStyled value="Office">Office</MenuItemStyled>
                <MenuItemStyled value="CEO">CEO</MenuItemStyled>
                <MenuItemStyled value="Archive">Archive</MenuItemStyled>
              </Select>
            </FormControl>
          </li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li className="userProfile">
              <img src={profileImage} alt="profile" className="icons" />
              <div className="profile-name">Andrew Smith</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenavmenubar;
