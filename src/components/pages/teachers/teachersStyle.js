import styled from "@emotion/styled";

export const TeachersComponent = styled.div`
  height: 100vh;
  background: #efeef8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
export const TeachersTop = styled.article`
  width: 100vw;
  max-width: 970px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .textinput {
    max-width: 318px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--300, #bfbae3);
    background: var(--Color-7, #fff);
  }
`;

export const AddTeacherButton = styled.button`
  border-radius: 6px;
  background: var(
    --600,
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    #2c2669
  );
  display: inline-flex;
  flex-direction: row;
  height: 55px;
  max-width: 200px;
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
  height: 80vh;
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
  color: var(--200, #cfcbea);
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
export const AddTeacherBtn = styled.button`
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
// teacher's profile page style
export const TeachersProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 970px;
  height: 100vh;
  margin-left: 100px;
`;
export const ProfileTab = styled.article`
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: 970px;
`;
export const TeacherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 340px;
  height: 376px;
  flex-shrink: 0;
  border-radius: 26px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--Color-7, #fff);
  box-shadow: 2px 2px 4px 0px rgba(174, 191, 237, 0.25);
`;
export const PinkHeader = styled.article`
  position: relative;
  width: 328px;
  height: 106px;
  border-radius: 20px;
  background: #bfbae3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 5px;
  .teacher-card {
    position: absolute;
    top: 40px;
    left: 20px;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    border: 4px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a098d5;
    color: #2c2669;
    font-family: "Public Sans";
    font-size: clamp(16px, 2vw+1rem, 50px);
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
  img {
    width: 25px;
  }
`;
export const TeacherProfileName = styled.h1`
  margin-top: 40px;
  margin-left: -150px;
  color: #2c2669;
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
export const TeacherPosition = styled.div`
  margin: 0 150px 0 0;
  display: flex;
  gap: 8px;
  span {
    display: flex;
    padding: 3px 10px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: #b7b2dd;
    color: #efeef8;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
`;
export const TeacherInfoDetails = styled.div`
  display: flex;
  gap: 150px;
  justify-content: space-between;
  margin-top: 13px;
  color: #a098d5;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  .label {
    color: #2c2669;
    font-weight: 700;
  }

  .caption {
    color: #2c2669;
    text-align: right;
    font-weight: 700;
  }
`;
//teachers  page tab controller
export const TeacherTabConrol = styled.div`
  width: 100%;
  max-width: 970px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  .tab-list {
    display: flex;
    flex-direction: column;
    width: 187px;
    height: 40px;
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

  .tab-content {
    margin-top: 20px;
    width: 100%;
  }
  
`