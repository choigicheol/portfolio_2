import React from "react";
import useTypingEffect from "../../hooks/useTypingEffect";
import { CursorPointer } from "../../style/global.style";
import { TerminalBase } from "../Terminal/Terminal.style";

const TerminalLine = React.memo(function TerminalLine({ text }) {
  let typingText = useTypingEffect(text, 50);

  return (
    <TerminalBase>
      <img src={"./images/terminalArrow.svg"} alt="arrow" />
      {typingText}
      <CursorPointer />
    </TerminalBase>
  );
});

export default TerminalLine;
