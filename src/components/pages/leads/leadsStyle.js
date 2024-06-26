import styled from "styled-components"

 export const LeadsContainer=styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100vh;
 background: var(--100, #EFEEF8);
 `
 export const LeadsNav=styled.article`
 display: flex;
 flex-direction: row;
 justify-content: safe;
 align-items: center;
 gap: 20px;
 `
 export const LeadsMenu=styled.div`
width: 60%;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .menu-handle{
     display: flex;
    flex-direction: column;
    width: 107px;
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
 `
 export const MenuDisplay=styled.div`
 display: flex;
 justify-content: start;
 margin-top: 60px;
 align-items: center;
 `