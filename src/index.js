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
import Ceo from "./components/pages/settings/ceo";

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
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/ceo" element={<Ceo/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
