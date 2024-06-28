import React, { useState } from "react";
import { LeadsContainer, LeadsMenu, LeadsNav, MenuDisplay } from "./leadsStyle";
//mui components
import WidgetsIcon from "@mui/icons-material/Widgets";
import ListIcon from "@mui/icons-material/List";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { TextField, Select, MenuItem, Button } from "@mui/material";
import HMenu from "./hMenu";
import WidthMenu from "./wMenu";
import LeadsModal from "./leadsModal";
//styles from other components


const Leads = () => {
  const [activeMenu, setActiveMenu] = useState("HMenu");
  const [lead, setLead] = useState(""); 

  const handleLead = (event) => {
    setLead(event.target.value);
  };

  const renderMenu = () => {
    switch (activeMenu) {
      case "HMenu":
        return (
          <div>
            <HMenu />
          </div>
        );
      case "WMenu":
        return (
          <div>
            <WidthMenu />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <LeadsContainer>
      <LeadsNav>
        <LeadsMenu>
          <div
            className="menu-handle"
            onClick={() => setActiveMenu("HMenu")}
            style={{
              backgroundColor:
                activeMenu === "HMenu" ? "#2C2669" : "transparent",
              color: activeMenu === "HMenu" ? "#fff" : "#2C2669",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <WidgetsIcon />
          </div>
          <div
            className="menu-handle"
            onClick={() => setActiveMenu("WMenu")}
            style={{
              backgroundColor:
                activeMenu === "WMenu" ? "#2C2669" : "transparent",
              color: activeMenu === "WMenu" ? "#fff" : "#2C2669",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <ListIcon />
          </div>
        </LeadsMenu>
        <TextField
          id="outlined-basic"
          label="Search student..."
          variant="outlined"
          className="textinput"
          sx={{ background: "#fff", color:"#BFBAE3", width:"100%",maxWidth:"200px"}}
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
              maxWidth: "200px",
              color:"#BFBAE3"
            },
          }}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={lead}
          onChange={handleLead}
          displayEmpty 
        >
          <MenuItem value="" disabled>
            Search for lead
          </MenuItem>
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
              maxWidth: "200px",
              color:"#BFBAE3"
            },
          }}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={lead}
          onChange={handleLead}
          displayEmpty 
        >
          <MenuItem value="" disabled>
            From Where
          </MenuItem>
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
              width: "300px",
              height:"55px",
              border:"1px solid #BFBAE3",
              color:"#BFBAE3"
          
          }}
         variant="outlined" startIcon={<RestartAltIcon />}>
        Reset Filter
      </Button>
      <LeadsModal/>
      </LeadsNav>
      <MenuDisplay>{renderMenu()}</MenuDisplay>
    </LeadsContainer>
  );
};

export default Leads;
