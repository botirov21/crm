import React from "react";
import {
  ChangedStatus,
  DateUpdate,
  DivideStatus,
  HistoryWrap,
  LINE,
  NameOnGroup,
  Status,
  StatusOfStatus,
  StudentName,
} from "./groupsStyle";

const History = () => {
  return (
    <HistoryWrap>
      <DivideStatus>
        <Status>Status changed</Status>
        <DateUpdate>04.04.2024 | 00:20:20</DateUpdate>
      </DivideStatus>
      <DivideStatus>
        <StudentName>Jumayev Eshbo’ri - (77) 777 77 77 </StudentName>
        <DateUpdate>Teacher Adam</DateUpdate>
      </DivideStatus>
      <NameOnGroup>Group name: Facebook</NameOnGroup>
      <NameOnGroup>Group: #68125</NameOnGroup>
      <NameOnGroup>
        Current status: <StatusOfStatus>FROZEN</StatusOfStatus>{" "}
      </NameOnGroup>
      <NameOnGroup>
        Previous status: <StatusOfStatus>ACTIVE</StatusOfStatus>{" "}
      </NameOnGroup>
      <LINE />
    </HistoryWrap>
  );
};

export default History;
