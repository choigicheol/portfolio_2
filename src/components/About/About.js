import {
  AboutContainer,
  Wrapper,
  Wrapper2,
  AboutText,
  Bar,
  AboutMe,
} from "./About.style";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

function About() {
  const [isMount, setIsMount] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);

  const aboutText = [
    ["F", "R", "O", "N", "T"],
    ["E", "N", "D"],
    ["D", "E", "V", "E", "L", "O", "P", "E", "R"],
  ];

  useEffect(() => {
    console.log("render");
    setIsMount(true);
    setTimeout(() => {
      setIsShowAbout(true);
    }, 1000);
  }, []);

  return (
    <AboutContainer>
      <Wrapper>
        <div>
          <AboutText>{"FRONT"}</AboutText>
        </div>
        <Bar isMount={isMount} />
        <div>
          <AboutText>{"END"}</AboutText>
        </div>
      </Wrapper>
      <Wrapper2>
        <div>
          <AboutText>{"DEVELOPER"}</AboutText>
        </div>
        {isShowAbout && (
          <Fade>
            <AboutMe>
              <p>
                안녕하세요 재밌는 기능 만드는걸 좋아하고 인간관계를 중요시하는
                Front-end 개발자 최기철입니다.
              </p>
              <ScrollArrow />
            </AboutMe>
          </Fade>
        )}
      </Wrapper2>
    </AboutContainer>
  );
}

export default About;
