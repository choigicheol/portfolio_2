import {
  MainContainer,
  Wrapper,
  Wrapper2,
  MainText,
  Bar,
  ScrollArea,
} from "./Main.style";
import React, { useEffect, useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

const Main = React.memo(function Main({ handleScrollToAbout }) {
  const [isMount, setIsMount] = useState(false);
  const [isShowMain, setIsShowMain] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setTransitionDuration(4800 / width);
  }, []);

  const mainText = [
    ["F", "R", "O", "N", "T"],
    ["E", "N", "D"],
    ["D", "E", "V", "E", "L", "O", "P", "E", "R"],
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsMount(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (isMount) {
      setTimeout(() => {
        setIsShowMain(true);
      }, 1000);
    }
  }, [isMount]);

  return (
    <MainContainer ref={ref}>
      <Wrapper>
        <MainText>{"FRONT"}</MainText>
        <Bar isMount={isMount} transitionDuration={transitionDuration} />
        <MainText>{"END"}</MainText>
      </Wrapper>
      <Wrapper2>
        <MainText>{"DEVELOPER"}</MainText>
        {isShowMain && (
          <ScrollArea onClick={() => handleScrollToAbout("About")}>
            <Fade>
              <div></div>
              <ScrollArrow />
            </Fade>
          </ScrollArea>
        )}
      </Wrapper2>
    </MainContainer>
  );
});

export default Main;
