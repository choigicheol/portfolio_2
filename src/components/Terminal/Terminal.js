import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TerminalLine from "../TerminalLine/TerminalLine";
import { CursorPointer } from "../../style/global.style";

const colors = ["#FF6E6E", "#FFE146", "#63CC63"];

const Terminal = React.memo(function Terminal() {
  const [root, setRoot] = useState("");
  const [subDirName, setSubDirName] = useState("");
  const [typingCount, setTypingCount] = useState(0);
  const [isEndRoot, setIsEndRoot] = useState(false);
  const [selectDir, setSelectDir] = useState({ isShow: false, idx: 0 });
  const [completeTyping, setCompleteTyping] = useState([]);
  const [showTyping, setShowTyping] = useState([]);
  const firstText = "안녕하세요 최기철입니다/";
  const subDirs = ["Hwo Am I", "Personality"];

  const showText = [
    `안녕하세요 최기철입니다`,
    "저는 이런 사람입니다",
    "그리고 이런거를 잘합니다",
  ];

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

  const handleSelectSubDir = (subDirName, idx) => {
    setCompleteTyping([]);
    setSubDirName(subDirName);
    setSelectDir({ isShow: true, idx });
  };

  useEffect(() => {
    // setTimeout(() => {
    if (selectDir.isShow) {
      let delay = 0;
      showText.forEach((text, idx) => {
        if (!idx) {
          setShowTyping(<TerminalLine text={text} />);
        }
        if (idx > 0) {
          setTimeout(() => {
            setCompleteTyping(showText.slice(0, idx));
            setShowTyping(<TerminalLine text={text} />);
          }, delay);
        }
        delay += showText[idx].length * 100 + 100;
      });
    }
    // }, 300);
  }, [selectDir]);

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
      <TerminalContent>
        {/* 기본 root typing "-> ~ cd " typing */}
        <TerminalBase>
          <img src={"./images/terminalArrow.svg"} alt="arrow" />
          <DirName>{"~"}</DirName>
          {root + subDirName}
          {!selectDir.isShow && <CursorPointer />}
        </TerminalBase>
        {/* subDir List */}
        <TerminalBase>
          {isEndRoot &&
            subDirs.map((subDir, idx) => (
              <SubDirName
                key={idx}
                num={idx}
                selectDir={selectDir}
                onClick={() => handleSelectSubDir(subDir, idx)}
              >
                {subDir}
              </SubDirName>
            ))}
        </TerminalBase>
        {/* typing 완료 된 이전 글 */}
        {completeTyping.map((text) => (
          <TerminalBase>
            <img src={"./images/terminalArrow.svg"} alt="arrow" />
            {text}
          </TerminalBase>
        ))}
        {/* 소개글 typing */}
        {showTyping}
      </TerminalContent>
    </Container>
  );
});

export default Terminal;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  border: 0.5px solid #eeeeee;
  border-radius: 2%;
  overflow: hidden;
  background: rgb(29, 30, 39);
`;

export const Top = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000000;
  border-shadow: 1px 0 1px #000000;
  background: rgb(47, 39, 38);
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
`;

export const Button = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid black;
  background: ${(props) => props.color};
`;

export const SrcText = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: center;
`;

export const KeyBackgroundImg = styled.div`
  width: 14px;
  height: 14px;
  background-url: url("./images/commandKey.png");
`;

export const TerminalContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const TerminalBase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  white-space: pre;
  img {
    height: 20px;
    width: 18px;
    margin-right: 10px;
  }
`;

export const SubDirName = styled.div`
  /* font-family: Oswald-bold; */
  color: ${(props) =>
    props.selectDir.isShow && props.num === props.selectDir.idx
      ? "#2e2e2e"
      : "tomato"};
  font-size: 18px;
  background: ${(props) =>
    props.selectDir.isShow && props.num === props.selectDir.idx
      ? "#ffffff"
      : "none"};

  cursor: pointer;
  margin-right: 30px;
`;

export const DirName = styled.span`
  color: rgb(73, 224, 244);
  font-size: 25px;
  margin-right: 10px;
`;
