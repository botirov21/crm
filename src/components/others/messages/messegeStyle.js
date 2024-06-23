import styled from "styled-components";

//no information page style
export const NoInfoPage = styled.div`
display: flex;
width: 100%;
  background-color: #95c2de;
  justify-content: center;
  align-items: center;
  height: 100vh;

.mainbox {
  background-color: #95c2de;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.assets{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
  img{
    height: 300px;
    width: 100%;
    max-width: 500px;
    position: absolute;
    top: 350px;
  }
}

.msg {
    position: relative;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif; 
    width: 75%;
    position: relative;
    font-size: large;
      font-size: clamp(10px, 2vw+1rem, 30px);
  }
p{
  text-align: center;
  font-weight: 400;
  font-size: clamp(10px, 2vw+1rem, 30px);
}

`