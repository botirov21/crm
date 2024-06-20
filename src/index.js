import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/home";
import Sidenavmenubar from "./components/others/sidebar/sidebar";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Sidenavmenubar/>
     <Routes>
         <Route path="/home" element={<Home />} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
