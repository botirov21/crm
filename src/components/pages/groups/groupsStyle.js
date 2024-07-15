import styled from "styled-components";

export const GroupsCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--100, #efeef8);
  margin-top: 60px;
`;
export const GroupsNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
  .group-left {
    display: flex;
    flex-direction: row;
    justify-content: safe;
    align-items: center;
    gap: 20px;
  }
  .group-right {
    display: flex;
  }
`;
export const GroupsBody = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50vh;
  margin-top: 60px;
`;

//individual prizes styles
export const TableBegin = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fafafb;
  border-top-left-radius: 16px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const TableHead = styled.th`
  background-color: #f2f2f2;
  height: 50px;
  text-align: left;
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
`;
export const TableTr = styled.tr`
  &:hover {
    background: #938b8b14;
    cursor: pointer;
  }
`;
export const TableCell = styled.td`
  border-top: 1px solid #ddd;
  padding: 15px 0px;
  height: 70px;
  color: var(--600, #2c2669);
  color: #6053b9;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  font-weight: 500;
  line-height: 16px;
  span {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;
export const TableValue = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-width: 12px;
  color: #6053b9;
`;
export const PhoneNumber = styled.td`
  color: var(--500, #6053b9);
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;
export const TableNameAndAvatar = styled.td`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ShowAll = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 102px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 99px;
  border: 1px solid var(--600, #2c2669);
  cursor: pointer;
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;
export const StatusActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  max-width: fit-content;
  border-radius: 4px;
  background: var(--100, #efeef8);
  //font
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;
export const ShowPercent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  max-width: fit-content;
  border-radius: 4px;
  background: var(--500, #6053b9);
  color: var(--100, #fff);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;
export const Box = styled.div`
  border: 1px solid #2c2669;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  border-radius: 100%;
  margin-left: -21px;
  margin-top: -21px;
`;

//history styles
export const HistoryWrap = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 3px 8px 0px rgba(50, 50, 71, 0.05),
    0px 0px 1px 0px rgba(12, 26, 75, 0.24);
`;
export const DivideStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Status = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  font-weight: 500;
  line-height: 24px;
`;
export const DateUpdate = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const NameOnGroup = styled.div`
  display: flex;
  gap: 6px;
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const LINE = styled.div`
  width: 100%;
  background-color: #bfbae3;
  height: 2px;
  margin-top: 24px;
`;
export const StudentName = styled.div`
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 16px;
`;
export const StatusOfStatus = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
`;
