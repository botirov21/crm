import React from "react";
import "./sidebar.css";
//mui icons
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LayersIcon from "@mui/icons-material/Layers";
import SchoolIcon from "@mui/icons-material/School";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { NavLink } from "react-router-dom";


function Sidenavmenubar() {
  return (
    <div className="side-nav">
      <input type="checkbox" id="menu" />
      <label className="icon" htmlFor="menu">
        <div className="menu"></div>
      </label>
      <nav>
        <ul>
          <NavLink
            exact={true}
            to="/leads"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <GroupAddIcon className="icons" />
              <div className="menu-text">Leads</div>
            </li>
          </NavLink>
          <NavLink
            to="/teachers"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <ManageAccountsIcon className="icons" />
              <div className="menu-text">Teachers</div>
            </li>
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <LayersIcon className="icons" />
              <div className="menu-text">Groups</div>
            </li>
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <SchoolIcon className="icons" />
              <div className="menu-text">Students</div>
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
            <li>
              <MonetizationOnIcon className="icons" />
              <div className="menu-text">Budget</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenavmenubar;
// import React from 'react'
// import { SidebarComponent, SidebarHeader } from './sidebarStyle'
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// const Sidebar = () => {
//   return (
//     <div>
//       <SidebarComponent>
//         <SidebarHeader>
//           <button>Logotype</button>
//           <div>
//             <AddLocationAltIcon/>
//             <select>
//               <option value="Location">Termiz</option>
//             </select>
//           </div>
//         </SidebarHeader>
//       </SidebarComponent>
//     </div>
//   )
// }

// export default Sidebar