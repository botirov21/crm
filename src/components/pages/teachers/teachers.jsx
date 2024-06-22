import React from "react";
import {
  AddTeacherButton,
  TeachersComponent,
  TeachersTop,
} from "./teachersStyle";
//mui components
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import BasicModal from "./modal";
import TeachersModal from "./modal";
import StickyHeadTable from "./teachersTable";
const Teachers = () => {
  return (
    <TeachersComponent>
      <TeachersTop>
        <TextField
          id="outlined-basic"
          label="Search teacher"
          variant="outlined"
          className="textinput"
        />
        <TeachersModal />
      </TeachersTop>
      <StickyHeadTable/>
    </TeachersComponent>
  );
};

export default Teachers;
