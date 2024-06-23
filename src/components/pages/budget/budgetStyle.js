// budgetStyle.js
import styled from "@emotion/styled";
import {MenuItem } from "@mui/material";

export const BudgetComponent = styled.div`
  height: 100vh;
  background: #efeef8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20%;
  gap: 20px;
  width: 100%;
`;

export const BudgetTabConrol = styled.div`
  width: 60%;
  max-width: 60%;
  height: 50px;
  display: flex;
  align-items: center;
  .tab-list {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: 2px solid #2c2669;
    color: var(--600, #2c2669);
    cursor: pointer;
    font-family: "Public Sans";
    font-size: clamp(14px, 2vw + 1rem, 20px);
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }

  .tab-content {
    margin-top: 20px;
    width: 100%;
  }
`;

export const BudgetTabConrolWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  align-items: center;
  padding: 0px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TotalValue = styled.p`
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  margin: 0px;
`;

export const MenuItemStyled = styled(MenuItem)`
  font-family: "Public Sans";
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  color: var(--500, #6053b9);
`;
