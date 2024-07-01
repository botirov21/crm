import React from "react";
import {
  TeachersComponent,
  TeachersTop,
} from "./teachersStyle";
//mui components
import { TextField } from "@mui/material";
import TeachersModal from "./modal";
import DataTable from "./teachersTable";
const Teachers = () => {
  return (
    <TeachersComponent>
      <TeachersTop>
        <TextField
          label="Search teacher"
          className="textinput"
          sx={{width:"100%", maxWidth:"450px", background:"#fff"}}
        />
        <TeachersModal />
      </TeachersTop>
      <DataTable/>
    </TeachersComponent>
  );
};

export default Teachers;
