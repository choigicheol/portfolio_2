import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { data } from "../../data/data";
import { ProjectContainer } from "./Project.style";
import { Container, LeftTitle } from "../../style/global.style";

const Project = React.memo(function Project({ forwardRef }) {
  const [projects, setProjects] = useState([]);
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectCardNum, setSelectCardNum] = useState(null);

  const handleDetailView = (id) => {
    setIsDetailView(true);
    const copy = [...projects];
    setSelectCardNum(id);
    setProjects(copy);
  };

  const handleCloseDetailView = (e) => {
    e.stopPropagation();
    if (isDetailView) {
      setIsDetailView(false);
      const copy = data;
      setSelectCardNum(null);
      setProjects(copy);
    }
  };

  useEffect(() => {
    const reverseProjects = [];
    data.forEach((el) => reverseProjects.unshift(el));
    setProjects(reverseProjects);
  }, []);

  return (
    <Container ref={forwardRef}>
      <LeftTitle>
        <span>{"PROJECT"}</span>
      </LeftTitle>
      <ProjectContainer isDetailView={isDetailView}>
        {projects.map((project, idx) => {
          const { title, skills, mainScreen, screens, id, detail } = project;
          return (
            <ProjectCard
              key={idx}
              title={title}
              skills={skills}
              mainScreen={mainScreen}
              screens={screens}
              id={id}
              isSelectCard={selectCardNum === id}
              detail={detail}
              handleDetailView={handleDetailView}
              isDetailView={isDetailView}
              handleCloseDetailView={handleCloseDetailView}
            />
          );
        })}
      </ProjectContainer>
    </Container>
  );
});

export default Project;
