import React from "react";
import { SetSkillsContainer, ImageWrapper, Image } from "./SetSkills.style";
import Bounce from "react-reveal/Bounce";

function SetSkills({ images }) {
  return (
    <SetSkillsContainer>
      {images.map((img) => (
        <Bounce>
          <ImageWrapper>
            <Image src={img} />
          </ImageWrapper>
        </Bounce>
      ))}
    </SetSkillsContainer>
  );
}

export default SetSkills;
