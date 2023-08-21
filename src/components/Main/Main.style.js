import styled from "styled-components";

export const MainContainer = styled.div`
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

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const WrapperBetween = styled(Wrapper)`
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const MainText = styled.span`
  font-size: 17vw;
  letter-spacing: -7px;
  cursor: default;
  font-family: "Oswald-bold", sans-serif;
  text-shadow: 5px 5px 2px #000000;
  @media screen and (max-width: 480px) {
    font-size: 90px;
    letter-spacing: -2px;
  }
`;

export const Bar = styled.div`
  height: 3vw;
  width: ${(props) => (props.isMount ? "100%" : "0%")};
  opacity: ${(props) => (props.isMount ? 1 : 0)};
  background: ${(props) => props.theme.fontColor};
  margin: 0 20px;
  transition: ${(props) => `width ${props.transitionDuration}s ease-out`};
  box-shadow: 5px 5px 2px #000000;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ScrollArea = styled.div`
  display: flex;
  width: 120px;
  height: 100%;
  align-items: flex-end;
  margin-left: 50px;
  padding-bottom: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 860px) {
    margin-left: 0px;
  }
`;
