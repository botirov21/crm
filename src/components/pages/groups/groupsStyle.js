import styled from "styled-components";

export const GroupsCont=styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: var(--100, #efeef8);
  margin-top: 60px;
`
export const GroupsNav=styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
  .group-left{
 display: flex;
  flex-direction: row;
  justify-content: safe;
  align-items: center;
  gap: 20px;
  }
  .group-right{
display: flex;
  }
`