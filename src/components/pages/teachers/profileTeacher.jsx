import React from "react";
import { useParams } from "react-router-dom";
import { mockTeacher } from "../../mock/teachers"; // Adjust the import path if necessary
import { TeacherInfo, TeacherInfoDetails, TeachersProfilePage } from "./teachersStyle";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import DeleteIcon from '@mui/icons-material/Delete';
import SmsIcon from '@mui/icons-material/Sms';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const ProfileTeacher = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { id } = useParams();
  const teacher = mockTeacher.teacherInfo.find(
    (teacher) => teacher.id === parseInt(id)
  );

  if (!teacher) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Teacher not found
      </div>
    );
  }

  const { fullName, phoneNumber, groups, percent, telegram, balance } =
    teacher.teacher;

  return (
    <TeachersProfilePage>
      <TeacherInfo>
        <div className="pinkHeader">
          <div style={{display:"flex", flexDirection:"column", marginTop:'150px',marginLeft:"-30px"}}>
             <img src="" alt="teacher image" />
             <h1>{fullName}</h1>
             <div className="teacher-status">
                <span>Teacher</span>
                <span>CEO</span>
             </div>
          </div>
          <MoreVertIcon
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
          />
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <SmsIcon/>
              SMS
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <DeleteIcon/>
              Delete
            </MenuItem>
          </StyledMenu>
        </div>
        {/* <div style={{ padding: "20px" }}>
          <h1>{fullName}</h1>
          <p>Phone Number: {phoneNumber || "No data"}</p>
          <p>Groups: {groups || "No data"}</p>
          <p>Percent: {percent || "No data"}</p>
          <p>Telegram: {telegram || "No data"}</p>
          <p>Balance: {balance || "No data"}</p>
        </div> */}
         <TeacherInfoDetails>
        <div>
         <ul>
            <li>Branch</li>
            <li>Branch</li>
            <li>Branch</li>
            <li>Branch</li>
            <li>Branch</li>
            </ul>   
        </div>
        <div></div>
      </TeacherInfoDetails>
      </TeacherInfo>
     
    </TeachersProfilePage>
  );
};

export default ProfileTeacher;
