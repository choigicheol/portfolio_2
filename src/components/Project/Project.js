import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { data } from "../../data/data";
import { ProjectContainer } from "./Project.style";
import { Container, LeftTitle } from "../../style/global.style";

const Project = React.memo(function Project() {
  const [projects, setProjects] = useState(data);
  const [isDetailView, setIsDetailView] = useState(false);

  const handleDetailView = (id) => {
    setIsDetailView(true);
    const copy = [...projects];
    copy[id].isSelect = true;
    setProjects(copy);
  };

  const handleCloseDetailView = (e) => {
    e.stopPropagation();
    if (isDetailView) {
      setIsDetailView(false);
      const copy = [...data];
      copy.forEach((el) => (el.isSelect = false));
      setProjects(copy);
    }
  };

  return (
    <Container>
      <LeftTitle>
        <span>{"PROJECT"}</span>
      </LeftTitle>
      <ProjectContainer isDetailView={isDetailView}>
        {projects.map((project, idx) => {
          const { title, skills, mainScreen, screens, id, isSelect, detail } =
            project;
          return (
            <ProjectCard
              screens={screens}
              key={idx}
              id={id}
              title={title}
              skills={skills}
              mainScreen={mainScreen}
              handleDetailView={handleDetailView}
              isSelect={isSelect}
              isDetailView={isDetailView}
              detail={detail}
              handleCloseDetailView={handleCloseDetailView}
            />
          );
        })}
      </ProjectContainer>
    </Container>
  );
});

export default Project;
