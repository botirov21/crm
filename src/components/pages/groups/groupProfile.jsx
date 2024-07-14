import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CourseName,
  GroupDetailsRow,
  GroupName,
  GroupsComponent,
  GroupsInfo,
  Line,
  SeeGroupBtn,
  StartDate,
  StudentNumber,
  TeacherTabConrol,
} from "../teachers/teachersStyle";
import { mockGroup } from "../../mock/groups"; // Adjust the import path as needed
import { Avatar } from "@mui/material";
import IndividualPrices from "./InduvidualPrizes";
import History from "./history";

const GroupProfile = () => {
  const { groupId } = useParams();
  const [activeTab, setActiveTab] = useState("Attandance");
  const group = mockGroup.groupInfo.find((g) => g.id === parseInt(groupId, 10));

  if (!group) {
    return <div>Group not found</div>;
  }
//to get initials
  const getInitials = (fullName) => {
    if (!fullName) return "";
    return fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("");
  };

  const initials = getInitials(group.group.name);

  //tab content
  const renderContent = () => {
    switch (activeTab) {
      case "Attandance":
        return <div>Attendence</div>;
      case "Individual prices":
        return <div>
            <IndividualPrices/>
        </div>;
      case "History":
        return <div>
            <History/>
        </div>;
      default:
        return null;
    }
  };
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        flexDirection: "column",
        height:"100vh"
      }}
    >
      <GroupsComponent>
        <GroupsInfo>
          {group.group.profileImage ? (
            <img
              alt={group.group.name}
              src={group.group.profileImage}
              style={{
                width: "80px",
                height: "80px",
                border: "1px solid #2C2669",
                borderRadius: "50%",
                margin: "10px 30px 0",
              }}
            />
          ) : (
            <Avatar
              sx={{
                width: "80px",
                height: "80px",
                border: "1px solid #2C2669",
                borderRadius: "50%",
                margin: "10px 30px 0",
                backgroundColor: "#A098D5",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#FFF",
              }}
            >
              {initials}
            </Avatar>
          )}
          <GroupDetailsRow>
            <GroupName>{group.group.name}</GroupName> Group name
          </GroupDetailsRow>
          <GroupDetailsRow>
            <CourseName>{group.group.course}</CourseName> Course name
          </GroupDetailsRow>
          <GroupDetailsRow>
            <StartDate>{group.group.startDate}</StartDate> Start date
          </GroupDetailsRow>
          <GroupDetailsRow>
            <StudentNumber>
              <span>{group.group.students} students</span>
              <span>{group.group.room} rooms</span>
            </StudentNumber>{" "}
            Students & room
          </GroupDetailsRow>
          <Line />
          <GroupDetailsRow>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <StartDate>
                {group.group.time.from} - {group.group.time.to}
              </StartDate>
              Mon, Tue, Wed, Thu, Fri
            </div>
            <SeeGroupBtn>See group</SeeGroupBtn>
          </GroupDetailsRow>
        </GroupsInfo>
      </GroupsComponent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          width: "70%",
        //   alignItems: "center",
        }}
      >
        <TeacherTabConrol>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Attandance")}
            style={{
              backgroundColor:
                activeTab === "Attandance" ? "#2C2669" : "transparent",
              color: activeTab === "Attandance" ? "#fff" : "#2C2669",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            Attandance
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Individual prices")}
            style={{
              backgroundColor:
                activeTab === "Individual prices" ? "#2C2669" : "transparent",
              color: activeTab === "Individual prices" ? "#fff" : "#2C2669",
            }}
          >
            Individual prices
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("History")}
            style={{
              backgroundColor:
                activeTab === "History" ? "#2C2669" : "transparent",
              color: activeTab === "History" ? "#fff" : "#2C2669",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            History
          </div>
        </TeacherTabConrol>
        <div className="tab-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default GroupProfile;
