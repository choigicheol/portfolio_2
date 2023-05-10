import styled from "styled-components";

const size = {
  mobile: "767px",
  desktop: "768px",
};

const theme = {
  // backgroundColor: "rgba(38, 37, 40, 1)",
  // backgroundColor: "rgba(56,66,93)",
  // backgroundColor: "rgba(67,88,123,0.8)",
  // backgroundColor: "rgba(67,98,103)",
  // fontColor: "#ffffff",
  // backgroundColor: "rgb(218, 253, 243)",
  backgroundColor: "rgba(38, 37, 40, 1)",
  fontColor: "#d2d2d2",
  fontFamily: "Oswald-bold",
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;

export const Pointer = styled.div`
  position: fixed;
  background-color: rgb(0, 255, 255, 0.9);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  left: -22px;
  top: -22px;
  transition: all 0.5s ease-out;
  mix-blend-mode: difference;
  z-index: 99999;
  pointer-events: none;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const CenterContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const CursorPointer = styled.span`
  display: inline-block;
  height: 100%;
  width: 9px;
  background: #ffffff;
  color: #ffffff;
`;

export const ScrollArrowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

export const LeftTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #ffffff;
    font-family: Oswald-bold;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 46px;
    letter-spacing: 5px;
    padding: 10px 0;
    padding-left: 5px;
    border-left: 1px solid #ffffff;
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};
  padding: 40px 80px;
  box-sizing: border-box;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 20px 10px;
  }
`;
