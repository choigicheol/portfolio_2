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

  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    const throttledMouseMove = _.throttle(handleMouseMove, 100);

    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const handleScrollToAbout = useCallback((target) => {
    if (target === "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (target === "Skill") {
      skillRef.current.scrollIntoView({ behavior: "smooth" });
    } else projectRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main handleScrollToAbout={handleScrollToAbout} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            width: "100%",
          }}
        >
          <div ref={aboutRef}></div>
          <About handleScrollToAbout={handleScrollToAbout} />
          {/* <Rail dir={"forward"} words={railSkill} page={0} /> */}
          <div ref={skillRef}></div>
          <Skill handleScrollToAbout={handleScrollToAbout} />
          {/* <Rail dir={"reverse"} words={railProject} page={1} /> */}
          <div ref={projectRef}></div>
          <Project handleScrollToAbout={handleScrollToAbout} />
          {/* <Rail dir={"forward"} words={railContact} page={2} /> */}
          <CursorCircle x={position.x} y={position.y} />
        </div>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
