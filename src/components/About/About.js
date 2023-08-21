import React, { lazy, Suspense } from "react";
import { AboutContainer } from "./About.style";
import Fade from "react-reveal/Fade";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import {
  Container,
  ScrollArrowContainer,
  LeftTitle,
} from "../../style/global.style";

const LazyTerminal = lazy(() => import("../Terminal/Terminal"));

const About = React.memo(function About({
  isShowAbout,
  handleScrollToRef,
  forwardRef,
}) {
  return (
    <Container ref={forwardRef}>
      <LeftTitle>
        <span>{"About"}</span>
      </LeftTitle>
      <AboutContainer>
        {isShowAbout ? (
          <Fade>
            <div className="WH100 flexCenter">
              <Suspense>
                <LazyTerminal />
              </Suspense>
            </div>
          </Fade>
        ) : (
          <div className="WH100" />
        )}
        <ScrollArrowContainer onClick={() => handleScrollToRef("Skill")}>
          <ScrollArrow />
        </ScrollArrowContainer>
      </AboutContainer>
    </Container>
  );
});

export default About;
