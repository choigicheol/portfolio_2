import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  padding: 0 80px;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 0 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  transform: justify-content 0.1s easy;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  transform: justify-content 0.1s easy;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const AboutText = styled.span`
  font-size: 300px;
  letter-spacing: -7px;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: 1550px) {
    font-size: 250px;
  }
  @media screen and (max-width: 1450px) {
    font-size: 200px;
  }
  @media screen and (max-width: 1150px) {
    font-size: 180px;
  }
  @media screen and (max-width: 860px) {
    font-size: 150px;
  }
  @media screen and (max-width: 720px) {
    font-size: 120px;
  }
  @media screen and (max-width: 480px) {
    font-size: 90px;
    letter-spacing: -2px;
  }
`;

export const Bar = styled.div`
  height: 50px;
  width: ${(props) => (props.isMount ? "100%" : "0%")};
  background: ${(props) => props.theme.fontColor};
  margin: 0 20px;
  transition: width 3s;
  @media screen and (max-width: 1550px) {
    height: 46px;
  }
  @media screen and (max-width: 1450px) {
    height: 42px;
  }
  @media screen and (max-width: 1150px) {
    height: 38px;
  }
  @media screen and (max-width: 860px) {
    height: 34px;
  }
  @media screen and (max-width: 720px) {
    height: 30px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 860px) {
    margin-left: 0px;
  }
`;
