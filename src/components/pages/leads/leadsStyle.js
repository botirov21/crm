import styled from "styled-components";

export const LeadsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(--100, #efeef8);
  margin-top: 60px;
`;
export const LeadsNav = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80vw;
  gap: 20px;
`;
export const LeadsMenu = styled.div`
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .menu-handle {
    display: flex;
    flex-direction: column;
    width: 107px;
    height: 55px;
    justify-content: center;
    align-items: center;
    border: 2px solid #2c2669;
    color: var(--600, #2c2669);
    cursor: pointer;
    font-family: "Public Sans";
    font-size: clamp(14px, 2vw+1rem, 20px);
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
`;
export const MenuDisplay = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 60px;
  align-items: center;
`;

//H Menu style

export const HMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  height: 80vh;
  width: 100%;

  background-color: #efeef8;
  gap: 30px;
`;

export const FromWhereCont = styled.article`
width: 100%;
  max-width: 387px;
  min-height: 662px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Color-7, #fff);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  padding: 20px;
  h1 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: clamp(22px, 2vw+1rem, 30px);
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
`;
export const FromWhereBtn = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 10px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid var(--600, #2c2669);
  cursor: pointer;
  background: #fff;
`;

export const FromWhereInfo=styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  /* max-height: 60px; */ 
  border-radius: 6px;
  border: 1px solid var(--300, #bfbae3);
`
export const FromWhereInfosWr=styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding: 10px 16px; 
  p {
    color: var(--500, #6053b9);
    font-family: "Public Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    margin: 0px;
  }
`

export const SectionsCont = styled.article`
  width: 387px;
  height: 916px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Color-7, #fff);
    display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
    h1 {
    color: var(--600, #2c2669);
    font-family: "Public Sans";
    font-size: clamp(22px, 2vw+1rem, 30px);
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
`;


//section accord style
export const CourseDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Texts= styled.div`
  display: flex;
  gap: 10px;
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;
export const NumberStudents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  padding: 4px;
  border-radius: 999px;
  background: var(--100, #efeef8);
  //font
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
`;



export const StudentInfoWappper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--100, #efeef8);
  margin-bottom: 10px;
`;
export const StudentInfoLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const StudentInfoAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background-color: #2c2669;
  border-radius: 100%;
  color: var(--Color-7, #fff);
  //font
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`;

export const StudentInfoDetailed= styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const StudentName = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;
export const StudentNumber = styled.div`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;
export const StudentInfoRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const SubjectTextAndEditt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props)=> props.$width100p ? `100%` : ``};
`;
export const StudentNameMenu = styled.div`
color: var(--500, #6053B9);
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */
`;
export const StudentAdditionals = styled.div`
  color: var(--400, #a098d5);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;