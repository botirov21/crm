import React, { useState } from "react";
import "./sidebar.css";
import locationIcon from "../../../assets/location-icon.svg";
import leadsIcon from "../../../assets/leads-icon.svg";
import teachersIcon from "../../../assets/teachers.icon.svg";
import groupsIcon from "../../../assets/groups-icon.svg";
import studentsIcon from "../../../assets/students-icon.svg";
import budgetIcon from "../../../assets/budget-icon.svg";
import notificationsIcon from "../../../assets/notification-icon.svg";
import settingsIcon from "../../../assets/settings-icon.svg";
import profileImage from "../../../assets/profile-image.png";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
import { FormControl, Select } from "@mui/material";
import { MenuItemStyled } from "./sidebarStyle";

function Sidenavmenubar() {
  const [value, setValue] = useState("Seoul");
  const [settings, setSettings] = useState("Settings");
  const [isNavExpanded, setIsNavExpanded] = useState(true); 
  const handleChangeLocation = (event) => {
    setValue(event.target.value);
  };

  const handleChangeSettings = (event) => {
    setSettings(event.target.value);
  };

  const handleMenuToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

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
          <NavLink
            exact={true}
            to="/location"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={locationIcon} alt="leads-icon" className="icons" />
              <FormControl sx={{ m: 0, maxWidth: 300 }} size="small">
                <Select
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
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
                      display: isNavExpanded ? "block" : "none" // Conditional visibility
                    },
                  }}
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={value}
                  onChange={handleChangeLocation}
                  IconComponent={isNavExpanded ? KeyboardArrowDownIcon : null} // Conditionally render icon
                >
                  <MenuItemStyled value={"Seoul"}>Seoul</MenuItemStyled>
                  <MenuItemStyled value={"Busan"}>Busan</MenuItemStyled>
                  <MenuItemStyled value={"Gwangju"}>Gwangju</MenuItemStyled>
                </Select>
              </FormControl>
            </li>
          </NavLink>
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
            to="/careers"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={groupsIcon} alt="Groups-icon" className="icons" />
              <div className="menu-text">Groups</div>
            </li>
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={studentsIcon} alt="Groups-icon" className="icons" />
              <div className="menu-text">Students</div>
            </li>
          </NavLink>
          <NavLink
            to="/budget"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={budgetIcon} alt="Budget-icon" className="icons" />
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
                alt="Notifications-icon"
                className="icons"
              />
              <div className="menu-text">Notifications</div>
            </li>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <img src={settingsIcon} alt="Settings-icon" className="icons" />
              <FormControl sx={{ m: 0, maxWidth: 300 }} size="small">
                <Select
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
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
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={settings}
                  onChange={handleChangeSettings}
                  IconComponent={isNavExpanded ? KeyboardArrowDownIcon : null}
                >
                  <MenuItemStyled value={"Settings"}>Settings</MenuItemStyled>
                  <MenuItemStyled value={"Office"}>Office</MenuItemStyled>
                  <MenuItemStyled value={"CEO"}>CEO</MenuItemStyled>
                  <MenuItemStyled value={"Archive"}>Archive</MenuItemStyled>
                </Select>
              </FormControl>
            </li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li className="userProfile">
              <img
                src={profileImage}
                alt="profile"
                className="icons"
              />
              <div className="profile-name">Andrew Smith</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenavmenubar;
