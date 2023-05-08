import React from "react";
import { SkillContainer } from "./Skill.style";
import SetSkills from "../SetSkills/SetSkills";

function Skill() {
  const language = [
    "./images/lang3.png",
    "./images/lang4.png",
    "./images/lang1.svg",
    "./images/lang2.svg",
  ];

  const frontend = [
    "./images/front1.png",
    "./images/front2.svg",
    "./images/front3.svg",
    "./images/front4.svg",
  ];

  const etc = ["./images/etc1.svg", "./images/etc2.svg"];

  const etc2 = ["./images/etc3.png", "./images/etc4.png", "./images/etc5.png"];

  return (
    <SkillContainer>
      <SetSkills images={language} />
      <SetSkills images={frontend} />
      <SetSkills images={etc} />
      <SetSkills images={etc2} />
    </SkillContainer>
  );
}

export default Skill;
