import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/global.style";
import Main from "./components/Main/Main";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import CursorCircle from "./components/CursorCircle/CursorCircle";
import _ from "lodash";
import About from "./components/About/About";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isShowAbout, setIsShowAbout] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    function handleScroll() {
      const scrollPosition =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPosition > 18) {
        setTimeout(() => {
          setIsShowAbout(true);
        }, 500);
      }
    }

    const throttledMouseMove = _.throttle(handleMouseMove, 100);
    const throttledScroll = _.throttle(handleScroll, 100);

    window.addEventListener("mousemove", throttledMouseMove);
    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const handleScrollToRef = useCallback((target) => {
    if (target === "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (target === "Skill") {
      skillRef.current.scrollIntoView({ behavior: "smooth" });
    } else projectRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main handleScrollToRef={handleScrollToRef} />
      <div id="subContainer">
        <div id="contentMaxWidth">
          <About
            forwardRef={aboutRef}
            isShowAbout={isShowAbout}
            handleScrollToRef={handleScrollToRef}
          />
          <Skill forwardRef={skillRef} handleScrollToRef={handleScrollToRef} />
          <Project forwardRef={projectRef} />
          <CursorCircle x={position.x} y={position.y} />
        </div>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
