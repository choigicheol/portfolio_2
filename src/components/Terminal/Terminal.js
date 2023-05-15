import React, { useState, useEffect, useCallback, useRef } from "react";
import TerminalLine from "../TerminalLine/TerminalLine";
import { CursorPointer } from "../../style/global.style";
import { directoryData } from "../../data/data";
import {
  Container,
  Top,
  ButtonContainer,
  Button,
  SrcText,
  TerminalContent,
  TerminalBase,
  NextDir,
  DirName,
} from "./Terminal.style";

const colors = ["#FF6E6E", "#FFE146", "#63CC63"];

const Terminal = React.memo(function Terminal() {
  const [root, setRoot] = useState("");
  const [subDirName, setSubDirName] = useState("");
  const [typingCount, setTypingCount] = useState(0);
  const [isEndRoot, setIsEndRoot] = useState(false);
  const [completeTyping, setCompleteTyping] = useState([]);

  const [directory, setDirectory] = useState();
  const [text, setText] = useState([]);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    setDirectory(directoryData.root.child);
  }, []);

  const firstText = "open  ";

  // 기본 typing Effect "-> ~ cd "
  useEffect(() => {
    const interval = setInterval(() => {
      setRoot(root + firstText[typingCount]);
      setTypingCount(typingCount + 1);
    }, 100);
    if (typingCount === firstText.length) {
      clearInterval(interval);
      setTimeout(() => setIsEndRoot(true), 1000);
      setTypingCount(0);
    }
    return () => {
      clearInterval(interval);
    };
  }, [root]);

  // ---------------------------------------------------------------------------------------------------------------------

  const handleSelectSubDir = useCallback((nextDirectory) => {
    setCompleteTyping([]);
    setTypingText("");
    if (nextDirectory.data === null) setDirectory({ ...nextDirectory.child });
    else setText([...nextDirectory.data]);
  }, []);

  const typingRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    const arrTimeoutId = [];

    const startTyping = () => {
      let delay = 0;
      for (let i = 0; i < text.length; i++) {
        const textLine = text[i];
        timeoutId = setTimeout(() => {
          if (i > 0) {
            setCompleteTyping(text.slice(0, i));
          }
          setTypingText(textLine);
        }, delay);
        arrTimeoutId.push(timeoutId);

        delay += text[i].length * 50 + 500;
      }
    };

    startTyping();

    return () => {
      arrTimeoutId.forEach((id) => clearTimeout(id));
    };
  }, [text]);

  useEffect(() => {
    typingRef.current.scrollTop = typingRef.current.scrollHeight;
  }, [typingText, completeTyping]);

  return (
    <Container>
      {/* 터미널 Top 상태창 */}
      <Top>
        <ButtonContainer>
          {colors.map((color, idx) => (
            <Button key={idx} color={color} />
          ))}
        </ButtonContainer>
        <SrcText>CholGiCheol@About/</SrcText>
        <div>⌥⌘1</div>
      </Top>
      {/* 터미널 body */}
      <TerminalContent ref={typingRef}>
        {/* 기본 root typing "-> ~ cd " typing */}
        <TerminalBase>
          <img src={"./images/terminalArrow.svg"} alt="arrow" />
          <DirName>{"~"}</DirName>
          {root + subDirName}
          {!subDirName && <CursorPointer />}
        </TerminalBase>
        {/* subDir List */}
        <TerminalBase>
          {isEndRoot &&
            Object.keys(directory).map((directoryName, idx) => (
              <NextDir
                key={idx}
                num={idx}
                directoryName={directoryName}
                subDirName={subDirName}
                onClick={() => {
                  handleSelectSubDir(directory[directoryName]);
                  setSubDirName(directoryName);
                }}
              >
                {directoryName}
              </NextDir>
            ))}
        </TerminalBase>
        {/* typing 완료 된 이전 글 */}
        {completeTyping.map((text, idx) => (
          <TerminalBase key={idx}>
            <img src={"./images/terminalArrow.svg"} alt="arrow" />
            {text}
          </TerminalBase>
        ))}
        {/* 소개글 typing */}
        {!!typingText && <TerminalLine text={typingText} />}
      </TerminalContent>
    </Container>
  );
});

export default Terminal;
