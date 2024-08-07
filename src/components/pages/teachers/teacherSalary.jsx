import React, { useState } from "react";
import { TeacherTabConrol, TeachersProfilePage } from "./teachersStyle";
import DataTable from "../budget/tables/expenseTable";
import IncomeTable from "../budget/tables/incomeTable";
// import IncomeTable from "./incomeTable";
// import ExpenseTable from "./expenseTable";

const TeacherSalary = () => {
  const [activeTab, setActiveTab] = useState("Income");

  const renderContent = () => {
    switch (activeTab) {
      case "Income":
        return <div style={{display:"flex", width:"1000px"}}><IncomeTable/></div>;
      case "Expense":
        return <div><DataTable/></div>;
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
            backgroundColor: activeTab === "Income" ? "#2C2669" : "transparent",
            color: activeTab === "Income" ? "#fff" : "#2C2669",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          Income
        </div>
        <div
          className="tab-list"
          onClick={() => setActiveTab("Expense")}
          style={{
            backgroundColor:
              activeTab === "Expense" ? "#2C2669" : "transparent",
            color: activeTab === "Expense" ? "#fff" : "#2C2669",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          Expense
        </div>
      </TeacherTabConrol>
      <div style={{display:"flex", width:"1000px",justifyContent:"center", alignItems:"center"}} className="tab-content">{renderContent()}</div>
    </TeachersProfilePage>
  );
};

export default TeacherSalary;
