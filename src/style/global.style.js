import styled from "styled-components";

const size = {
  mobile: "767px",
  desktop: "768px",
};

const theme = {
  backgroundColor: "rgba(38, 37, 40, 0.99)",
  fontColor: "#c8c8c8",
  fontFamily: "Oswald",
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;

export const Pointer = styled.div`
  position: absolute;
  background-color: rgb(0, 255, 255, 0.9);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  left: -22px;
  top: -22px;
  /* transition: all 0.1s ease-out; */
  mix-blend-mode: difference;
  transition: all 0.2s ease;
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
