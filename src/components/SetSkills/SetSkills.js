import React from "react";
import { SetSkillsContainer, ImageWrapper, Image } from "./SetSkills.style";
import Bounce from "react-reveal/Bounce";

function SetSkills({ images }) {
  return (
    <SetSkillsContainer>
      {images.map((img, idx) => (
        <Bounce key={idx}>
          <ImageWrapper>
            <Image src={img} />
          </ImageWrapper>
        </Bounce>
      ))}
    </SetSkillsContainer>
  );
}

export default SetSkills;
