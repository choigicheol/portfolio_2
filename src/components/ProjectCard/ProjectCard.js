import React, { useState, Suspense, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css";
import {
  Container,
  ImgDiv,
  ExplainArea,
  DetailView,
  ContentBox,
  SlideImage,
  CloseButton,
  CloseButtonArea,
} from "./ProjectCard.style";

const LazyDetail = lazy(() => import("../ProjectDetail/ProjectDetail"));
const LazySlider = lazy(() => import("react-slick"));

function ProjectCard({
  title = "",
  skills = [],
  mainScreen = "",
  screens,
  id,
  handleDetailView,
  isSelectCard,
  isDetailView,
  detail,
  handleCloseDetailView,
}) {
  const [isOver, setIsOver] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container
      isDetailView={isDetailView}
      isSelectCard={isSelectCard}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      onClick={() => handleDetailView(id)}
    >
      {isDetailView ? (
        // project detail
        <DetailView>
          <CloseButtonArea>
            <CloseButton
              onClick={(e) => {
                handleCloseDetailView(e);
                setIsOver(false);
              }}
            >
              <img src="./images/closeIcon.webp" className="W30" alt="close" />
            </CloseButton>
          </CloseButtonArea>
          <ContentBox>
            {/* project 설명 */}
            <Suspense fallback={null}>
              <LazyDetail props={detail} />

              {/* carousel */}
              <LazySlider {...settings}>
                {screens.map((screen, idx) => (
                  <SlideImage key={idx} url={screen} />
                ))}
              </LazySlider>
            </Suspense>
          </ContentBox>
        </DetailView>
      ) : (
        // project card
        <>
          <ImgDiv mainScreen={mainScreen} />
          <ExplainArea isOver={isOver}>
            <div className="explainTitle">{title}</div>
            <div>
              {skills.map((skill, idx) => {
                return <span key={idx}>{skill}</span>;
              })}
            </div>
          </ExplainArea>
        </>
      )}
    </Container>
  );
}

export default ProjectCard;
