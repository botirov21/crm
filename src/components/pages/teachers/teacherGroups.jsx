import React from "react";
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
} from "./teachersStyle";
import { mockGroup } from "../../mock/groups";
const TeacherGroups = () => {
  return (
    <GroupsComponent>
      <GroupsInfo>
        <img
          alt=''
          style={{
            width: "80px",
            height: "80px",
            border: "1px solid #2C2669",
            borderRadius: "50%",
            margin: " 10px  30px 0",
          }}
        />
        <GroupDetailsRow>
          <GroupName>Ocean</GroupName> Group name
        </GroupDetailsRow>
        <GroupDetailsRow>
          <CourseName>Ocean</CourseName> Course name
        </GroupDetailsRow>
        <GroupDetailsRow>
          <StartDate>01.07.2023</StartDate> Start date
        </GroupDetailsRow>
        <GroupDetailsRow>
          <StudentNumber>
            <span>12 students</span>
            <span> 2- rooms</span>
          </StudentNumber>{" "}
          Students & room
        </GroupDetailsRow>
        <Line />
        <GroupDetailsRow>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StartDate>09:00 - 11:00</StartDate>
            Mon, Tue, Wed, Thu, Fri
          </div>
          <SeeGroupBtn>See group</SeeGroupBtn>
        </GroupDetailsRow>
      </GroupsInfo>
    </GroupsComponent>
  );
};

export default TeacherGroups;
