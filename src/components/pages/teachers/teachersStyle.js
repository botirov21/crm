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
