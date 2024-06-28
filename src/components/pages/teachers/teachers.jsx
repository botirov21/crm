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
          id="outlined-basic"
          label="Search teacher"
          variant="outlined"
          className="textinput"
          sx={{width:"100%"}}
        />
        <TeachersModal />
      </TeachersTop>
      <DataTable/>
    </TeachersComponent>
  );
};

export default Teachers;
