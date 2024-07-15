import React, { useState } from "react";
//mui components
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { TextField, Select, MenuItem, Button } from "@mui/material";
import { MenuItemStyled } from "../budget/budgetStyle";
import { LeadsContainer,  LeadsNav, MenuDisplay } from "../leads/leadsStyle";
import StudentModal from "./studentModal";
import StudentsTable from "./studentTable";


const Student = () => {
  const [teacher, setTeacher] = useState(""); 
  const [finance, setFinance] = useState(""); 
  const [course, setCourse] = useState(""); 

  const handleTeacher = (event) => {
    setTeacher(event.target.value);
  };
 const handleFinace = (event) => {
    setFinance(event.target.value);
  };
   const handleCourse = (event) => {
    setCourse(event.target.value);
  };


  return (
    <LeadsContainer>
      <LeadsNav>
        <TextField
          id="outlined-basic"
          label="Search for student..."
          variant="outlined"
          className="textinput"
          sx={{ background: "#fff", color:"#BFBAE3", width:"100%", height:"55px"}}
        />
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: "1px solid #BFBAE3" },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
            ".MuiSvgIcon-root": {
              color: "#2C2669",
            },
            ".MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              fontFamily: "Public Sans",
              fontSize: "14px",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "16px",
              borderRadius: "6px",
              background: "var(--Color-7, #FFF)",
              width:"100%",
              color:"#BFBAE3"
            },
          }}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={finance}
          onChange={handleFinace}
          displayEmpty 
        >
          <MenuItem value="" disabled>
            Finance status
          </MenuItem>
           <MenuItemStyled value={1}>
            Active
          </MenuItemStyled>
           <MenuItemStyled value={2}>
            Passive
          </MenuItemStyled>
        </Select>
         <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: "1px solid #BFBAE3" },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
            ".MuiSvgIcon-root": {
              color: "#2C2669",
            },
            ".MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              fontFamily: "Public Sans",
              fontSize: "14px",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "16px",
              borderRadius: "6px",
              background: "var(--Color-7, #FFF)",
               width:"100%",
              color:"#BFBAE3"
            },
          }}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={teacher}
          onChange={handleTeacher}
          displayEmpty 
        >
          <MenuItem value="" disabled>
            Teacher
          </MenuItem>
          <MenuItemStyled value={1}>
            A'zam
          </MenuItemStyled>
           <MenuItemStyled value={2}>
            Sam
          </MenuItemStyled>
        </Select>
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: "1px solid #BFBAE3" },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
            ".MuiSvgIcon-root": {
              color: "#2C2669",
            },
            ".MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              fontFamily: "Public Sans",
              fontSize: "14px",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "16px",
              borderRadius: "6px",
              background: "var(--Color-7, #FFF)",
               width:"100%",
              color:"#BFBAE3"
            },
          }}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={course}
          onChange={handleCourse}
          displayEmpty 
        >
          <MenuItem value="" disabled>
            Course
          </MenuItem>
          <MenuItemStyled value={1}>
            Elementary
          </MenuItemStyled>
           <MenuItemStyled value={2}>
            Beginner
          </MenuItemStyled>
        </Select>
         <Button
           sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Public Sans",
              fontSize: "14px",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: "16px",
              borderRadius: "6px",
              background: "var(--Color-7, #FFF)",
              width: "100%",
              height:"55px",
              border:"1px solid #BFBAE3",
              color:"#BFBAE3"
          
          }}
         variant="outlined" startIcon={<RestartAltIcon />}>
        Reset Filter
      </Button>
      <StudentModal/>
      </LeadsNav>
      <MenuDisplay>
        <StudentsTable/>
      </MenuDisplay>
    </LeadsContainer>
  );
};

export default Student;
