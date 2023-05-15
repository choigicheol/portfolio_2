import React, { useState, Suspense, lazy } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import {
  Container,
  ImgDiv,
  ExplainArea,
  DetailView,
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
  isSelect,
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
      isSelect={isSelect}
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
              <img
                src="./images/closeIcon.webp"
                style={{ height: "30px" }}
                alt="close"
              />
            </CloseButton>
          </CloseButtonArea>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px 0",
            }}
          >
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
          </div>
        </DetailView>
      ) : (
        // project card
        <>
          <ImgDiv mainScreen={mainScreen} />
          <ExplainArea isOver={isOver}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</div>
            <div>
              {skills.map((skill, idx) => {
                return (
                  <span key={idx} style={{ marginRight: "5px" }}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </ExplainArea>
        </>
      )}
    </Container>
  );
}

export default ProjectCard;
