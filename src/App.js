import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./style/global.style";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Rail from "./components/Rail/Rail";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import { railSkill, railProject, railContact } from "./data/data";
import { motion, useScroll } from "framer-motion";
import CursorCircle from "./components/CursorCircle/CursorCircle";
import styled from "styled-components";
import { throttle } from "lodash";

function App() {
  const { scrollYProgress } = useScroll();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = throttle((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, 100);
  return (
    <ThemeProvider theme={theme}>
      <div
        onMouseMove={(e) => handleMouseMove(e)}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        <About />
        <Rail dir={"forward"} words={railSkill} page={0} />
        <Skill />
        <Rail dir={"reverse"} words={railProject} page={1} />
        <Project />
        <Rail dir={"forward"} words={railContact} page={2} />
        <Contact />
        <CursorCircle x={position.x} y={position.y} />
        {/* <Pointer x={position.x} y={position.y} /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

export const Pointer = styled.div`
  position: fixed;
  background-color: rgb(0, 255, 255, 0.9);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  left: ${(props) => props.x - 22}px;
  top: ${(props) => props.y - 22}px;
  transition: all 0.5s ease-out;
  mix-blend-mode: difference;
  /* z-index: 99999; */
  pointer-events: none;
`;
