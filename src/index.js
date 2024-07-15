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
<<<<<<< HEAD
import GroupProfile from "../src/components/pages/groups/groupProfile"
import Archive from "./components/pages/settings/archive/archive";
import Student from "./components/pages/students/student";
=======
import GroupProfile from "./components/pages/groups/groupProfile";
import Archive from "./components/pages/settings/archive/archive";
import Office from "./components/pages/settings/office/office";

>>>>>>> 6180642f1bf580d9ff2c3790f79bd2449cb7439b

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
        <Route path="/groups" element={<Groups/>} />
        <Route path="/groups/:groupId" element={<GroupProfile/>}/>
        <Route path="/students" element={<Student/>}/>
        <Route path="/budget" element={<Budget />} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/ceo" element={<Ceo/>} />
<<<<<<< HEAD
        <Route path="/archive" element={<Archive/>}/>
=======
        <Route path="/archive" element={<Archive/>} />
        <Route path="/office" element={<Office/>} />
>>>>>>> 6180642f1bf580d9ff2c3790f79bd2449cb7439b
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
