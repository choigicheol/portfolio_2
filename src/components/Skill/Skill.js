import React from "react";
import SetSkills from "../SetSkills/SetSkills";
import { skills } from "../../data/data";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import {
  Container,
  ContentBox,
  ScrollArrowContainer,
  LeftTitle,
} from "../../style/global.style";

const Skill = React.memo(function Skill({ handleScrollToRef, forwardRef }) {
  return (
    <Container ref={forwardRef}>
      <LeftTitle>
        <span>{"SKILL"}</span>
      </LeftTitle>
      <ContentBox>
        {skills.map((skill) => (
          <SetSkills images={skill} />
        ))}
        <ScrollArrowContainer onClick={() => handleScrollToRef("Project")}>
          <ScrollArrow />
        </ScrollArrowContainer>
      </ContentBox>
    </Container>
  );
});

export default Skill;
