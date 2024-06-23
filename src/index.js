import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import Sidenavmenubar from "./components/others/sidebar/sidebar";
import Teachers from "./components/pages/teachers/teachers";
import ProfileTeacher from "./components/pages/teachers/profileTeacher";
import Budget from "./components/pages/budget/budget";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidenavmenubar />
      <Routes>
        {/* Main routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/teachers/:id" element={<ProfileTeacher/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
