import React, { useState, useEffect, lazy, Suspense } from "react";
import { AboutContainer } from "./About.style";
import Fade from "react-reveal/Fade";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import {
  Container,
  ScrollArrowContainer,
  LeftTitle,
} from "../../style/global.style";

const LazyTerminal = lazy(() => import("../Terminal/Terminal"));

const About = React.memo(function About({ handleScrollToAbout }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setScrollY(scrollPosition);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <LeftTitle>
        <span>{"About"}</span>
      </LeftTitle>
      <AboutContainer>
        <Suspense>
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {scrollY > 18 ? (
              <Fade>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LazyTerminal />
                </div>
              </Fade>
            ) : (
              <></>
            )}
          </div>
        </Suspense>
        <ScrollArrowContainer onClick={() => handleScrollToAbout("Skill")}>
          <ScrollArrow />
        </ScrollArrowContainer>
      </AboutContainer>
    </Container>
  );
});

export default About;
