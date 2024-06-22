import styled from "@emotion/styled";

export const SidebarComponent=styled.article`
display: flex;
width: 256px;
height: 100vh;
padding: 24px;
flex-direction: column;
align-items: center;
/* justify-content: center; */
gap: 24px;
flex-shrink: 0;
border-radius: 12px;
border-right: 1px solid rgba(0, 0, 0, 0.10);
background: #FFF;
position: fixed;
top: 0;
left: 0;
`
export const SidebarHeader=styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
button{
    /* width: 100%; */
    max-width: 210px;
    width: 210px;
    height: 44px;
    border-radius: 36.221px;
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
color: var(--Color-7, #FFF);
font-family: "Public Sans";
font-size: clamp(14px,2vw +1rem,20px);
font-style: normal;
font-weight: 500;
line-height: 16px;
&:hover{
    cursor: pointer;
    background-color: #5C2567;
    transition: all ease-in-out 0.2s;
}
}
div{
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
select{
    border-radius: 8px;
    box-decoration-break: none;
}
`