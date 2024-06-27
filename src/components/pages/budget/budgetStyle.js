import styled from "@emotion/styled";
import {MenuItem } from "@mui/material";

export const BudgetComponent = styled.div`
  height: 100vh;
  background: #efeef8;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  gap: 20px;
  width: 100%;
  padding-top: 40px;
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
  width: 69%;
  justify-content: space-between;

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

//overide Style for mui select(menu item) component
export const MenuItemStyled = styled(MenuItem)`
  font-family: "Public Sans";
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 16px;
  color: var(--500, #6053b9);
`;

//modal Style

export const AddBudgetButton = styled.button`
  border-radius: 6px;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  display: inline-flex;
  flex-direction: row;
  padding: 10px 50px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--Color-7, #fff);
  font-family: "Public Sans";
  font-size: clamp(14px, 2vw+1rem, 20px);
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  &:hover {
    background-color: #fff;
    cursor: pointer;
    color: #2c2669;
    transition: all ease-in-out 0, 5s;
  }
`;
//modal style
export const ModalComponent = styled.div`
  max-width: 1000px;
  height: max-content;
  max-height: 800px;
  background: #fff;
  h1 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: clamp(24px, 2vw+1rem, 32px);
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 27px;
  }
`;
export const ModalLabel = styled.label`
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: clamp(14px, 2vw+1rem, 16px);
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  align-self: stretch;
  padding: 5px 0px;
`;
export const ModalInput = styled.input`
  display: flex;
  height: 40px;
  max-width: 100%;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--100, #efeef8);
  color: var(--600, #2C2669);
  font-family: "Public Sans";
  font-size: clamp(20px, 2vw+1rem, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-left: 10px;
  &:focus {
    outline: groove;
  }
`;
export const AddBudgetBtn = styled.button`
  display: flex;
  max-width: 100%;
  height: 44px;
  padding: 10px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  color: var(--50, var(--Color-7, #fff));
  font-family: "Public Sans";
  font-size: clamp(18px, 2vw+1rem, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ExpenseModalWrapper = styled.div`
display: flex;
width: 50%;
justify-content: end;
`