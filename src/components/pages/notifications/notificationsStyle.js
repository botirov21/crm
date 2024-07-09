import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  padding-right: 100px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid red 1px;
  height: 100vh;
  gap: 20px;
  padding-right: 100px;
`;

export const BlogWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  height: 70%;
  
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  border-radius: 16px 0px 0px 16px;
  background: var(--Color-7, #FFF);
  overflow-x: hidden; 
  overflow-y: auto; 
`;

export const Blog = styled.div`
  display: flex;
  border-bottom: 2px solid var(--200 , #CFCBEA);
  justify-content: start;
  background: ${props => props.clicked ? '#F3F2F2' : 'var(--Color-7, #FFF)'};
  width: 100%;
  padding: 10px 0px;
  padding-left: 10px;
  cursor: pointer;
  
  &:hover {
    background: #F3F2F2;
  }
`;

export const Title = styled.p`
  color: var(--600, #2C2669);
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Date = styled.p`
  width: 100%;
`;

export const Views = styled.p`
  width: 100%;
`;

export const BlogDetailWrap = styled.div`
  display: flex;
  height: 66%;
  flex: 1;
  border-radius: 0px 16px 16px 0px;
  background: var(--Color-7, #FFF);
  padding: 1% 1%;
`;
