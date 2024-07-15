import React, { useState } from "react";

import { OfficeComponent, OfficeTabConrol, OfficeTabConrolWrap, PageTitle } from "./officeStyle";
import Courses from "./tables/courses/courses";


const Office = () => {
  const [activeTab, setActiveTab] = useState("Courses");

  const renderContent = () => {
    switch (activeTab) {
      case "Courses":
        return <Courses/>;
      case "Rooms":
        return <Courses/>;
      case "SmsTemplates":
        return <Courses/>;
      case "SmsLogs":
        return <Courses/>;
      default:
        return null;
    }
  };

  return (
    <OfficeComponent>
      <PageTitle>Office</PageTitle>
      <OfficeTabConrolWrap>
        <OfficeTabConrol>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Courses")}
            style={{
              borderRadius: "6px 0px 0px 6px",
              backgroundColor:
                activeTab === "Courses" ? "#2C2669" : "transparent",
              color: activeTab === "Courses" ? "#fff" : "#2C2669",
            }}
          >
            Courses
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
        </OfficeTabConrol>
      </OfficeTabConrolWrap>
      <div className="tab-content">{renderContent()}</div>
    </OfficeComponent>
  );
};

export default Office;