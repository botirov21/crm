import styled from "@emotion/styled";
import backimg from "../../assets/./welcome-pngs/homeimage.jpeg";
export const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const HomeNav = styled.nav`
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .nav-left {
    display: flex;
    h1 {
      color: var(--600, #2c2669);
      font-family: "Public Sans";
      font-size: clamp(30px, 2vw+1rem, 40px);
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
    }
  }
  .nav-right {
    display: flex;
    flex-direction: row;
    gap: 20px;
    button {
      display: flex;
      width: 120px;
      height: 40px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background: var(
        --600,
        linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
        #2c2669
      );
      color: var(--Color-7, #fff);
      text-align: center;
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      cursor: pointer;
      box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.25);
    }
    p {
      color: var(--Ocean-dark, #1e1e1e);
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    div {
      display: flex;
      width: 88px;
      height: 40px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      border-radius: 4px;
      border: 1px solid var(--600, #2c2669);
      box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(${backimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    color: var(--Color-7, #fff);
    text-align: center;
    font-family: "Public Sans";
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    max-width: 700px;
  }
  button {
    display: inline-flex;
    width: 200px;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--Color-7, #fff);
    color: var(--600, #2c2669);
    text-align: center;
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
  }
`;
