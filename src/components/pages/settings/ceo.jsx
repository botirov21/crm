import React, { useState } from "react";

import StaffTable from "./staffTable";
import { CeoComponent, CeoTabConrol, CeoTabConrolWrap } from "./ceoStyle";
import StaffModal from "./staffModal";
import BranchesDataTable from "./branchesTable";
import BranchModal from "./branchModal";

const Ceo = () => {
  const [activeTab, setActiveTab] = useState("Staff");

  const renderContent = () => {
    switch (activeTab) {
      case "Staff":
        return <StaffTable/>;
      case "Branches":
        return <BranchesDataTable/>;
      default:
        return null;
    }
  };

  return (
    <CeoComponent>
      <CeoTabConrolWrap>
        <CeoTabConrol>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Staff")}
            style={{
              borderRadius: "6px 0px 0px 6px",
              backgroundColor:
                activeTab === "Staff" ? "#2C2669" : "transparent",
              color: activeTab === "Staff" ? "#fff" : "#2C2669",
            }}
          >
            Staff
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Branches")}
            style={{
              borderRadius: "0px 6px 6px 0px",
              backgroundColor:
                activeTab === "Branches" ? "#2C2669" : "transparent",
              color: activeTab === "Branches" ? "#fff" : "#2C2669",
            }}
          >
            Branches
          </div>
        </CeoTabConrol>
        {activeTab === "Staff" && <StaffModal />}
        {activeTab === "Branches" && <BranchModal />}
      </CeoTabConrolWrap>
      <div className="tab-content">{renderContent()}</div>
    </CeoComponent>
  );
};

export default Ceo;
