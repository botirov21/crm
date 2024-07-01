import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import Sidenavmenubar from "./components/others/sidebar/sidebar";
import Teachers from "./components/pages/teachers/teachers";
import ProfileTeacher from "./components/pages/teachers/profileTeacher";
import Budget from "./components/pages/budget/budget";
import Leads from "./components/pages/leads/leads";
import Groups from "./components/pages/groups/groups";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidenavmenubar />
      <Routes>
        {/* Main routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/teachers/:id" element={<ProfileTeacher/>}/>
        <Route path="/groups" element={<Groups/>}/>
        <Route path="/budget" element={<Budget/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
