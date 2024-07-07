import styled from "@emotion/styled";

export const MainWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: solid red 1px;
height: 100vh;
`
export const BlogWrapper = styled.div`
display: flex; 
flex-direction: column;
width: 30%;
height: 60%;
background: var(--Color-7, #FFF);
`
export const Blog = styled.div`
display: flex; 
width: 100%;
border-bottom: 2px solid var(--200, #CFCBEA);
`
export const Title = styled.p`
color: var(--600, #2C2669);
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 125% */
`
export const date = styled.p`
display: flex; 
width: 100%;
`
export const views = styled.p`
display: flex; 
width: 100%;
`

//style for notification detail
export const BlogDetailWrap = styled.div`
display: flex; 
width: 50%;
height: 60%;
border-radius: 0px 16px 16px 0px;
background: var(--Color-7, #FFF);
`