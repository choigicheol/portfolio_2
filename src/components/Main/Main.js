import {
  MainContainer,
  Wrapper,
  WrapperBetween,
  MainText,
  Bar,
  ScrollArea,
} from "./Main.style";
import React, { useEffect, useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

const Main = React.memo(function Main({ handleScrollToRef }) {
  const [isMount, setIsMount] = useState(false);
  const [isShowMain, setIsShowMain] = useState(false);
  const [transitionDuration, setTransitionDuration] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setTransitionDuration(4800 / width);
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
      <WrapperBetween>
        <MainText>{"DEVELOPER"}</MainText>
        {isShowMain && (
          <ScrollArea onClick={() => handleScrollToRef("About")}>
            <Fade>
              <ScrollArrow />
            </Fade>
          </ScrollArea>
        )}
      </WrapperBetween>
    </MainContainer>
  );
});

export default Main;
