import React, { useState } from 'react'
import { TeacherTabConrol, TeachersProfilePage } from './teachersStyle'

const TeacherSalary = () => {
      const [activeTab, setActiveTab] = useState("");
 
 
  const renderContent = () => {
    switch (activeTab) {
      case "Income":
        return (
          <div>
         Income page
          </div>
        );
      case "Expense":
        return <div>
           Expense
        </div>;
      default:
        return null;
    }
  };

  return (
    <TeachersProfilePage>
        <TeacherTabConrol>
                 <div
          className="tab-list"
          onClick={() => setActiveTab("Income")}
          style={{
            backgroundColor:
              activeTab === "Income" ? "#2C2669" : "transparent",
            color: activeTab === "Income" ? "#fff" : "#2C2669",
            borderTopLeftRadius:"10px",
             borderBottomLeftRadius:"10px"
          }}
        >
          Profile
        </div>
        <div
          className="tab-list"
          onClick={() => setActiveTab("Expense")}
          style={{
            backgroundColor: activeTab === "Expense" ? "#2C2669" : "transparent",
            color: activeTab === "Expense" ? "#fff" : "#2C2669",
             borderTopRightRadius:"10px",
             borderBottomRightRadius:"10px"
          }}
        >
          Salary
        </div>
        </TeacherTabConrol>
            <div className="tab-content">{renderContent()}</div>
    </TeachersProfilePage>
  )
}

export default TeacherSalary