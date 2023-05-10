import React from "react";
import styled from "styled-components";
import useTypingEffect from "../../hooks/useTypingEffect";
import { CursorPointer } from "../../style/global.style";

const TerminalLine = React.memo(function TerminalLine({ text }) {
  const show = useTypingEffect(text, 100);

  return (
    <TerminalBase>
      <img src={"./images/terminalArrow.svg"} alt="arrow" />
      {show}
      <CursorPointer />
    </TerminalBase>
  );
});

export default TerminalLine;

export const TerminalBase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  img {
    height: 20px;
    width: 18px;
    margin-right: 10px;
  }
`;
