import React, { useState } from "react";

import { ArchiveComponent, ArchiveTabConrol, ArchiveTabConrolWrap, PageTitle } from "./archiveStyle";
import GroupsTable from "./tables/groupsTable";
import StudentsTable from "./tables/studentsTable";
import StaffTable from "./tables/staffsTable";
import LeadsTable from "./tables/leadsTable";

const Archive = () => {
  const [activeTab, setActiveTab] = useState("Groups");

  const renderContent = () => {
    switch (activeTab) {
      case "Groups":
        return <GroupsTable/>;
      case "Students":
        return <StudentsTable/>;
      case "Staff":
        return <StaffTable/>;
      case "Leads":
        return <LeadsTable/>;
      default:
        return null;
    }
  };

  return (
    <ArchiveComponent>
      <PageTitle>Archive</PageTitle>
      <ArchiveTabConrolWrap>
        <ArchiveTabConrol>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Groups")}
            style={{
              borderRadius: "6px 0px 0px 6px",
              backgroundColor:
                activeTab === "Groups" ? "#2C2669" : "transparent",
              color: activeTab === "Groups" ? "#fff" : "#2C2669",
            }}
          >
            Groups
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Students")}
            style={{
              backgroundColor:
                activeTab === "Students" ? "#2C2669" : "transparent",
              color: activeTab === "Students" ? "#fff" : "#2C2669",
            }}
          >
            Students
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Staff")}
            style={{
              backgroundColor:
                activeTab === "Staff" ? "#2C2669" : "transparent",
              color: activeTab === "Staff" ? "#fff" : "#2C2669",
            }}
          >
            Staff
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Leads")}
            style={{
              borderRadius: "0px 6px 6px 0px",
              backgroundColor:
                activeTab === "Leads" ? "#2C2669" : "transparent",
              color: activeTab === "Leads" ? "#fff" : "#2C2669",
            }}
          >
            Leads
          </div>
        </ArchiveTabConrol>
      </ArchiveTabConrolWrap>
      <div className="tab-content">{renderContent()}</div>
    </ArchiveComponent>
  );
};

export default Archive;