import React    from "react";
import {
  PinkHeader,
  TeacherInfo,
  TeacherInfoDetails,
  TeacherPosition,
  TeacherProfileName,
} from "../teachers/teachersStyle";
import ProfileModal from "./profileModal";
const UserProfile = () => {
  const initials = "AR"; 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        width: "100vw",
      }}
    >
      <TeacherInfo>
        <PinkHeader>
          <div className="teacher-card">{initials}</div>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              height: "36px",
              padding: "0 5px",
              background: "#2C2669",
              color: "#fff",
              fontSize:"12px",
              marginRight:"10px"
            }}
          >
            <img
              src={PensilIcon}
              style={{
               
                height:"15px"
              }}
            />
            Edit profile
          </div> */}
          <ProfileModal/>
        </PinkHeader>
        <TeacherProfileName>Abdurashid</TeacherProfileName>
        <TeacherPosition>
          <span>CEO</span>
        </TeacherPosition>
        <div style={{ padding: "20px" }}>
          <TeacherInfoDetails>
            <span className="label">Telegram:</span>
            <div className="caption">rasheedk_h</div>
          </TeacherInfoDetails>
          <TeacherInfoDetails>
            <span className="label">Phone:</span>
            <div className="caption">01058347771</div>
          </TeacherInfoDetails>
        </div>
      </TeacherInfo>
    </div>
  );
};

export default UserProfile;
