import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme, { Pointer } from "./style/global.style";
import { motion, useScroll } from "framer-motion";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Rail from "./components/Rail/Rail";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

function App() {
  const { scrollYProgress } = useScroll();
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const xyHandler = (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    setXY({ x: mouseX, y: mouseY });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // const timer = setInterval(() => {
    // }, 100);
    // return () => {
    //   clearInterval(timer);
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div onMouseMove={(e) => xyHandler(e)}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <About />
        <Rail scrollY={scrollY} dir={"forward"} title={"SKILL"} page={0} />
        <Skill />
        <Rail scrollY={scrollY} dir={"reverse"} title={"PROJECT"} page={1} />
        <Project />
        <Rail scrollY={scrollY} dir={"forward"} title={"CONTACT"} page={2} />
        <Contact />
      </div>
      <Pointer
        style={{
          WebkitTransform: `translate3d(${xy.x - 25}px, ${xy.y - 25}px, 0)`,
          transform: `translate(${xy.x}px, ${xy.y}px)`,
        }}
      />
    </ThemeProvider>
  );
}

export default App;
