import React, { useState } from "react";
import {
  BudgetComponent,
  BudgetTabConrol,
  BudgetTabConrolWrap,
  FilterWrapper,
  TotalValue,
  MenuItemStyled,
  ExpenseModalWrapper,
  PageTitle,
} from "./budgetStyle";
import { FormControl, Select } from "@mui/material";
import CategoryDataTable from "./tables/categoryTable";
import CategoryModal from "./modals/categoryModal";
import ExpenseDataTable from "./tables/expenseTable";
import ExpenseModal from "./modals/expenseModal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IncomeTable from "./tables/incomeTable";

const Budget = () => {
  const [value, setValue] = useState("New elementary");
  const [date, setDate] = useState("Last 7 days");
  const [activeTab, setActiveTab] = useState("Income");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Income":
        return <IncomeTable/>;
      case "Category":
        return <CategoryDataTable />;
      case "Expense":
        return <ExpenseDataTable/>;
      default:
        return null;
    }
  };

  return (
    <BudgetComponent>
      <PageTitle >Budget</PageTitle>
      <BudgetTabConrolWrap>
        <BudgetTabConrol>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Income")}
            style={{
              borderRadius: "6px 0px 0px 6px",
              backgroundColor:
                activeTab === "Income" ? "#2C2669" : "transparent",
              color: activeTab === "Income" ? "#fff" : "#2C2669",
            }}
          >
            Income
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Category")}
            style={{
              backgroundColor:
                activeTab === "Category" ? "#2C2669" : "transparent",
              color: activeTab === "Category" ? "#fff" : "#2C2669",
            }}
          >
            Category
          </div>
          <div
            className="tab-list"
            onClick={() => setActiveTab("Expense")}
            style={{
              borderRadius: "0px 6px 6px 0px",
              backgroundColor:
                activeTab === "Expense" ? "#2C2669" : "transparent",
              color: activeTab === "Expense" ? "#fff" : "#2C2669",
            }}
          >
            Expense
          </div>
        </BudgetTabConrol>
        {/* date selector visible for  Income and Expense */}
        {(activeTab === "Income" || activeTab === "Expense") && (
          <FormControl sx={{ m: 1, maxWidth: 300 }} size="small">
            <Select
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                ".MuiSvgIcon-root": {
                  color: "#2C2669",
                },
                ".MuiSelect-select": {
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Public Sans",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  lineHeight: "16px",
                  borderRadius: "6px",
                  background: "var(--Color-7, #FFF)",
                  width: "300px",
                  color: "#6053B9",
                },
              }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={date}
              onChange={handleDate}
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItemStyled value={"Last 7 days"}>Last 7 days</MenuItemStyled>
              <MenuItemStyled value={"Last 28 days"}>
                Last 28 days
              </MenuItemStyled>
              <MenuItemStyled value={"Last 90 days"}>
                Last 90 days
              </MenuItemStyled>
              <MenuItemStyled
                sx={{ borderBottom: "solid 1px #A098D5" }}
                value={"Last 360 days"}
              >
                Last 360 days
              </MenuItemStyled>
              <MenuItemStyled value={"2024"}>2024</MenuItemStyled>
              <MenuItemStyled
                sx={{ borderBottom: "solid 1px #A098D5" }}
                value={"2023"}
              >
                2023
              </MenuItemStyled>
              <MenuItemStyled value={"Jun"}>Jun</MenuItemStyled>
              <MenuItemStyled
                sx={{ borderBottom: "solid 1px #A098D5" }}
                value={"May"}
              >
                May
              </MenuItemStyled>
              <MenuItemStyled value={"Custom"}>Custom</MenuItemStyled>
            </Select>
          </FormControl>
        )}

        {/* visible for  Category and Expense */}
        {activeTab === "Category" && <CategoryModal />}
      </BudgetTabConrolWrap>

       {/* visible for  Income and Expense */}
      {(activeTab === "Income" || activeTab === "Expense") && (
        <FilterWrapper>
          <FormControl sx={{ m: 1, maxWidth: 300 }} size="small">
            <Select
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                color: "#2C2669",
                ".MuiSvgIcon-root": {
                  color: "#2C2669",
                },
                ".MuiSelect-select": {
                  padding: "0px",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Public Sans",
                  fontSize: "34px",
                  fontWeight: 700,
                  fontStyle: "normal",
                  lineHeight: "42px",
                  width: "300px",
                },
              }}
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={value}
              onChange={handleChange}
              IconComponent={KeyboardArrowDownIcon}

            >
              <MenuItemStyled value={"Total Income"}>
                Total income
              </MenuItemStyled>
              <MenuItemStyled value={"New elementary"}>
                New elementary
              </MenuItemStyled>
              <MenuItemStyled value={"Test group"}>Test group</MenuItemStyled>
            </Select>
          </FormControl>
          <TotalValue>70.000 UZS</TotalValue>
          <ExpenseModalWrapper>
            {/* visible for Expense */}
            {activeTab === "Expense" && <ExpenseModal/>}
          </ExpenseModalWrapper>
        </FilterWrapper>
      )}
      <div className="tab-content">{renderContent()}</div>
    </BudgetComponent>
  );
};

export default Budget;
