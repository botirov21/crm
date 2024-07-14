import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: 100vh;
  gap: 0px;
  padding-right: 100px;
`;
export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const PageTitle = styled.h2`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  gap: 20px;
`;

export const BlogWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  height: 85%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  border-radius: 16px 0px 0px 16px;
  background: var(--Color-7, #fff);
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Blog = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid var(--200, #cfcbea);
  justify-content: start;
  background-color: ${(props) => (props.activeColor ? `#F3F2F2` : ``)};
  width: 100%;
  padding: 10px 0px;
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    background: #f3f2f2;
  }
`;

export const Title = styled.p`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: 0px;
  width: 90%;
`;

export const BlogInfosWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.p`
  color: var(--300, #bfbae3);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin: 0px;
`;

export const ViewWrapper = styled.p`
  display: flex;
  gap: 5px;
`;

export const View = styled.p`
  color: var(--300, #bfbae3);
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  margin: 0px;
`;
export const BlogDetailWrap = styled.div`
  display: flex;
  height: 80%;
  flex: 1;
  border-radius: 0px 16px 16px 0px;
  background: var(--Color-7, #fff);
  padding: 1% 1%;
`;

export const DetailTitle = styled.p`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 150% */
`;
export const DetailText = styled.p`
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

//modal Style
export const AddButton = styled.button`
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
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 17px;
  .ql-container {
    border: none;
  }
  .ql-toolbar {
    border: none;
    background: var(--200, #cfcbea);
  }
  .quillStyle {
    border-radius: 8px;
    border: none;
    background: var(--100, #efeef8);
    height: 200px;
  }
  .ql-editor.ql-blank::before {
    color: var(--200, #cfcbea);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
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
  margin: 0px;
`;
export const ModalInput = styled.input`
  display: flex;
  height: 40px;
  max-width: 100%;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--100, #efeef8);
  color: var(--600, #2c2669);
  font-family: "Public Sans";
  font-size: clamp(20px, 2vw+1rem, 24px);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-left: 10px;
  &:focus {
    outline: groove;
  }
  ::placeholder {
    color: var(--200, #cfcbea);
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const ModalTextarea = styled.textarea`
  display: flex;
  max-width: 100%;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--100, #efeef8);
  color: var(--600, #2c2669);
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
export const CreateBtn = styled.button`
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
