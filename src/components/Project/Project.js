import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "../ProjectCard/ProjectCard";
import { data } from "../../data/data";

function Project() {
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

  useEffect(() => {
    console.log("renderProject");
  }, []);

  return (
    <Container isDetailView={isDetailView}>
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
    </Container>
  );
}

export default Project;

export const Container = styled.div`
  display: ${(props) => (props.isDetailView ? "flex" : "grid")};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  place-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  padding: 0 80px;
  /* pointer-events: auto; */
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
  }
`;
