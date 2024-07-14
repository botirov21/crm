import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/home";
import Sidenavmenubar from "./components/others/sidebar/sidebar";
import Teachers from "./components/pages/teachers/teachers";
import ProfileTeacher from "./components/pages/teachers/profileTeacher";
import Budget from "./components/pages/budget/budget";
import Leads from "./components/pages/leads/leads";
import Groups from "./components/pages/groups/groups";
import Firstpage from "./components/home/firstpage";
import Ceo from "./components/pages/settings/ceo/ceo";
import Notifications from "./components/pages/notifications/notifications";
import GroupProfile from "./components/pages/groups/groupProfile";


const HideComp = () => {
  const location = useLocation();

 
  const isFirstPage = location.pathname === "/";

  return (
    <React.StrictMode>
      {!isFirstPage && <Sidenavmenubar />}
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<ProfileTeacher />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/:groupId" element={<GroupProfile/>}/>
        <Route path="/budget" element={<Budget />} />
        <Route path="/ceo" element={<Ceo/>} />
        <Route path="/notifications" element={<Notifications/>} />
      </Routes>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HideComp />
  </BrowserRouter>
);
