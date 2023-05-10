import React from "react";
import { SkillContainer } from "./Skill.style";
import SetSkills from "../SetSkills/SetSkills";
import { skills } from "../../data/data";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import {
  Container,
  ScrollArrowContainer,
  LeftTitle,
} from "../../style/global.style";

const Skill = React.memo(function Skill({ handleScrollToAbout }) {
  return (
    <Container>
      <LeftTitle>
        <span>{"SKILL"}</span>
      </LeftTitle>
      <SkillContainer>
        {skills.map((skill) => (
          <SetSkills images={skill} />
        ))}
        <ScrollArrowContainer onClick={() => handleScrollToAbout("Project")}>
          <ScrollArrow />
        </ScrollArrowContainer>
      </SkillContainer>
    </Container>
  );
});

export default Skill;
